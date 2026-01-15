"use client";

import { Project, ProjectsMessage } from "@/types";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useState } from "react";

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
          className="group relative col-span-6 min-h-[250px] rounded-xl overflow-hidden border border-white/10 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50"
          style={{
            backgroundColor: project.primaryColor,
          }}
          onClick={() => {
            setSelectedProject(project);
            setIsOpen(true);
          }}
        >
          {/* Background Image */}
          {project.heroImageUrl && (
            <div
              className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url(${project.heroImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
          
          {/* Dark Gradient Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Content Container */}
          <div className="relative h-full flex flex-col justify-end p-4">            
            {/* Title and Logo at bottom */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {project.logoUrl && (
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-2 shadow-lg">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundColor: "white",
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
                <div className="flex-1">
                  <h3 className="font-bold text-white text-2xl drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hover Overlay Effect */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
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
