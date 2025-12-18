"use client";

import { useState } from "react";

type Props = {
  onSend: (text: string) => void;
};

export function InputBar({ onSend }: Props) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;

    onSend(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask me about my work, skills, or experience…"
        className="flex-1 rounded-lg bg-neutral-900 px-4 py-3 text-sm outline-none border border-neutral-800 focus:border-blue-500"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium hover:bg-blue-500 transition"
      >
        Send
      </button>
    </form>
  );
}
