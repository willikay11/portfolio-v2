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

function streamMessage(
  fullText: string,
  onUpdate: (partial: string) => void,
  onDone: () => void
) {
  const words = fullText.split(" ");
  let index = 0;

  const interval = setInterval(() => {
    index++;
    onUpdate(words.slice(0, index).join(" "));

    if (index === words.length) {
      clearInterval(interval);
      onDone();
    }
  }, 40); // adjust speed here
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

  const response = getResponse(context);

  const assistantId = crypto.randomUUID();

  // Insert empty assistant message
  setMessages((msgs) => [
    ...msgs,
    {
      id: assistantId,
      role: "assistant",
      content: "",
    },
  ]);

  streamMessage(
    response.message,
    (partial) => {
      setMessages((msgs) =>
        msgs.map((msg) =>
          msg.id === assistantId
            ? { ...msg, content: partial }
            : msg
        )
      );
    },
    () => {
      setSuggestions(response.suggestions ?? []);
      setIsTyping(false);
    }
  );
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
