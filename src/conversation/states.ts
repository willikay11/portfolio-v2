// conversation/states.ts

export type ConversationState =
  | "IDLE"
  | "GREETING"
  | "ABOUT"
  | "PROJECTS"
  | "PROJECT_DETAIL"
  | "SKILLS"
  | "EXPERIENCE"
  | "RESUME"
  | "CONTACT"
  | "FUN";

export const INITIAL_STATE: ConversationState = "IDLE";
