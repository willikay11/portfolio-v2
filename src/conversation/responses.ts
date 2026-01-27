// conversation/responses.ts

import { SolgatesDescription } from "@/components/assistant/projectDescription/solgates";
import { TukaiDescription } from "@/components/assistant/projectDescription/tukai";
import { PortfolioDescription } from "@/components/assistant/projectDescription/portfolio";
import { ConversationContext, Project } from "@/types";

export type AssistantResponse =
  | { type: "text"; message: string; suggestions?: string[] }
  | { type: "profile"; message: string; suggestions?: string[] }
  | { type: "projects"; projects: Project[]; suggestions?: string[] }
  | { type: "contact"; message: string; suggestions?: string[] }
  | { type: "skills"; message: string; suggestions?: string[] }
  | { type: "resume"; message: string; suggestions?: string[] };

export function getResponse(context: ConversationContext): AssistantResponse {
  switch (context.state) {
    case "GREETING":
      return greetingResponse();

    case "ABOUT":
      return aboutResponse();

    case "PROJECTS":
      return projectsResponse();

    case "PROJECT_DETAIL":
      return projectDetailResponse(context);

    case "SKILLS":
      return skillsResponse();

    case "EXPERIENCE":
      return experienceResponse();

    case "RESUME":
      return resumeResponse();

    case "CONTACT":
      return contactResponse();

    case "FUN":
      return funResponse();

    default:
      return fallbackResponse();
  }
}

function greetingResponse(): AssistantResponse {
  return {
    type: "text",
    message:
      "Hey 👋 I’m William, a Full Stack Software Engineer.\n\n" +
      "You can explore my work, skills, or experience — just ask.",
    suggestions: [
      "Tell me about you",
      "Show me your projects",
      "What are your skills?",
      "How can I contact you?",
      "View your resume",
    ],
  };
}

function aboutResponse(): AssistantResponse {
  return {
    type: "profile",
    message:
      "I’m a Lead Software Engineer who enjoys building scalable systems and leading teams.\n\n" +
      "I care deeply about clean architecture, performance, and developer experience.",
    suggestions: [
      "Show me your projects",
      "What are your skills?",
      "How can I contact you?",
      "View your resume",
    ],
  };
}

function projectsResponse(): AssistantResponse {
  return {
    type: "projects",
    projects: [
      {
        id: "portfolio",
        primaryColor: "#6366f1",
        logoUrl: "/images/logos/portfolio.svg",
        heroImageUrl: "/v1769516619/portfolio/hero_fvhqor",
        title: "Interactive Portfolio",
        descriptionComponent: PortfolioDescription,
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "experiences-platform",
        primaryColor: "#047857",
        logoUrl: "/images/logos/tukai-white.svg",
        heroImageUrl: "v1769516549/tukai/hero_cebuop",
        title: "Tukai",
        images: [
          "v1769516549/tukai/hero_cebuop",
          "v1769516549/tukai/2",
          "v1769516549/tukai/3",
          "v1769516549/tukai/4",
          "v1769516549/tukai/5",
          "v1769516549/tukai/6",
        ],
        descriptionComponent: TukaiDescription,
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        id: "ecommerce-platform",
        primaryColor: "#EA580C",
        logoUrl: "/images/logos/solgates-white.svg",
        heroImageUrl: "v1769516501/solgates-fashion/hero_rb5n2l",
        title: "Solgates",
        images: [
          "v1769516501/solgates-fashion/hero_rb5n2l",
          "v1769516501/solgates-fashion/1",
          "v1769516501/solgates-fashion/2",
          "v1769516501/solgates-fashion/3",
        ],
        descriptionComponent: SolgatesDescription,
        tags: ["React", "Node.js", "PostgreSQL"],
      },
    ],
    suggestions: [
      "Tell me about you",
      "What are your skills?",
      "How can I contact you?",
      "View your resume",
    ],
  };
}

function projectDetailResponse(
  context: ConversationContext
): AssistantResponse {
  const project = context.selectedProject ?? "this project";

  return {
    type: "text",
    message:
      `Let’s talk about **${project}**.\n\n` +
      "I focused on scalability, clean boundaries, and long-term maintainability.\n\n" +
      "The biggest win was simplifying complexity without sacrificing performance.",
    suggestions: [
      "Tell me about you",
      "Show me your projects",
      "What are your skills?",
      "How can I contact you?",
      "View your resume",
    ],
  };
}

function skillsResponse(): AssistantResponse {
  return {
    type: "skills",
    message:
      "Here's an overview of the technologies and skills I work with across different domains.",
    suggestions: [
      "Tell me about you",
      "Show me your projects",
      "How can I contact you?",
      "View your resume",
    ],
  };
}

function experienceResponse(): AssistantResponse {
  return {
    type: "text",
    message:
      "I’ve led teams, mentored engineers, and built systems used at scale.\n\n" +
      "My focus is aligning technical decisions with business impact.",
    suggestions: [
      "Tell me about you",
      "Show me your projects",
      "What are your skills?",
      "How can I contact you?",
      "View your resume",
    ],
  };
}

function resumeResponse(): AssistantResponse {
  return {
    type: "resume",
    message:
      "Here's my professional background and experience.\n\n" +
      "You can download the full PDF version for more details.",
    suggestions: [
      "Tell me about you",
      "Show me your projects",
      "What are your skills?",
      "How can I contact you?",
    ],
  };
}

function contactResponse(): AssistantResponse {
  return {
    type: "contact",
    message:
      "The best way to reach me is via email or LinkedIn.\n\n" +
      "Looking forward to connecting 👋",
    suggestions: [
      "Tell me about you",
      "Show me your projects",
      "What are your skills?",
      "View your resume",
    ],
  };
}

function funResponse(): AssistantResponse {
  return {
    type: "text",
    message:
      "Outside of work, I enjoy breaking things (intentionally), learning new systems, and refining my craft.\n\n" +
      "I believe great engineers stay curious.",
    suggestions: [
      "Tell me about you",
      "Show me your projects",
      "What are your skills?",
      "How can I contact you?",
      "View your resume",
    ],
  };
}

function fallbackResponse(): AssistantResponse {
  return {
    type: "text",
    message:
      "I can tell you about my projects, skills, or experience.\nWhat would you like to explore?",
    suggestions: [
      "Tell me about you",
      "Show me your projects",
      "What are your skills?",
      "How can I contact you?",
      "View your resume",
    ],
  };
}
