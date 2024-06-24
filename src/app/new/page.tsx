"use client";

import { useEffect, useRef, useState } from "react";
import articleData from "../../data.json";
import { Article } from "@/type/article";
import initiateLenis from "@/utils/initiateLenis";
import { motion, useScroll } from "framer-motion";
import "../../styles/new.scss";
import RevealText from "@/components/RevealText";

const jobTitle = "/// app dev | web dev";
const description =
  "Hi there, I'm Eric. I'm an app developer with a formal education in IT. I do code and design creative website and beautiful mobile app.";

const staggerChildren = (staggerDuration: number, delayChildren: number) => {
  return {
    initial: {},
    animate: {
      transition: {
        delayChildren: delayChildren,
        staggerChildren: staggerDuration,
      },
    },
  };
};

function NewPage() {
  const articles: Article[] = articleData as Article[];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    initiateLenis();
  });

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 top-[10%] max-w-[400px] -translate-x-1/2 pb-40"
    >
      <Bar direction="right" />

      <div className="mt-4 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          {/* <h1 className="font-mulish text-7xl font-bold text-black">Eric Wiyanto</h1> */}
          <RevealText
            text="Eric"
            delay={0.2}
            duration={2}
            className="font-mulish text-7xl font-bold text-black"
          />
          <RevealText
            text="Wiyanto"
            delay={0.65}
            duration={2}
            className="mb-2 font-mulish text-7xl font-bold text-black"
          />
          <RevealText
            text={jobTitle}
            delay={1.4}
            duration={1.5}
            className="font-inconsolata text-black opacity-80"
          />

          <div className="flex flex-auto flex-wrap">
            {description.split(" ").map((word, index) => {
              return (
                <>
                  <RevealText
                    text={word}
                    duration={0.75}
                    delay={2.4 + index * 0.1}
                    className="font-mulish"
                  />
                  <span className="font-mulish">&nbsp;</span>
                </>
              );
            })}
          </div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 2.5,
                duration: 0.5,
                ease: "easeOut",
              },
            }}
            className="mt-12 flex flex-row gap-4"
          >
            <a
              className="animated-link group font-inconsolata"
              href="https://linkedin.com/in/ericwiyanto"
              aria-label="Eric Wiyanto linkedin profile"
              target="_blank"
            >
              [<span className="group-hover:underline">linkedin</span>]
            </a>
            <a
              className="animated-link group font-inconsolata"
              href="https://github.com/wiyantoeric"
              aria-label="Eric Wiyanto github profile"
              target="_blank"
            >
              [<span className="group-hover:underline">github</span>]
            </a>
          </motion.div>
        </div>

        {/* <div className="font-mulish font-bold text-white bg-black w-fit px-1">
          Works
        </div> */}
        <Bar sticky={true} direction="left" />

        <motion.div
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
            {articles.map((article) => {
              return (
                <div className="space-y-2" key={article.title}>
                  <p className="font-mulish uppercase">{article.title}</p>
                  {article.projects.map((project) => {
                    return (
                      <div key={project.title} className="">
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
      </div>
    </div>
  );

  function Bar({
    direction,
    sticky = false,
  }: {
    direction: "right" | "left";
    sticky?: boolean;
  }) {
    return (
      <motion.div
        className={`h-fit w-full origin-${direction} ${
          sticky ? "sticky" : ""
        } top-0`}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: 1,
          transition: {
            delay: 1,
            duration: 1,
          },
        }}
      >
        <motion.div
          className={`origin-${direction} h-1 w-full bg-black`}
          style={{
            scaleX: scrollYProgress,
          }}
        ></motion.div>
      </motion.div>
    );
  }
}

export default NewPage;
