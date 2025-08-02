import { Webhook } from "svix";

import { type WebhookEvent } from "@clerk/backend";
import { clerkClient } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { env } from "~/data/env/server";

export async function POST(request: Request) {
  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Error occurred -- no svix headers", { status: 400 });
  }

  const payload = request.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(env.CLERK_WEBHOOK_SECRET);
  let event: WebhookEvent;

  try {
    event = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature
    }) as WebhookEvent;
  } catch (error) {
    console.error("Error verified webhook", error);
    return new Response("Error occurred", {
      status: 400
    });
  }

  const clerk = await clerkClient();
  switch (event.type) {
    case "user.created": {
      await clerk.users.updateUser(event.data.id, {
        publicMetadata: {
          roles: ["user"]
        }
      });
      break;
    }
  }

  return new Response("", { status: 200 });
}
