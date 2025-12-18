
import { Message } from "@/types";
import clsx from "clsx";

type Props = {
  message: Message;
};

export function MessageBubble({ message }: Props) {
  const isAssistant = message.role === "assistant";

  return (
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
  );
}
