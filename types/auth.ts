export type Role = "admin" | "moderator" | "user";
export type User = {
  id: string;
  roles: Array<Role>;
  blockedBy: Array<string>;
};
