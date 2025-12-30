"use client";

import { RiArrowRightLine } from "@remixicon/react";
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
      <div className="w-full inline-flex rounded-[10rem] bg-neutral-900 px-3 py-3 text-sm outline-none border border-neutral-800 focus:border-blue-500">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask me about my work, skills, or experience…"
          className="flex-1 outline-none bg-transparent"
        />
        <button
          type="submit"
          className="rounded-full bg-blue-600 text-sm w-8 h-8 flex items-center justify-center hover:bg-blue-500 transition"
        >
          <RiArrowRightLine size={18} />
        </button>
      </div>
    </form>
  );
}
