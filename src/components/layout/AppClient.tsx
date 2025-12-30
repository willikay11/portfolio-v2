"use client";

import { useConversation } from "@/hooks/useConversation";
import { IntroScreen } from "../assistant/IntroScreen";
import { Assistant } from "../assistant/Assistant";


export function AppClient() {
  const {
    state,
    dispatchEvent,
  } = useConversation();

  if (state === "GREETING") {
    return (
      <IntroScreen
        onStart={() => dispatchEvent({ type: "START" })}
      />
    );
  }

  return <Assistant />;
}
