"use client";

import { useConversation } from "@/hooks/useConversation";
import { MessageBubble } from "./MessageBubble";
import { Suggestions } from "./Suggestions";
import { InputBar } from "./InputBar";
import { TypingIndicator } from "./TypingIndicator";

export function Assistant() {
  const {
    messages,
    suggestions,
    sendMessage,
    isTyping,
  } = useConversation();

  return (
    <div className="flex h-screen flex-col bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 px-6 py-4">
        <h1 className="text-lg font-semibold">
          William Kamau — AI Portfolio
        </h1>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}

        {isTyping && <TypingIndicator />}
      </main>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="border-t border-neutral-800 px-6 py-3">
          <Suggestions
            items={suggestions}
            onSelect={sendMessage}
          />
        </div>
      )}

      {/* Input */}
      <div className="border-t border-neutral-800 px-6 py-4">
        <InputBar onSend={sendMessage} />
      </div>
    </div>
  );
}
