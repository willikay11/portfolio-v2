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
    <form onSubmit={handleSubmit} className="flex gap-3 justify-center">
      <div className="w-full sm:w-96 focus-within:w-full inline-flex rounded-[10rem] bg-neutral-100 dark:bg-neutral-900 px-3 py-2 sm:py-3 text-sm outline-none border border-neutral-300 dark:border-neutral-800 focus-within:border-blue-500 transition-all duration-300 ease-in-out">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask me about my work, skills, or experience…"
          className="flex-1 outline-none bg-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="rounded-full bg-blue-600 text-white text-sm w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-blue-500 transition flex-shrink-0"
        >
          <RiArrowRightLine size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>
    </form>
  );
}
