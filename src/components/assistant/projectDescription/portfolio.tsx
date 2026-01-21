"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function PortfolioDescription({
  primaryColor,
}: {
  primaryColor?: string;
}) {
  return (
    <div className="">
      <div className="flex items-start gap-3 sm:gap-6 mb-6 sm:mb-8">
        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full items-center justify-center flex bg-gradient-to-br from-blue-600 to-purple-600 flex-shrink-0">
          <Image
            src="/images/logos/portfolio.svg"
            alt={`Portfolio Logo`}
            width={36}
            height={36}
            className="w-6 h-6 sm:w-9 sm:h-9"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">Interactive Portfolio</h1>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
              Conversational AI-Powered Portfolio Experience
            </h3>
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <p className="text-white font-semibold text-xl sm:text-2xl mb-3 sm:mb-4">TL;DR</p>
        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
          <li className="text-white italic">
            Built an interactive portfolio using Next.js with a conversational AI interface that allows visitors to explore my work naturally.
          </li>
          <li className="text-white italic">
            Implemented a state machine-driven conversation flow that understands context and guides users through different sections seamlessly.
          </li>
          <li className="text-white italic">
            Designed with mobile-first approach, ensuring responsive layouts and smooth interactions across all device sizes.
          </li>
          <li className="text-white italic">
            Focused on performance, accessibility, and creating an engaging user experience that stands out from traditional portfolios.
          </li>
        </ul>
      </div>

      <div className="rounded-2xl overflow-hidden bg-white mt-12 mb-12">
        <Image
          src="/images/projects/portfolio/hero.png"
          alt="Portfolio Hero Image"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>

      <div className="">
        <Tabs defaultValue="overview" className="w-full mt-6">
          <TabsList className="bg-white/10 backdrop-blur-sm border-0 w-full justify-start p-0 h-auto gap-0 rounded-xl overflow-x-auto overflow-y-hidden flex-nowrap">
            <TabsTrigger
              key="overview"
              value="overview"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white font-medium data-[state=active]:font-bold px-3 sm:px-6 py-2 sm:py-3 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              key="problemStatement"
              value="problemStatement"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white font-medium data-[state=active]:font-bold px-3 sm:px-6 py-2 sm:py-3 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Problem Statement
            </TabsTrigger>
            <TabsTrigger
              key="myRole"
              value="myRole"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white font-medium data-[state=active]:font-bold px-3 sm:px-6 py-2 sm:py-3 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              My Role
            </TabsTrigger>
            <TabsTrigger
              key="architecture"
              value="architecture"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white font-medium data-[state=active]:font-bold px-3 sm:px-6 py-2 sm:py-3 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Architecture & Tech Stack
            </TabsTrigger>
            <TabsTrigger
              key="features"
              value="features"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white font-medium data-[state=active]:font-bold px-3 sm:px-6 py-2 sm:py-3 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Key Features
            </TabsTrigger>
            <TabsTrigger
              key="outcomes"
              value="outcomes"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white font-medium data-[state=active]:font-bold px-3 sm:px-6 py-2 sm:py-3 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Outcomes
            </TabsTrigger>
            <TabsTrigger
              key="learnings"
              value="learnings"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white font-medium data-[state=active]:font-bold px-3 sm:px-6 py-2 sm:py-3 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Key Learnings
            </TabsTrigger>
          </TabsList>
          <TabsContent key="overview" value="overview">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                This portfolio represents a departure from traditional static portfolio websites. Instead of forcing visitors to navigate through rigid menus and pages, it provides a conversational interface that allows users to explore my work, skills, and experience in a more natural, engaging way.
              </p>
              <p className="mt-4">
                The project combines modern web technologies with thoughtful UX design to create an experience that is:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">Intuitive and easy to navigate</li>
                <li className="mt-2">Responsive across all devices</li>
                <li className="mt-2">Performant and accessible</li>
                <li className="mt-2">Memorable and unique</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent key="problemStatement" value="problemStatement">
            <div className="prose text-white italic max-w-none mt-4">
              <p>Traditional portfolio websites often suffer from several issues:</p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  <strong>Poor navigation:</strong> Users must hunt through multiple pages to find what they're looking for.
                </li>
                <li className="mt-2">
                  <strong>Lack of engagement:</strong> Static content doesn't encourage exploration or interaction.
                </li>
                <li className="mt-2">
                  <strong>Mobile experience:</strong> Many portfolios are desktop-first, leading to poor mobile usability.
                </li>
                <li className="mt-2">
                  <strong>Generic feel:</strong> Most portfolios look and function the same, failing to showcase the creator's skills.
                </li>
              </ul>
              <p className="mt-4">
                The goal was to create a portfolio that solves these problems while demonstrating technical proficiency and design thinking.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="myRole" value="myRole">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                As the sole developer and designer of this project, I was responsible for:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Conceptualizing and designing the conversational interface
                </li>
                <li className="mt-2">
                  Implementing the state machine for conversation flow management
                </li>
                <li className="mt-2">
                  Building all components with responsive design principles
                </li>
                <li className="mt-2">
                  Optimizing performance and ensuring accessibility
                </li>
                <li className="mt-2">
                  Creating engaging animations and transitions
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent key="architecture" value="architecture">
            <div className="prose text-white italic max-w-none mt-4">
              <h3 className="text-white font-semibold text-lg">
                Tech Stack
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  <strong>Next.js 15:</strong> React framework with App Router for optimal performance
                </li>
                <li className="mt-2">
                  <strong>TypeScript:</strong> Type-safe code for better maintainability
                </li>
                <li className="mt-2">
                  <strong>Tailwind CSS:</strong> Utility-first CSS for rapid UI development
                </li>
                <li className="mt-2">
                  <strong>Framer Motion:</strong> Smooth animations and transitions
                </li>
                <li className="mt-2">
                  <strong>React Markdown:</strong> Rich text rendering for content
                </li>
              </ul>

              <h3 className="text-white font-semibold text-lg mt-6">
                Architecture Decisions
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  <strong>State Machine Pattern:</strong> Used a finite state machine to manage conversation flow, ensuring predictable transitions and context management.
                </li>
                <li className="mt-2">
                  <strong>Component-Driven:</strong> Built reusable UI components that can be composed to create complex interactions.
                </li>
                <li className="mt-2">
                  <strong>Mobile-First:</strong> Designed and implemented for mobile devices first, progressively enhancing for larger screens.
                </li>
                <li className="mt-2">
                  <strong>Type Safety:</strong> Leveraged TypeScript throughout for better developer experience and fewer runtime errors.
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent key="features" value="features">
            <div className="prose text-white italic max-w-none mt-4">
              <h3 className="text-white font-semibold text-lg">
                Conversational Interface
              </h3>
              <p>
                The chat-based interface allows users to ask questions naturally and receive contextual responses with relevant suggestions for further exploration.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6">
                Smart Suggestions
              </h3>
              <p>
                Context-aware suggestion chips guide users through the conversation, making navigation intuitive and reducing cognitive load.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6">
                Rich Content Display
              </h3>
              <p>
                Projects, skills, and contact information are presented in visually engaging, interactive components that go beyond simple text.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6">
                Responsive Design
              </h3>
              <p>
                Every component is fully responsive with careful attention to mobile interactions, touch targets, and horizontal scrolling where appropriate.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6">
                Smooth Animations
              </h3>
              <p>
                Thoughtful use of animations provides feedback, guides attention, and enhances the overall experience without being distracting.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="outcomes" value="outcomes">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                The portfolio successfully achieves its goals:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  <strong>Unique Experience:</strong> Stands out from traditional portfolios while remaining professional and functional.
                </li>
                <li className="mt-2">
                  <strong>Technical Showcase:</strong> Demonstrates proficiency in modern web technologies and best practices.
                </li>
                <li className="mt-2">
                  <strong>User-Friendly:</strong> Visitors can easily explore content without getting lost or frustrated.
                </li>
                <li className="mt-2">
                  <strong>Mobile-Optimized:</strong> Provides an excellent experience on smartphones and tablets.
                </li>
                <li className="mt-2">
                  <strong>Performant:</strong> Fast load times and smooth interactions across all devices.
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent key="learnings" value="learnings">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                Key insights from building this project:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  <strong>State Management:</strong> A well-designed state machine makes complex interactions predictable and maintainable.
                </li>
                <li className="mt-2">
                  <strong>Mobile-First Works:</strong> Starting with mobile constraints leads to cleaner, more focused designs.
                </li>
                <li className="mt-2">
                  <strong>Performance Matters:</strong> Fast interactions are essential for maintaining engagement, especially on mobile.
                </li>
                <li className="mt-2">
                  <strong>Context is Key:</strong> Providing relevant suggestions based on conversation context significantly improves UX.
                </li>
                <li className="mt-2">
                  <strong>Balance is Critical:</strong> Finding the right balance between novelty and usability is crucial for portfolio sites.
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
