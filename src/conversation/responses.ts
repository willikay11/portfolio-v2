// conversation/responses.ts

import { ConversationContext, Project } from "@/types";

export type AssistantResponse =
  | { type: "text"; message: string; suggestions?: string[] }
  | { type: "profile"; message: string; suggestions?: string[] }
  | { type: "projects"; projects: Project[]; suggestions?: string[] };

export function getResponse(
  context: ConversationContext
): AssistantResponse {
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
      "Hey 👋 I’m William, a Lead Software Engineer.\n\n" +
      "You can explore my work, skills, or experience — just ask.",
    suggestions: [
      "Tell me about you",
      "What projects have you built?",
      "What are your strongest skills?",
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
      "What tech do you work with?",
      "Tell me about your experience",
    ],
  };
}


function projectsResponse(): AssistantResponse {
  return {
    type: "projects",
    projects: [
      {
        id: "fastfol",
        title: "AI Portfolio (FastFol-inspired)",
        description:
          "An AI-driven portfolio experience with streaming responses.",
        tags: ["Next.js", "AI", "UX"],
        link: "https://example.com",
      },
      {
        id: "events",
        title: "High-throughput Event System",
        description:
          "Distributed event ingestion system processing millions/day.",
        tags: ["Kafka", "Node.js", "Scaling"],
      },
    ],
    suggestions: ["Dive into AI Portfolio", "Show architecture"],
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
      "What challenges did you face?",
      "What tech did you use?",
      "Show me another project",
    ],
  };
}

function skillsResponse(): AssistantResponse {
  return {
    type: "text",
    message:
      "My strongest skills span across the stack:\n\n" +
      "• Frontend: React, Next.js, TypeScript\n" +
      "• Backend: Node.js, GraphQL, PostgreSQL\n" +
      "• Infra: AWS, Docker, CI/CD\n",
    suggestions: [
      "How do you approach system design?",
      "Tell me about your experience",
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
      "What kind of teams have you led?",
      "Can I see your resume?",
    ],
  };
}


function resumeResponse(): AssistantResponse {
  return {
    type: "text",
    message:
      "You can download my resume below or connect with me directly.\n\n" +
      "I’m always happy to talk about interesting problems.",
    suggestions: [
      "How can I contact you?",
      "Show me your projects",
    ],
  };
}

function contactResponse(): AssistantResponse {
  return {
    type: "text",
    message:
      "The best way to reach me is via email or LinkedIn.\n\n" +
      "Looking forward to connecting 👋",
    suggestions: [
      "View your LinkedIn",
      "Email you",
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
      "Back to your work",
      "Tell me about your projects",
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
      "What projects have you built?",
    ],
  };
}
