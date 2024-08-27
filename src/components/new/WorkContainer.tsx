"use client";

import { motion } from "framer-motion";
import { Article } from "@/type/article";

import articleData from "../../data.json";
// import { useMousePosition } from "@/utils/useCursor";
// import { useEffect, useState } from "react";

function WorkContainer() {
//   const { mouseX, mouseY, onMouseMove } = useMousePosition();

//   const [imageUrl, setImageUrl] = useState<string | null | undefined>(null);
//   const [showMask, setShowMask] = useState(false);

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
      {/* <motion.div
        className="absolute left-0 top-0 h-4 w-4 bg-red-300"
        style={{
          x: mouseX,
          y: mouseY,
          transition: "ease-out",
        }}
      ></motion.div> */}
      <div className="flex flex-col gap-12">
        {/* Work experiences section */}
        {articles.map((article) => {
          return (
            <div
              className="space-y-4"
              key={article.title}
            //   onMouseMove={onMouseMove}
            >
              <p className="font-mulish font-bold uppercase">{article.title}</p>
              {/* Projects section */}
              {article.projects.map((project) => {
                return (
                  <div
                    key={project.title}
                    className=""
                    // onMouseEnter={() => {
                    //   setImageUrl(project.imageUrl);
                    //   setShowMask(true);
                    // }}
                    // onMouseLeave={() => {
                    //   setShowMask(false);
                    // }}
                  >
                    <p className="font-mulish text-sm italic opacity-80">
                      {project.title}
                    </p>
                    <a
                      className="animated-link group cursor-pointer font-inconsolata"
                      href={project.link}
                      aria-label={project.alt}
                      target="_blank"
                    >
                      [
                      <span className="group-hover:underline">
                        {project.link}
                      </span>
                      ]
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default WorkContainer;
