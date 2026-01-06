"use client";

import { useRouter } from 'next/navigation';
import { InputBar } from "../assistant/InputBar";

const skills = [{
  label: "About",
  chat: "Tell me about yourself"
}, {
  label: "Projects",
  chat: "Show me your projects"
}, {
  label: "Skills",
  chat: "What are your skills?"
}, {
  label: "Contact",
  chat: "How can I contact you?"
}, {
  label: "Resume",
  chat: "Show me your resume"
}];

export function IntroScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-semibold">
        Hey, I’m William Kamau 👋
      </h1>

      <h2 className="text-7xl font-bold mt-4">
        FullStack Software Engineer
      </h2>

      <div className="my-12">
        {/* avatar / illustration */}
      </div>

      <div className="w-full max-w-xl">
        <InputBar onSend={(text: string) => {
          router.push('/chat?query=' + encodeURIComponent(text));
        }} />
      </div>

      <div className="flex gap-4 mt-8">
        {skills.map(({ label, chat }) => (
          <button
            key={label}
            onClick={() => router.push('/chat?query=' + encodeURIComponent(chat))}
            className="rounded-xl border px-6 py-4 cursor-pointer hover:bg-neutral-800 transition"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
