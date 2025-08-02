/**
 * Attribute Based Access Control
 */

import { auth } from "@clerk/nextjs/server";
import { type Role, type User } from "~/types/auth";
import { type Todo, type Comment } from "~/types/data";

type PermissionCheck<Key extends keyof Permissions> =
  | boolean
  | ((user: User, data: Permissions[Key]["dataType"]) => boolean);

type RolesWithPermissions = {
  [R in Role]: Partial<{
    [Key in keyof Permissions]: Partial<{
      [Action in Permissions[Key]["action"]]: PermissionCheck<Key>;
    }>;
  }>;
};

type Permissions = {
  comments: {
    dataType: Comment;
    action: "view" | "create" | "update" | "delete";
  };
  todos: {
    dataType: Todo;
    action: "view" | "create" | "update" | "delete";
  };
};

const ROLES = {
  admin: {
    comments: {
      view: true,
      create: true,
      update: true
    },
    todos: {
      view: true,
      create: true,
      update: true,
      delete: true
    }
  },
  moderator: {
    comments: {
      view: true,
      create: true,
      update: true
    },
    todos: {
      view: true,
      create: true,
      update: true,
      delete: (_user: User, todo: Todo) => todo.complete
    }
  },
  user: {
    comments: {
      view: (user, comment) => !user.blockedBy.includes(comment.authorId),
      create: true,
      update: (user, comment) => comment.authorId === user.id
    },
    todos: {
      view: (user, todo) => !user.blockedBy.includes(todo.userId),
      create: true,
      update: (user, todo) => todo.userId === user.id || todo.invitedUsers.includes(user.id),
      delete: (user, todo) => (todo.userId === user.id || todo.invitedUsers.includes(user.id)) && todo.complete
    }
  }
} as const satisfies RolesWithPermissions;

export async function getUser(): Promise<User | null> {
  const { userId, sessionClaims } = await auth();

  if (!userId || !sessionClaims) {
    return null;
  }

  return { id: userId, roles: sessionClaims.roles, blockedBy: [] };
}

export function hasPermission<Resource extends keyof Permissions>(
  user: User,
  resource: Resource,
  action: Permissions[Resource]["action"],
  data?: Permissions[Resource]["dataType"]
) {
  return user.roles.some((role) => {
    const permission = (ROLES as RolesWithPermissions)[role][resource]?.[action];
    if (permission == null) {
      return false;
    }

    if (typeof permission === "boolean") {
      return permission;
    }
    return data != null && permission(user, data);
  });
}
