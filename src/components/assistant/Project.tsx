'use client';

import { Project, ProjectsMessage } from "@/types";
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer"
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
          className={`relative col-span-6 min-h-[250px] rounded-xl  p-4 justify-between flex flex-col`}
          style={{ backgroundColor: project.primaryColor, backgroundImage: project.heroImageUrl ? `url(${project.heroImageUrl})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
          onClick={() => {
            setSelectedProject(project);
            setIsOpen(true);
          }}
        >
          <div className="absolute p-2 rounded-b-xl bottom-0 left-0 right-0 flex justify-start g-neutral-300/20 hover:bg-neutral-300/30 dark:bg-neutral-400/20 dark:hover:bg-neutral-400/30 text-neutral-600 dark:text-neutral-300 backdrop-blur-[1px] border border-neutral-400/20">
            <div className="inline-flex justify-center items-center gap-2">
              {project.logoUrl && (
                <div className="flex h-full items-center justify-center">
                  <img src={project.logoUrl} alt={`${project.title} logo`} className="w-5 h-5" />
                </div>
              )}
              <h3 className="font-semibold text-white">{project.title}</h3>
            </div>
          </div>
        </div>
      ))}

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <div className="w-full h-screen overflow-auto">
            <div className="grid grid-cols-12 gap-4 h-full">
              <div className="col-start-3 col-span-8">
                <div className="flex justify-between border-b border-neutral-800 p-4">
                  <div className="inline-flex items-center gap-4">
                    <div className="rounded-full h-[48px] w-[48px] flex items-center justify-center" style={{ backgroundColor: selectedProject?.primaryColor }}>
                      <Image src={selectedProject?.logoUrl || ""} alt={`${selectedProject?.title} Logo`} width={16} height={16} />
                    </div>
                    <p className="text-3xl text-white">{selectedProject?.title}</p>
                  </div>
                  <div>
                    <Button>View</Button>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2 h-full mt-6">
                  <div className="col-span-12">
                      <Carousel className="w-full relative">
                        <CarouselContent>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <div className="rounded-lg min-h-[32rem] bg-white flex items-center justify-center">
                                  <span className="text-4xl font-semibold">{index + 1}</span>
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-6" />
                        <CarouselNext className="absolute right-6" />
                      </Carousel>
                  </div>
                  <div className="col-start-2 col-span-10 py-6">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}