import { ProjectsMessage } from "@/types";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


export function ProjectsMessageBubble({
  message,
}: {
  message: ProjectsMessage;
}) {
  return (
    <div className="max-w-xl grid grid-cols-12 gap-4 cursor-pointer">
      {message.projects.map((project) => (
        <div
          key={project.id}
          className={`relative col-span-6 min-h-[250px] rounded-xl  p-4 justify-between flex flex-col`}
          style={{ backgroundColor: project.primaryColor, backgroundImage: project.heroImageUrl ? `url(${project.heroImageUrl})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
      <Drawer open={true}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}