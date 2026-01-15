"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function SolgatesDescription({
  primaryColor,
}: {
  primaryColor?: string;
}) {
  return (
    <div className="">
      <div className="flex items-start gap-6 mb-8">
        <div className="h-20 w-20 rounded-full items-center justify-center flex bg-[#EA580C] flex-shrink-0">
          <Image
            src="/images/logos/solgates-white.svg"
            alt={`Solgates Logo`}
            width={36}
            height={36}
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-center gap-2 mb-4">
            <h1 className="text-white text-4xl font-semibold">Solgates</h1>
            <h3 className="text-xl font-bold text-white">
              Authenticated Streetwear E-commerce Platform
            </h3>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-white font-semibold text-2xl mb-4">TL;DR</p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-white italic">
            Led frontend architecture and implementation for Solgates, an online
            streetwear platform offering authenticated apparel and accessories.
          </li>
          <li className="text-white italic">
            Built a performant, mobile-first shopping experience that serves as
            the primary business surface for product discovery and conversion.
          </li>
          <li className="text-white italic">
            Focused on rendering performance, UX clarity, and architectural
            flexibility to support evolving inventory and business needs.
          </li>
          <li className="text-white italic">
            Delivered a polished, reliable storefront that balances visual
            appeal with fast, intuitive shopping flows.
          </li>
        </ul>
      </div>

      <div className="rounded-2xl overflow-hidden bg-white mt-12 mb-12">
        <Image
          src="/images/projects/solgates/hero.png"
          alt="Solgates Hero Image"
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
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-6 py-3 font-medium transition-all"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              key="problemStatement"
              value="problemStatement"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-6 py-3 font-medium transition-all"
            >
              Problem Statement
            </TabsTrigger>
            <TabsTrigger
              key="myRole"
              value="myRole"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-6 py-3 font-medium transition-all"
            >
              My Role
            </TabsTrigger>
            <TabsTrigger
              key="frontendArchitecture"
              value="frontendArchitecture"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-6 py-3 font-medium transition-all"
            >
              Architecture & Tech Decisions
            </TabsTrigger>
            <TabsTrigger
              key="performance"
              value="performance"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-6 py-3 font-medium transition-all"
            >
              Performance
            </TabsTrigger>
            <TabsTrigger
              key="outcomes"
              value="outcomes"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-6 py-3 font-medium transition-all"
            >
              Outcomes
            </TabsTrigger>
            <TabsTrigger
              key="whatIWouldImproveNext"
              value="whatIWouldImproveNext"
              className="bg-transparent data-[state=active]:bg-white/20 rounded-none text-white/70 data-[state=active]:text-white px-6 py-3 font-medium transition-all"
            >
              Improvements
            </TabsTrigger>
          </TabsList>
          <TabsContent key="overview" value="overview">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                Solgates is an online streetwear platform offering authenticated
                apparel and accessories across multiple categories (Men, Women,
                Kids). The frontend serves as the primary business surface,
                responsible for presenting the brand, enabling product
                discovery, and guiding users through shopping and purchase
                flows.
              </p>
              <p className="mt-4">
                Unlike content-heavy marketing sites, Solgates' success depends
                on how efficiently users can:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">Browse products</li>
                <li className="mt-2">Evaluate items</li>
                <li className="mt-2">
                  Move confidently through shopping flows
                </li>
              </ul>
              <p className="mt-4">
                The frontend therefore needed to balance visual polish,
                performance, and clarity, particularly on mobile where a large
                portion of users originate.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="problemStatement" value="problemStatement">
            <div className="prose text-white italic max-w-none mt-4">
              <p>Key challenges driving the frontend design included:</p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  <strong>Product discovery at scale:</strong> Supporting
                  category browsing and product listings without overwhelming
                  users.
                </li>
                <li className="mt-2">
                  <strong>Performance sensitivity:</strong> Slow loads or laggy
                  interactions directly impact conversion rates.
                </li>
                <li className="mt-2">
                  <strong>Mobile-first usage:</strong> The shopping experience
                  needed to feel native and responsive on small screens.
                </li>
                <li className="mt-2">
                  <strong>Brand trust:</strong> UI clarity and consistency were
                  critical to communicating authenticity and quality.
                </li>
                <li className="mt-2">
                  <strong>Evolving inventory:</strong> The frontend needed to
                  accommodate frequent updates without structural rewrites.
                </li>
              </ul>
              <p className="mt-4">
                These constraints required careful prioritization of UX
                simplicity, rendering performance, and architectural
                flexibility.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="myRole" value="myRole">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                I was responsible for the frontend architecture and
                implementation of Solgates, including:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Designing the overall frontend structure and component model
                </li>
                <li className="mt-2">
                  Implementing responsive layouts and shopping flows
                </li>
                <li className="mt-2">
                  Optimizing rendering and perceived performance
                </li>
                <li className="mt-2">
                  Ensuring maintainability as the product and catalog evolved
                </li>
              </ul>
              <p className="mt-4">
                This involved end-to-end ownership of the frontend layer from
                initial build through iteration and optimization.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="frontendArchitecture" value="frontendArchitecture">
            <div className="prose text-white italic max-w-none mt-4">
              <h3 className="text-white font-semibold text-lg">
                Framework & Structure
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Built using React with TypeScript for predictable behavior and
                  type-safe component interfaces.
                </li>
                <li className="mt-2">
                  Adopted a component-driven architecture, enabling reuse across
                  product listings, category pages, and shared UI elements.
                </li>
                <li className="mt-2">
                  Clear separation between layout components, UI primitives, and
                  domain-specific components (e.g., product cards).
                </li>
              </ul>
              <p className="mt-2">
                This structure allows new categories, collections, and UI
                patterns to be added with minimal friction.
              </p>

              <h3 className="text-white font-semibold text-lg mt-6">
                Routing & State
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Client-side routing to enable app-like navigation between
                  browsing and product views.
                </li>
                <li className="mt-2">
                  UI state scoped locally wherever possible to avoid unnecessary
                  re-renders.
                </li>
                <li className="mt-2">
                  Data-fetching logic abstracted into reusable hooks/services to
                  keep components focused on presentation.
                </li>
              </ul>
              <p className="mt-2">
                <strong>Tradeoff:</strong> Prioritized simplicity and fast
                interactions over heavier rendering strategies that would
                increase complexity.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="performance" value="performance">
            <div className="prose text-white italic max-w-none mt-4">
              <h3 className="text-white font-semibold text-lg">
                Load & Render Performance
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Code splitting and lazy loading for non-critical components
                  (e.g., secondary UI elements).
                </li>
                <li className="mt-2">
                  Optimized bundle size through dependency audits and
                  tree-shaking.
                </li>
                <li className="mt-2">
                  Responsive image loading to ensure efficient delivery across
                  devices.
                </li>
              </ul>

              <h3 className="text-white font-semibold text-lg mt-6">
                Perceived Performance
              </h3>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Skeleton loaders for product grids to maintain responsiveness
                  during fetches.
                </li>
                <li className="mt-2">
                  Instant visual feedback for user actions (e.g., navigation,
                  cart interactions).
                </li>
                <li className="mt-2">
                  Mobile-first layouts tuned for touch interactions and vertical
                  browsing.
                </li>
              </ul>

              <p className="mt-4">
                These optimizations ensured the storefront feels fast and
                reliable, even under less-than-ideal network conditions.
              </p>
            </div>
          </TabsContent>
          <TabsContent key="outcomes" value="outcomes">
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                The frontend successfully delivered on its primary objectives:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Enabled fast, intuitive product discovery across categories
                  and collections.
                </li>
                <li className="mt-2">
                  Delivered a polished shopping experience that reinforces brand
                  trust and product authenticity.
                </li>
                <li className="mt-2">
                  Improved perceived performance and responsiveness,
                  particularly on mobile devices.
                </li>
                <li className="mt-2">
                  Established a frontend foundation that supports rapid content
                  and merchandising changes.
                </li>
              </ul>
              <p className="mt-4">
                Overall, the frontend became a stable, scalable surface that
                directly supports business conversion goals.
              </p>
            </div>
          </TabsContent>
          <TabsContent
            key="whatIWouldImproveNext"
            value="whatIWouldImproveNext"
          >
            <div className="prose text-white italic max-w-none mt-4">
              <p>
                With additional time or scale, future frontend improvements
                would include:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mt-2">
                  Introducing SSR or hybrid rendering for SEO and faster initial
                  loads on category pages.
                </li>
                <li className="mt-2">
                  Expanding personalization features (e.g., recently viewed,
                  recommendations).
                </li>
                <li className="mt-2">
                  Adding automated accessibility testing and audits.
                </li>
                <li className="mt-2">
                  Implementing real-user performance monitoring to guide ongoing
                  optimization.
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
