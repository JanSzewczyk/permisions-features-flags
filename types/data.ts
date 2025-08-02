export type Comment = {
  id: string;
  body: string;
  authorId: string;
  createdAt: Date;
};

export type Todo = {
  id: string;
  title: string;
  userId: string;
  complete: boolean;
  invitedUsers: Array<string>;
};
