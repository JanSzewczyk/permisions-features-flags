import { auth } from "@clerk/nextjs/server";
import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Header } from "@szum-tech/design-system";
import { hasPermission, type User } from "~/lib/auth";

// const user: User = { role: "user", id: "1" };
const authorId = "2";

export default async function Home() {
  const { userId, sessionClaims } = await auth();

  if (!userId || !sessionClaims) {
    return null;
  }

  console.log(sessionClaims);
  const user = {
    id: userId,
    roles: sessionClaims?.roles
  };

  return (
    <div>
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
          {hasPermission(user, "delete:comment") ||
          (hasPermission(user, "delete:ownComments") && user.id === authorId) ? (
            <CardFooter>
              <Button color="error">Delete</Button>
            </CardFooter>
          ) : null}
        </Card>
      </main>
    </div>
  );
}
