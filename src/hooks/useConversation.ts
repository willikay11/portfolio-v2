// src/hooks/useConversation.ts

import { useCallback, useEffect, useState } from "react";
import {
  transition,
  initialContext,
} from "@/conversation";
import { getResponse } from "@/conversation/responses";
import { ConversationEvent } from "@/conversation/events";
import { ConversationContext } from "@/types";
import type { Message } from "../types/Message";

function createMessage(
  role: "user" | "assistant",
  content: string
): Message {
  return {
    id: crypto.randomUUID(),
    role,
    kind: "text",
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
  }, 150); // adjust speed here
}

export function useConversation() {
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] =
    useState<ConversationContext>(initialContext);

  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const dispatchEvent = useCallback((event: ConversationEvent) => {
    setContext((prev) => transition(prev, event));
  }, []);

  const sendMessage = useCallback((text: string) => {
    // 1. User message (sync, always first)
    setMessages((msgs) => [
      ...msgs,
      createMessage("user", text),
    ]);

    // 2. Advance conversation state
    setContext((prev) => {
      const nextContext = transition(prev, {
        type: "USER_MESSAGE",
        payload: text,
      });

      // 3. Derive assistant response from NEXT state
      const response = getResponse(nextContext);

      // 4. Prepare assistant streaming
      setIsTyping(true);
      const assistantId = crypto.randomUUID();

      setMessages((msgs) => [
        ...msgs,
        {
          id: assistantId,
          role: "assistant",
          kind: "text",
          content: "",
        },
      ]);

      // determine text to stream based on response shape
      if (response.type === "projects") {
        setMessages((msgs) => [
          ...msgs,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            kind: "projects",
            projects: response.projects,
          },
        ]);

        setSuggestions(response.suggestions ?? []);
        setIsTyping(false);
      }

      if (response.type === "text") {
        setIsTyping(false);
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
          }
        );
      }
      return nextContext;
    });
  }, []);


  const goBack = () =>
    setContext((prev) => transition(prev, { type: "BACK" }));

  const reset = () =>
    setContext((prev) => transition(prev, { type: "RESET" }));

  useEffect(() => {
    setContext((prev) => transition(prev, { type: "START" }));
  }, []);

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
