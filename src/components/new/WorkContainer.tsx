"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Article, Project } from "@/type/article";

import articleData from "../../data.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import useTheme from "@/utils/useTheme";
// import { useMousePosition } from "@/utils/useCursor";
// import { useEffect, useState } from "react";

function WorkContainer() {
  //   const { mouseX, mouseY, onMouseMove } = useMousePosition();

  //   const [imageUrl, setImageUrl] = useState<string | null | undefined>(null);
  //   const [showMask, setShowMask] = useState(false);

  const [currentOpened, setCurrentOpened] = useState<string | null>(null);

  const articles = articleData as Article[];

  return (
    <motion.div
      className="relative"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 3,
          duration: 0.5,
          ease: "easeOut",
        },
      }}
    >
      <div className="flex flex-col gap-12">
        {/* Work experiences section */}
        {articles.map((article, articleIndex) => {
          return (
            <div className="space-y-4" key={article.title}>
              <p className="font-mulish font-bold uppercase">{article.title}</p>
              {article.projects.map((project, projectIndex) => {
                const key = `${articleIndex}-${projectIndex}`;

                return (
                  <ProjectContainer
                    key={key}
                    project={project}
                    onOpen={() => {
                      // Close container when the same key is clicked by setting into null
                      currentOpened === key
                        ? setCurrentOpened(null)
                        : setCurrentOpened(key);
                    }}
                    showDescription={key === currentOpened}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// Project Container
// Shows projects onClick
// Close others when one is opened (only one can be opened at a time)
function ProjectContainer({
  project,
  onOpen,
  showDescription,
}: {
  project: Project;
  onOpen: () => void;
  showDescription: boolean;
}) {
  // const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="space-y-2 transition-transform">
      <div className="flex flex-row flex-nowrap items-center gap-2">
        <div className="flex-1">
          <p className="font-mulish text-sm italic opacity-80">
            {project.title}
          </p>
          <a
            className="animated-link group cursor-pointer font-inconsolata"
            href={project.link}
            aria-label={project.alt}
            target="_blank"
          >
            [<span className="group-hover:underline">{project.link}</span>]
          </a>
        </div>
        <div className="bgzinc90 h-full cursor-pointer" onClick={onOpen}>
          <ExpandIcon isOpen={showDescription} />
        </div>
      </div>
      <div className="overflow-hidden">
        <AnimatePresence>
          {showDescription && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{
                y: "0%",
                scaleY: 1,
                transition: {
                  ease: "circOut",
                  duration: 0.5,
                },
              }}
              exit={{
                y: "-100%",
                opacity: 0,
                transition: {
                  ease: "circOut",
                  duration: 0.5,
                },
              }}
              className="flex w-full origin-top flex-row overflow-hidden"
            >
              {project.imageUrl && project.imageUrl !== "" && (
                <div className="relative h-32 w-32 border border-black">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={project.imageUrl}
                    alt={project.alt}
                  />
                </div>
              )}
              <div className="ml-6 flex-1 space-y-1">
                <p className="relative font-inconsolata text-sm whitespace-pre-line before:absolute before:-left-3 before:top-1/2 before:h-[5px] before:w-[5px] before:-translate-y-1/2 before:rounded-full before:bg-black before:content-[''] before:dark:bg-white">
                  {project.description}
                </p>
                <div className="flex flex-row flex-wrap gap-x-2 gap-y-1">
                  {project.tags?.map((tag) => (
                    <div key={tag} className="bg-zinc-200 px-1">
                      <p className="font-inconsolata text-sm text-black dark:text-black">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ExpandIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      style={{
        rotate: isOpen ? "180deg" : "0deg",
      }}
      className="transition-all dark:text-white"
      width="20px"
      height="20px"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
export default WorkContainer;
