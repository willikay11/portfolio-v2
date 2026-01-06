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
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-4xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hey, I'm William Kamau 👋
      </motion.h1>

      <motion.h2
        className="text-7xl font-bold mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        FullStack Software Engineer
      </motion.h2>

      <div className="my-12">{/* avatar / illustration */}</div>

      <motion.div
        className="w-full max-w-xl"
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
        className="flex gap-4 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {skills.map(({ label, icon, chat }) => (
          <Button
            key={label}
            onClick={() =>
              router.push("/chat?query=" + encodeURIComponent(chat))
            }
            variant="outline"
            size="lg"
            className="rounded-xl h-20 min-w-[120px] flex flex-col justify-center items-center px-6"
          >
            <div>{icon}</div>
            {label}
          </Button>
        ))}
      </motion.div>
    </div>
  );
}
