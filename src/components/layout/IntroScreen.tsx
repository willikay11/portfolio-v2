"use client";

import { useRouter } from 'next/navigation';
import { useConversation } from "@/hooks/useConversation";
import { InputBar } from "../assistant/InputBar";

export function IntroScreen() {
  const router = useRouter();
  const {
    sendMessage,
  } = useConversation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-semibold">
        Hey, I’m William Kamau 👋
      </h1>

      <h2 className="text-7xl font-bold mt-4">
        Lead Software Engineer
      </h2>

      <div className="my-12">
        {/* avatar / illustration */}
      </div>

      <div className="w-full max-w-xl">
        <InputBar onSend={sendMessage} />
      </div>

      <div className="flex gap-4 mt-8">
        {["Me", "Projects", "Skills", "Contact", "Resume"].map((label) => (
          <button
            key={label}
            onClick={() => router.push('/chat?query=' + encodeURIComponent(label))}
            className="rounded-xl border px-6 py-4"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
