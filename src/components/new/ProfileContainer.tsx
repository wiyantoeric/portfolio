import { motion } from "framer-motion";
import RevealText from "../old/RevealText";
import ThemeToggle from "./ThemeToggle";

function ProfileContainer() {
  const jobTitle = "/// front end web | software developer";
  const description =
    "Hi there, I'm Eric. I'm an app developer with formal education in IT. I do code and design creative websites and beautiful mobile apps.";

  return (
    <div className="flex flex-col gap-4">
      {/* Encapsulate name section and [ThemeToggle] button */}
      <div className="relative">
        <h1>
          <RevealText
            text="Eric"
            delay={0.2}
            duration={2}
            className="font-mulish text-7xl font-bold"
          />
          <RevealText
            text="Wiyanto"
            delay={0.65}
            duration={2}
            className="mb-2 font-mulish text-7xl font-bold"
          />
          <RevealText
            text={jobTitle}
            delay={1.4}
            duration={1.5}
            className="font-inconsolata opacity-80"
          />
        </h1>

        <div className="absolute right-0 top-0 z-10">
          <ThemeToggle />
        </div>
      </div>

      <h4 className="flex flex-auto flex-wrap">
        {description.split(" ").map((word, index) => {
          return (
            <>
              <RevealText
                text={word}
                duration={0.75}
                delay={2.4 + index * 0.1}
                className="font-mulish"
                key={index}
              />
              <span className="font-mulish">&nbsp;</span>
            </>
          );
        })}
      </h4>

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
        <a
          className="animated-link group font-inconsolata"
          href="mailto:wiyantoeric@gmail.com"
          aria-label="Eric Wiyanto e-mail"
          target="_blank"
        >
          [<span className="group-hover:underline">email</span>]
        </a>
      </motion.div>
    </div>
  );
}

export default ProfileContainer;
