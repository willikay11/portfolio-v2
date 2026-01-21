"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function TukaiDescription({ primaryColor }: { primaryColor?: string }) {
  return (
    <div className="">
      <div className="flex items-start gap-3 sm:gap-6 mb-6 sm:mb-8">
        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full items-center justify-center flex bg-[#11823B] flex-shrink-0">
          <Image
            src="/images/logos/tukai.svg"
            alt={`Tukai Logo`}
            width={36}
            height={36}
            className="w-6 h-6 sm:w-9 sm:h-9"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">Tukai</h1>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
              Travel & Experiences Discovery Platform
            </h3>
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <p className="text-white font-semibold text-xl sm:text-2xl mb-3 sm:mb-4">TL;DR</p>
        <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
          <li className="text-white italic">
            Built and owned the frontend architecture for Tukai's web
            experience, a mobile-first platform for discovering unique places,
            activities, and communities.
          </li>
          <li className="text-white italic">
            Designed a high-performance, SEO-friendly discovery surface that
            serves as the primary top-of-funnel into the native mobile app.
          </li>
          <li className="text-white italic">
            Focused on frontend performance, scalability, and maintainability,
            balancing SSR, client-side interactivity, and rapid iteration.
          </li>
          <li className="text-white italic">
            Delivered a clean, intuitive UI that enables fast discovery and
            improves conversion into deeper product engagement.
          </li>
        </ul>
      </div>

      <div className="rounded-2xl overflow-hidden bg-white mt-12 mb-12">
        <Image
          src="/images/projects/tukai/hero.png"
          alt="Tukai Hero Image"
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
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-3 sm:px-6 py-2 sm:py-3 font-medium transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              key="problemStatement"
              value="problemStatement"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-3 sm:px-6 py-2 sm:py-3 font-medium transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Problem Statement
            </TabsTrigger>
            <TabsTrigger
              key="myRole"
              value="myRole"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-3 sm:px-6 py-2 sm:py-3 font-medium transition-all text-sm sm:text-base whitespace-nowrap"
            >
              My Role
            </TabsTrigger>
            <TabsTrigger
              key="frontendArchitecture"
              value="frontendArchitecture"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-3 sm:px-6 py-2 sm:py-3 font-medium transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Architecture & Tech Decisions
            </TabsTrigger>
            <TabsTrigger
              key="performance"
              value="performance"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-3 sm:px-6 py-2 sm:py-3 font-medium transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Performance
            </TabsTrigger>
            <TabsTrigger
              key="outcomes"
              value="outcomes"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-3 sm:px-6 py-2 sm:py-3 font-medium transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Outcomes
            </TabsTrigger>
            <TabsTrigger
              key="whatIWouldImproveNext"
              value="whatIWouldImproveNext"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-3 sm:px-6 py-2 sm:py-3 font-medium transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Improvements
            </TabsTrigger>
          </TabsList>
          <TabsContent key="overview" value="overview">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                Tukai is a travel and experiences platform designed to help
                users discover unique places, activities, and communities. The
                product is mobile‑first, with native apps providing the core
                interaction model, while the web experience (tukai.co) serves as
                the primary entry point for discovery and conversion.
              </p>
              <p className="mt-4">
                The web frontend plays a critical role in introducing the
                product, surfacing curated experiences, and guiding users into
                deeper engagement through the mobile app.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="problemStatement" value="problemStatement">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                The frontend needed to solve several non‑trivial challenges:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  <strong>Discovery-first UX:</strong> Users should be able to
                  quickly browse and understand what Tukai offers without
                  onboarding friction.
                </li>
                <li className="mt-2">
                  <strong>Performance expectations:</strong> First impressions
                  matter — slow loads or janky interactions would directly
                  impact conversion.
                </li>
                <li className="mt-2">
                  <strong>SEO & reach:</strong> The web experience needed to be
                  indexable and search-friendly to support organic discovery.
                </li>
                <li className="mt-2">
                  <strong>Mobile-first reality:</strong> Most users would
                  ultimately engage through mobile devices and native apps.
                </li>
                <li className="mt-2">
                  <strong>Small-team constraints:</strong> The frontend needed
                  to be maintainable and extensible without heavy ongoing
                  overhead.
                </li>
              </ul>
              <p className="mt-4">
                These constraints required careful tradeoffs between richness,
                speed, and long-term maintainability.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="myRole" value="myRole">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                I owned the frontend architecture and implementation of Tukai's
                web experience, including:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Frontend technology selection and architectural decisions
                </li>
                <li className="mt-2">
                  UI implementation and component structure
                </li>
                <li className="mt-2">
                  Performance optimization and rendering strategy
                </li>
                <li className="mt-2">
                  Ensuring UX consistency with the native mobile app
                </li>
              </ul>
              <p className="mt-4">
                I worked end-to-end on the frontend, from initial design
                decisions through production deployment.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="frontendArchitecture" value="frontendArchitecture">
            <div className="prose text-white italic max-w-none mt-4">
              <h3 className="text-white font-semibold text-lg">
                Framework & Rendering Strategy
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Built using React with TypeScript to ensure type safety and
                  predictable component contracts.
                </li>
                <li className="mt-2">
                  Adopted Next.js to enable server-side rendering (SSR) for
                  SEO-critical pages while retaining client-side interactivity.
                </li>
                <li className="mt-2">
                  Used file-based routing to keep navigation explicit and easy
                  to reason about.
                </li>
                <li className="mt-2">
                  <strong>Tradeoff:</strong> SSR adds complexity, but the
                  improved SEO and faster first paint justified the cost for a
                  discovery-driven product.
                </li>
              </ul>

              <h3 className="text-white font-semibold text-lg mt-6">
                Component Architecture
              </h3>
              <p className="mt-2">
                Component-driven design with clear separation between:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">Presentational components</li>
                <li className="mt-2">Stateful/container components</li>
                <li className="mt-2">
                  Reusable UI primitives aligned to a shared visual language
                  with the mobile app.
                </li>
              </ul>
              <p className="mt-2">
                Composition over inheritance to keep components flexible and
                decoupled.
              </p>
              <p className="mt-2">
                This structure allows new discovery surfaces (categories,
                featured experiences, communities) to be added with minimal
                refactoring.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6">
                State & Data Handling
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Local state scoped as tightly as possible to avoid unnecessary
                  re-renders.
                </li>
                <li className="mt-2">
                  Explicit handling of loading, empty, and error states to
                  improve UX resilience.
                </li>
                <li className="mt-2">
                  Data-fetching abstractions designed to be predictable and easy
                  to replace as backend capabilities evolve.
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent key="performance" value="performance">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                Performance was treated as a first-class concern throughout
                development.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6">
                Rendering & Load Performance
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Server-side rendering for landing and discovery pages to
                  improve time-to-first-paint.
                </li>
                <li className="mt-2">
                  Code splitting and lazy loading for non-critical UI and
                  routes.
                </li>
                <li className="mt-2">
                  Minimal JavaScript execution on landing pages to reduce
                  time-to-interactive.
                </li>
              </ul>

              <h3 className="text-white font-semibold text-lg mt-6">
                Asset Optimization
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Responsive image loading to ensure efficient delivery across
                  device sizes.
                </li>
                <li className="mt-2">
                  Optimized font loading strategies to avoid layout shifts.
                </li>
                <li className="mt-2">
                  CDN-backed static assets for consistent global performance.
                </li>
              </ul>

              <h3 className="text-white font-semibold text-lg mt-6">
                Perceived Performance
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Skeleton states and progressive loading patterns to maintain
                  responsiveness.
                </li>
                <li className="mt-2">
                  Mobile-first layout decisions aligned with real user behavior.
                </li>
                <li className="mt-2">
                  Fast navigation patterns that feel instant even on slower
                  networks.
                </li>
              </ul>

              <p className="mt-4">
                These efforts ensured the frontend felt fast, polished, and
                reliable — particularly on mobile devices.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="outcomes" value="outcomes">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                The frontend successfully delivered on its core product goals:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Enabled users to discover unique places, activities, and
                  communities with minimal friction.
                </li>
                <li className="mt-2">
                  Established Tukai.co as a strong top-of-funnel experience,
                  effectively guiding users into the native mobile app.
                </li>
                <li className="mt-2">
                  Improved discoverability through SEO-friendly rendering and
                  performance-focused design.
                </li>
                <li className="mt-2">
                  Delivered a clean, intuitive UI that communicates product
                  value quickly to first-time users.
                </li>
                <li className="mt-2">
                  Created a scalable frontend foundation that supports rapid
                  iteration and future feature expansion.
                </li>
              </ul>
              <p className="mt-4">
                The frontend evolved from a simple landing experience into a
                core discovery surface for the product.
              </p>
            </div>
          </TabsContent>
          <TabsContent
            key="whatIWouldImproveNext"
            value="whatIWouldImproveNext"
          >
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                With more time or a larger user base, the next frontend
                improvements would include:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Formalizing a shared design system with tokens used across web
                  and mobile.
                </li>
                <li className="mt-2">
                  Implementing Core Web Vitals monitoring and real-user
                  performance metrics.
                </li>
                <li className="mt-2">
                  Adding automated accessibility testing and audits.
                </li>
                <li className="mt-2">
                  Leveraging edge rendering for globally distributed
                  performance.
                </li>
                <li className="mt-2">
                  Deeper analytics integration to drive discovery UX decisions.
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
