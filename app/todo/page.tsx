import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Card, CardFooter, CardHeader, CardTitle, Button } from "@szum-tech/design-system";
import { getUser, hasPermission } from "~/lib/auth";
import { type Todo } from "~/types/data";

const todos: Array<Todo> = [
  {
    id: "1",
    title: "Make a dinner",
    userId: "1",
    complete: true,
    invitedUsers: []
  },
  {
    id: "2",
    title: "Build a project",
    userId: "1",
    complete: false,
    invitedUsers: []
  },
  {
    id: "3",
    title: "Learn Auth",
    userId: "1",
    complete: true,
    invitedUsers: []
  },
  {
    id: "4",
    title: "Change a Job",
    userId: "1",
    complete: false,
    invitedUsers: []
  }
];

export default async function TodoPage() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return (
    <main className="container mx-auto flex flex-col items-center py-10">
      <div className="mb-20 text-center">
        <h1 className="text-heading-4">
          UserID: <strong>{user.id}</strong>
        </h1>
        <h2 className="text-subtitle-1">
          Role: <strong>{user.roles.join(" ")}</strong>
        </h2>
      </div>

      <div className="grid w-full grid-cols-3 gap-8">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} user={user} />
        ))}
      </div>
    </main>
  );
}

function TodoCard({ todo, user }: { todo: Todo; user: User }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="inline-flex items-center gap-4">
            {todo.complete ? <CheckIcon className="size-6" /> : <Cross2Icon className="size-6" />}
            {todo.title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardFooter className="gap-x-4">
        <Button disabled={!hasPermission(user, "todos", "view", todo)}>view</Button>
        <Button disabled={!hasPermission(user, "todos", "update", todo)}>update</Button>
        <Button disabled={!hasPermission(user, "todos", "delete", todo)} color="error">
          delete
        </Button>
      </CardFooter>
    </Card>
  );
}
