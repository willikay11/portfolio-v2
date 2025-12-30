
'use client';
import type { Message, ProjectsMessage } from "@/types/Message";
import clsx from "clsx";
import { motion } from "framer-motion";

type Props = {
  message: Message;
};


export function ProjectsMessageBubble({
  message,
}: {
  message: ProjectsMessage;
}) {
  return (
    <div className="max-w-xl space-y-3">
      {message.projects.map((project) => (
        <div
          key={project.id}
          className="rounded-xl border border-neutral-700 bg-neutral-900 p-4"
        >
          <h3 className="font-semibold text-white">{project.title}</h3>
          <p className="text-sm text-neutral-300">
            {project.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="mt-3 inline-block text-sm text-blue-400 hover:underline"
            >
              View project →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}


export function MessageBubble({ message }: Props) {
  const isAssistant = message.role === "assistant";

  if (message.kind === "projects") {
    return <motion.div
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
      <ProjectsMessageBubble message={message} />
    </motion.div>;
  }

  if (message.content !== undefined && message.content !== '') {
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

  return null;
}
