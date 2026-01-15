"use client";
import type { Message } from "@/types/Message";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ProjectsMessageBubble } from "./Project";
import { Profile } from "./Profile";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

type Props = {
  message: Message;
};

export function MessageBubble({ message }: Props) {
  const isAssistant = message.role === "assistant";

  if (message.kind === "projects") {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <ProjectsMessageBubble message={message} />
      </motion.div>
    );
  }

  if (message.kind === "profile") {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <Profile />
      </motion.div>
    );
  }

  if (message.content !== undefined && message.content !== "") {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <div
          className={clsx(
            "max-w-2xl rounded-2xl px-5 py-4 shadow-lg",
            isAssistant
              ? "bg-neutral-800/90 backdrop-blur-sm text-neutral-100 border border-neutral-700/50"
              : "ml-auto bg-blue-600 text-white border border-blue-500/50"
          )}
        >
          <div
            className={clsx(
              "prose prose-sm max-w-none",
              isAssistant
                ? "prose-invert prose-headings:text-neutral-100 prose-p:text-neutral-200 prose-a:text-blue-400 prose-strong:text-neutral-100 prose-code:text-blue-300 prose-code:bg-neutral-900/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-700"
                : "prose-headings:text-white prose-p:text-white prose-a:text-blue-100 prose-strong:text-white prose-code:text-blue-100 prose-code:bg-blue-700/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-blue-700 prose-pre:border prose-pre:border-blue-500"
            )}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="my-2 space-y-1 list-disc pl-4">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-2 space-y-1 list-decimal pl-4">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed">{children}</li>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80 transition-opacity"
                  >
                    {children}
                  </a>
                ),
                code: ({ className, children }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="font-mono text-sm">{children}</code>
                    );
                  }
                  return <code className={className}>{children}</code>;
                },
                pre: ({ children }) => (
                  <pre className="overflow-x-auto rounded-lg p-4 my-3">
                    {children}
                  </pre>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
}
