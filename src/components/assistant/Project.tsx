import { ProjectsMessage } from "@/types";

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