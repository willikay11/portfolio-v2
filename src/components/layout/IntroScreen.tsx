"use client";

import { useRouter } from "next/navigation";
import { InputBar } from "../assistant/InputBar";
import { Button } from "../ui/button";
import {
  Ri24HoursFill,
  RiBriefcaseLine,
  RiFileList3Line,
  RiMailLine,
  RiStackLine,
  RiUserSmileLine,
} from "@remixicon/react";
import { motion } from "framer-motion";

const skills = [
  {
    label: "About",
    icon: <RiUserSmileLine size={24} />,
    chat: "Tell me about yourself",
  },
  {
    label: "Projects",
    icon: <RiBriefcaseLine size={24} />,
    chat: "Show me your projects",
  },
  {
    label: "Skills",
    icon: <RiStackLine size={24} />,
    chat: "What are your skills?",
  },
  {
    label: "Contact",
    icon: <RiMailLine size={24} />,
    chat: "How can I contact you?",
  },
  {
    label: "Resume",
    icon: <RiFileList3Line size={24} />,
    chat: "Show me your resume",
  },
];

export function IntroScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hey, I'm William Kamau 👋
      </motion.h1>

      <motion.h2
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        FullStack Software Engineer
      </motion.h2>

      <div className="my-8 sm:my-12">{/* avatar / illustration */}</div>

      <motion.div
        className="w-full max-w-xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <InputBar
          onSend={(text: string) => {
            router.push("/chat?query=" + encodeURIComponent(text));
          }}
        />
      </motion.div>

      <motion.div
        className="w-full max-w-4xl mt-6 sm:mt-8 overflow-x-auto px-4 sm:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4 pb-2">
          {skills.map(({ label, icon, chat }) => (
            <Button
              key={label}
              onClick={() =>
                router.push("/chat?query=" + encodeURIComponent(chat))
              }
              variant="outline"
              size="lg"
              className="rounded-xl h-16 sm:h-20 min-w-[100px] sm:min-w-[120px] flex flex-col justify-center items-center px-4 sm:px-6 text-sm sm:text-base flex-shrink-0"
            >
              <div className="mb-1">{icon}</div>
              {label}
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
