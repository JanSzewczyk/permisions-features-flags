const ROLES = {
  admin: ["view:comment", "create:comment", "update:comment", "delete:comment"],
  moderator: ["view:comment", "create:comment", "delete:comment", "update:ownComments"],
  user: ["view:comment", "create:comment", "delete:ownComments", "update:ownComments"]
} as const;

export type Role = keyof typeof ROLES;
export type User = {
  id: string;
  role: Role;
};

type Permission = (typeof ROLES)[Role][number];

export function hasPermission(user: User, permission: Permission) {
  return ROLES[user.role].includes(permission);
}
