// conversation/intents.ts

export type Intent =
  | "ABOUT"
  | "PROJECTS"
  | "PROJECT_DETAIL"
  | "SKILLS"
  | "EXPERIENCE"
  | "RESUME"
  | "CONTACT"
  | "FUN"
  | "UNKNOWN";

export function resolveIntent(input: string): Intent {
  const text = input.toLowerCase();

  if (text.includes("project")) return "PROJECTS";
  if (text.includes("skill")) return "SKILLS";
  if (text.includes("experience")) return "EXPERIENCE";
  if (text.includes("resume") || text.includes("cv")) return "RESUME";
  if (text.includes("contact") || text.includes("email")) return "CONTACT";
  if (text.includes("fun")) return "FUN";
  if (text.includes("you") || text.includes("about")) return "ABOUT";

  return "UNKNOWN";
}
