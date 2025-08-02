import { auth } from "@clerk/nextjs/server";
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@szum-tech/design-system";
import { hasPermission } from "~/lib/auth";
import { type User } from "~/types/auth";

const authorId = "2";

export default async function Home() {
  const { userId, sessionClaims } = await auth();

  if (!userId || !sessionClaims) {
    return null;
  }

  const user: User = {
    id: userId,
    roles: sessionClaims?.roles,
    blockedBy: []
  };

  return (
    <main className="container mx-auto flex flex-col items-center py-10">
      <div className="mb-20 text-center">
        <h1 className="text-heading-4">
          UserID: <strong>{user.id}</strong>
        </h1>
        <h2 className="text-subtitle-1">
          Role: <strong>{user.roles}</strong>
        </h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Some content here</CardContent>
        {hasPermission(user, "comments", "update") || user.id === authorId ? (
          <CardFooter>
            <Button color="error">Delete</Button>
          </CardFooter>
        ) : null}
      </Card>
    </main>
  );
}
