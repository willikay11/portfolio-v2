
'use client';
import type { Message } from "@/types/Message";
import clsx from "clsx";
import { motion } from "framer-motion";

type Props = {
  message: Message;
};

export function MessageBubble({ message }: Props) {
  const isAssistant = message.role === "assistant";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
        x: isAssistant ? 0 : 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      <div
        className={clsx(
          "max-w-xl rounded-xl px-4 py-3 text-sm leading-relaxed",
          isAssistant
            ? "bg-neutral-800 text-neutral-100"
            : "ml-auto bg-blue-600 text-white"
        )}
      >
        {message.content}
      </div>
    </motion.div>
  );
}
