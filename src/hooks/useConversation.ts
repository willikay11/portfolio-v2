// src/hooks/useConversation.ts

import { useCallback, useEffect, useState } from "react";
import {
  transition,
  initialContext,
} from "@/conversation";
import { getResponse } from "@/conversation/responses";
import { ConversationEvent } from "@/conversation/events";
import { ConversationContext, Message } from "@/types";

function createMessage(
  role: "user" | "assistant",
  content: string
): Message {
  return {
    id: crypto.randomUUID(),
    role,
    content,
  };
}

export function useConversation() {
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] =
    useState<ConversationContext>(initialContext);

  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const dispatch = useCallback((event: ConversationEvent) => {
    setContext((prev) => {
      const nextContext = transition(prev, event);
      const response = getResponse(nextContext);

      if (event.type === "USER_MESSAGE") {
        setMessages((msgs) => [
          ...msgs,
          createMessage("user", event.payload),
        ]);
      }

      setMessages((msgs) => [
        ...msgs,
        createMessage("assistant", response.message),
      ]);

      setSuggestions(response.suggestions ?? []);

      return nextContext;
    });
  }, []);

  const sendMessage = useCallback((text: string) => {
    dispatch({ type: "USER_MESSAGE", payload: text });

    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(context);

      setMessages((msgs) => [
        ...msgs,
        createMessage("assistant", response.message),
      ]);

      setSuggestions(response.suggestions ?? []);
      setIsTyping(false);
    }, 600); // tweak for realism
  }, [context]);

  const goBack = () => dispatch({ type: "BACK" });
  const reset = () => dispatch({ type: "RESET" });

  useEffect(() => {
    dispatch({ type: "START" });
  }, [dispatch]);

  return {
    messages,
    suggestions,
    sendMessage,
    goBack,
    reset,
    state: context.state,
    isTyping,
  };
}
