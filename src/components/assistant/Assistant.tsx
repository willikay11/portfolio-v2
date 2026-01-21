"use client";

import { useConversation } from "@/hooks/useConversation";
import { MessageBubble } from "./MessageBubble";
import { Suggestions } from "./Suggestions";
import { InputBar } from "./InputBar";
import { TypingIndicator } from "./TypingIndicator";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export function Assistant() {
  const { messages, suggestions, sendMessage, isTyping, dispatchEvent } =
    useConversation();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [isUserAtBottom, setIsUserAtBottom] = useState(true);

  useEffect(() => {
    if (isTyping) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [isTyping]);

  useEffect(() => {
    if (isUserAtBottom) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, isUserAtBottom]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const threshold = 80; // px from bottom
      const atBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight < threshold;

      setIsUserAtBottom(atBottom);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // If a query param named `q` or `message` is provided, send it as the initial user message.
  useEffect(() => {
    if (!query) return;

    if (query && query.trim().length > 0) {
      dispatchEvent({ type: "START" });
      sendMessage(String(query));
    }
    // only run on initial mount / when searchParams changes
  }, [query, sendMessage]);

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <div className="w-full">
        <div className="mx-auto max-w-4xl flex h-screen flex-col">
          <main
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4"
          >
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}

            {isTyping && <TypingIndicator />}

            <div ref={bottomRef} />
          </main>

          {suggestions.length > 0 && (
            <div className="border-t border-neutral-200 dark:border-neutral-800 px-4 sm:px-6 py-3">
              <Suggestions items={suggestions} onSelect={sendMessage} />
            </div>
          )}

          <div className="border-neutral-200 dark:border-neutral-800 px-4 sm:px-6 py-4">
            <InputBar onSend={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}
