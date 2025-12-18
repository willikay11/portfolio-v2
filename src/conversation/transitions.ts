// conversation/transitions.ts

import { ConversationState } from "./states";
import { Intent } from "./intents";

export function nextState(
  current: ConversationState,
  intent: Intent
): ConversationState {
  if (intent === "UNKNOWN") return current;

  switch (intent) {
    case "ABOUT":
    case "PROJECTS":
    case "SKILLS":
    case "EXPERIENCE":
    case "RESUME":
    case "CONTACT":
    case "FUN":
      return intent;

    default:
      return current;
  }
}
