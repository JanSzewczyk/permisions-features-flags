import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from "@szum-tech/design-system";
import { hasPermission, type User } from "~/lib/auth";

const user: User = { role: "user", id: "1" };
const authorId = "2";

export default async function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center py-10">
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
  );
}
