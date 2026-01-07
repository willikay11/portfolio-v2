"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TukaiDescription() {
  return (
    <>
      <p className="text-neutral-900 dark:text-white font-semibold text-2xl">
        TL;DR
      </p>
      <ul className="list-disc pl-6">
        <li className="text-neutral-600 dark:text-neutral-400 italic mt-2">
          Built and owned the frontend architecture for Tukai's web experience,
          a mobile-first platform for discovering unique places, activities, and
          communities.
        </li>
        <li className="text-neutral-600 dark:text-neutral-400 italic mt-2">
          Designed a high-performance, SEO-friendly discovery surface that
          serves as the primary top-of-funnel into the native mobile app.
        </li>
        <li className="text-neutral-600 dark:text-neutral-400 italic mt-2">
          Focused on frontend performance, scalability, and maintainability,
          balancing SSR, client-side interactivity, and rapid iteration.
        </li>
        <li className="text-neutral-600 dark:text-neutral-400 italic mt-2">
          Delivered a clean, intuitive UI that enables fast discovery and
          improves conversion into deeper product engagement.
        </li>
      </ul>

      <Tabs defaultValue="overview" className="w-full mt-6">
        <TabsList>
          <TabsTrigger key="overview" value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger
            className="text-sm"
            key="problemStatement"
            value="problemStatement"
          >
            Problem Statement
          </TabsTrigger>
          <TabsTrigger key="myRole" value="myRole">
            My Role
          </TabsTrigger>
          <TabsTrigger key="frontendArchitecture" value="frontendArchitecture">
            Architecture & Tech Decisions
          </TabsTrigger>
          <TabsTrigger key="performance" value="performance">
            Performance
          </TabsTrigger>
          <TabsTrigger key="outcomes" value="outcomes">
            Outcomes
          </TabsTrigger>
          <TabsTrigger
            key="whatIWouldImproveNext"
            value="whatIWouldImproveNext"
          >
            Improvements
          </TabsTrigger>
        </TabsList>
        <TabsContent key="overview" value="overview">
          <div className="prose text-neutral-600 dark:text-neutral-400 italic max-w-none mt-4">
            <p>
              Tukai is a travel and experiences platform designed to help users
              discover unique places, activities, and communities. The product
              is mobile‑first, with native apps providing the core interaction
              model, while the web experience (tukai.co) serves as the primary
              entry point for discovery and conversion.
            </p>
            <p className="mt-4">
              The web frontend plays a critical role in introducing the product,
              surfacing curated experiences, and guiding users into deeper
              engagement through the mobile app.
            </p>
          </div>
        </TabsContent>
        <TabsContent key="problemStatement" value="problemStatement">
          <div className="prose text-neutral-600 dark:text-neutral-400 italic max-w-none mt-4">
            <p>The frontend needed to solve several non‑trivial challenges:</p>
            <ul className="list-disc pl-6 mt-2">
              <li className="mt-2">
                <strong>Discovery-first UX:</strong> Users should be able to
                quickly browse and understand what Tukai offers without
                onboarding friction.
              </li>
              <li className="mt-2">
                <strong>Performance expectations:</strong> First impressions
                matter — slow loads or janky interactions would directly impact
                conversion.
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
                <strong>Small-team constraints:</strong> The frontend needed to
                be maintainable and extensible without heavy ongoing overhead.
              </li>
            </ul>
            <p className="mt-4">
              These constraints required careful tradeoffs between richness,
              speed, and long-term maintainability.
            </p>
          </div>
        </TabsContent>
        <TabsContent key="myRole" value="myRole">
          <div className="prose text-neutral-600 dark:text-neutral-400 italic max-w-none mt-4">
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
              I worked end-to-end on the frontend, from initial design decisions
              through production deployment.
            </p>
          </div>
        </TabsContent>
        <TabsContent key="frontendArchitecture" value="frontendArchitecture">
          <div className="prose text-neutral-600 dark:text-neutral-400 italic max-w-none mt-4">
            <h3 className="text-neutral-900 dark:text-white font-semibold text-lg">
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
                Used file-based routing to keep navigation explicit and easy to
                reason about.
              </li>
              <li className="mt-2">
                <strong>Tradeoff:</strong> SSR adds complexity, but the improved
                SEO and faster first paint justified the cost for a
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
                Reusable UI primitives aligned to a shared visual language with
                the mobile app.
              </li>
            </ul>
            <p className="mt-2">
              Composition over inheritance to keep components flexible and
              decoupled.
            </p>
            <p className="mt-2">
              This structure allows new discovery surfaces (categories, featured
              experiences, communities) to be added with minimal refactoring.
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
                Explicit handling of loading, empty, and error states to improve
                UX resilience.
              </li>
              <li className="mt-2">
                Data-fetching abstractions designed to be predictable and easy
                to replace as backend capabilities evolve.
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent key="performance" value="performance">
          <div className="prose text-neutral-600 dark:text-neutral-400 italic max-w-none mt-4">
            <p>
              Performance was treated as a first-class concern throughout
              development.
            </p>

            <h3 className="text-white font-semibold text-lg mt-6">
              Rendering & Load Performance
            </h3>
            <ul className="list-disc pl-6 mt-2">
              <li className="mt-2">
                Server-side rendering for landing and discovery pages to improve
                time-to-first-paint.
              </li>
              <li className="mt-2">
                Code splitting and lazy loading for non-critical UI and routes.
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
          <div className="prose text-neutral-600 dark:text-neutral-400 italic max-w-none mt-4">
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
                Delivered a clean, intuitive UI that communicates product value
                quickly to first-time users.
              </li>
              <li className="mt-2">
                Created a scalable frontend foundation that supports rapid
                iteration and future feature expansion.
              </li>
            </ul>
            <p className="mt-4">
              The frontend evolved from a simple landing experience into a core
              discovery surface for the product.
            </p>
          </div>
        </TabsContent>
        <TabsContent key="whatIWouldImproveNext" value="whatIWouldImproveNext">
          <div className="prose text-neutral-600 dark:text-neutral-400 italic max-w-none mt-4">
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
                Leveraging edge rendering for globally distributed performance.
              </li>
              <li className="mt-2">
                Deeper analytics integration to drive discovery UX decisions.
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
