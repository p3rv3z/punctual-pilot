export type NoteInfo = {
  title: string;
  lastEditTime: number;
};

export const notesMock: NoteInfo[] = [
  { title: "Note one", lastEditTime: new Date().getDate() },
  { title: "Note two", lastEditTime: new Date().getDate() },
];
