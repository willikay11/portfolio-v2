export type Message =
  | TextMessage
  | ProjectsMessage;

export type BaseMessage = {
  id: string;
  role: "user" | "assistant";
};

export type TextMessage = BaseMessage & {
  kind: "text";
  content: string;
};

export type ProjectsMessage = BaseMessage & {
  kind: "projects";
  projects: Project[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
};