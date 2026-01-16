export type Message =
  | TextMessage
  | ProfileMessage
  | ProjectsMessage
  | ContactMessage
  | SkillsMessage;

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

export type ContactMessage = BaseMessage & {
  kind: "contact";
  content: string;
};

export type SkillsMessage = BaseMessage & {
  kind: "skills";
  content: string;
};

export type Project = {
  id: string;
  title: string;
  tags: string[];
  primaryColor?: string;
  logoUrl?: string;
  heroImageUrl?: string;
  link?: string;
  descriptionComponent?: React.ComponentType;
  images?: string[];
};
