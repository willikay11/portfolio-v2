export type Message =
  | TextMessage
  | ProfileMessage
  | ProjectsMessage;


export type BaseMessage = {
  id: string;
  role: "user" | "assistant";
};

export type ProfileMessage = BaseMessage & {
  kind: "profile";
  content: string;
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
  primaryColor?: string;
  logoUrl?: string;
  heroImageUrl?: string;
  link?: string;
  content?: {
    title: string;
    html?: string;
  }[]

};