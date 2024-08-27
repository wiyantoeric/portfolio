import { motion } from "framer-motion";
import AnimatedBorder from "./AnimatedBorder";
import { fadeInVariant } from "@/utils/animation";
import { Article } from "@/type/article";
import articleData from "../../data.json";

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function WorksCard() {
  const articles: Article[] = articleData as Article[];

  return (
    <motion.div
      variants={containerVariant}
      className="relative flex aspect-[7/8] w-96 flex-col bg-white p-8"
    >
      <AnimatedBorder />
      <motion.div
        variants={fadeInVariant}
        className="flex flex-col justify-start gap-10"
      >
        <p>My works</p>
        {articles.map((article) => (
          <article className="space-y-2" key={article.title}>
            <p className="font-mono text-sm">{article.title}</p>
            <div className="flex flex-col gap-8 border-l-2 border-black pl-4">
              {article.projects.map((project) => (
                <section key={project.title}>
                  <p>{project.title}</p>
                  <a
                    className="text-gray-500 transition-colors duration-150 ease-in-out hover:text-black"
                    href={project.link}
                    target="_blank"
                  >
                    {project.alt}
                    <span>↗</span>
                  </a>
                </section>
              ))}
            </div>
          </article>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default WorksCard;
