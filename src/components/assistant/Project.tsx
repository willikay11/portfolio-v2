"use client";

import { Project, ProjectsMessage } from "@/types";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ProjectsMessageBubble({
  message,
}: {
  message: ProjectsMessage;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-xl grid grid-cols-12 gap-4 cursor-pointer">
      {message.projects.map((project) => (
        <div
          key={project.id}
          className={`relative col-span-6 min-h-[250px] rounded-xl p-4 justify-between flex flex-col border border-neutral-400/20`}
          style={{
            backgroundColor: project.primaryColor,
            backgroundImage: project.heroImageUrl
              ? `url(${project.heroImageUrl})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => {
            setSelectedProject(project);
            setIsOpen(true);
          }}
        >
          <div className="absolute p-2 rounded-b-xl bottom-0 left-0 right-0 flex justify-start bg-neutral-300/60 hover:bg-neutral-300/30 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-600 dark:text-neutral-300 backdrop-blur-[3px]">
            <div className="inline-flex justify-center items-center gap-2 w-full">
              {project.logoUrl && (
                <div className="flex h-full items-center justify-center">
                  <div
                    className="w-8 h-8"
                    style={{
                      backgroundColor: project.primaryColor,
                      WebkitMaskImage: `url(${project.logoUrl})`,
                      maskImage: `url(${project.logoUrl})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                </div>
              )}
              <h3
                className="font-semibold text-white text-2xl"
                style={{ color: project.primaryColor }}
              >
                {project.title}
              </h3>
            </div>
          </div>
        </div>
      ))}

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent
          style={{
            background: selectedProject?.primaryColor
              ? `linear-gradient(to bottom right, ${selectedProject.primaryColor}, color-mix(in srgb, ${selectedProject.primaryColor} 70%, black))`
              : undefined,
          }}
        >
          <div className="w-full h-screen overflow-auto bg-transparent mt-12 mb-6">
            <div className="grid grid-cols-12 gap-4 h-full">
              <div className="col-start-3 col-span-8">
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl p-4">
                  {selectedProject?.descriptionComponent ? (
                    <selectedProject.descriptionComponent />
                  ) : (
                    <div>No description available.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
