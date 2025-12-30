"use client";

import { useConversation } from "@/hooks/useConversation";
import { MessageBubble } from "./MessageBubble";
import { Suggestions } from "./Suggestions";
import { InputBar } from "./InputBar";
import { TypingIndicator } from "./TypingIndicator";
import { useEffect, useRef, useState } from "react";

export function Assistant() {
  const {
    messages,
    suggestions,
    sendMessage,
    isTyping,
  } = useConversation();

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

  useEffect(() => {
    if (isTyping && isUserAtBottom) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [isTyping, messages, isUserAtBottom]);

  return (
    <div className="flex h-screen flex-col bg-neutral-950 text-white">
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-start-4 md:col-end-10 flex h-screen flex-col">

          <main ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}

            {isTyping && <TypingIndicator />}

            <div ref={bottomRef} />
          </main>

          {suggestions.length > 0 && (
            <div className="border-t border-neutral-800 px-6 py-3">
              <Suggestions
                items={suggestions}
                onSelect={sendMessage}
              />
            </div>
          )}

          <div className="border-neutral-800 px-6 py-4">
            <InputBar onSend={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}
