// conversation/stateMachine.ts

import { ConversationState, INITIAL_STATE } from "./states";
import { ConversationEvent } from "./events";
import { resolveIntent } from "./intents";
import { nextState } from "./transitions";

export type ConversationContext = {
  state: ConversationState;
  previousState?: ConversationState;
  selectedProject?: string;
};

export const initialContext: ConversationContext = {
  state: INITIAL_STATE,
};

export function transition(
  context: ConversationContext,
  event: ConversationEvent
): ConversationContext {
  switch (event.type) {
    case "START":
      return { state: "GREETING" };

    case "RESET":
      return initialContext;

    case "BACK":
      return {
        state: context.previousState ?? "GREETING",
      };

    case "SELECT_PROJECT":
      return {
        state: "PROJECT_DETAIL",
        previousState: "PROJECTS",
        selectedProject: event.payload,
      };

    case "USER_MESSAGE": {
      const intent = resolveIntent(event.payload);
      const next = nextState(context.state, intent);

      if (next === context.state) return context;

      return {
        state: next,
        previousState: context.state,
      };
    }

    default:
      return context;
  }
}
