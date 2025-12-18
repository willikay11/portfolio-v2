// conversation/events.ts

export type ConversationEvent =
  | { type: "START" }
  | { type: "RESET" }
  | { type: "BACK" }
  | { type: "USER_MESSAGE"; payload: string }
  | { type: "SELECT_PROJECT"; payload: string };
