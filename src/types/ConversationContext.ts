import { ConversationState } from "./ConversationState";

export type ConversationContext = {
  state: ConversationState;
  previousState?: ConversationState;
  selectedProject?: string;
};