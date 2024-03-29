"use client";

const articles = [
  {
    title: "Website development",
    projects: [
      {
        title: "Fancy website",
        link: "https://we-fancy-website.vercel.app",
        alt: "we-fancy-website.vercel.app",
      },
    ],
  },
  {
    title: "Flutter",
    projects: [
      {
        title: "Audio Store",
        link: "https://github.com/wiyantoeric/audio_store",
        alt: "github.com/wiyantoeric/audio_store",
      },
      {
        title: "Restaurant App",
        link: "https://github.com/wiyantoeric/flutter-lab/tree/main/restaurant_app",
        alt: "github.com/wiyantoeric/flutter-lab/tree/main/restaurant_app",
      },
      {
        title: "Note App",
        link: "https://github.com/wiyantoeric/flutter-note-app",
        alt: "github.com/wiyantoeric/flutter-note-app",
      },
    ],
  },
  {
    title: "Android",
    projects: [
      {
        title: "Covid Tracker",
        link: "https://github.com/wiyantoeric/covid-tracker",
        alt: "github.com/wiyantoeric/covid-tracker",
      },
      {
        title: "Dota Hero App",
        link: "https://github.com/wiyantoeric/kotdota",
        alt: "github.com/wiyantoeric/kotdota",
      },
    ],
  },
  {
    title: "AI",
    projects: [
      {
        title: "License Plate Recognition",
        link: "https://github.com/wiyantoeric/license-plate-recognition",
        alt: "github.com/wiyantoeric/license-plate-recognition",
      },
      {
        title: "Piano Optical Music Recognition",
        link: "https://omr-wiyantoeric.streamlit.app",
        alt: "omr-wiyantoeric.streamlit.app",
      },
    ],
  },
];

const maskVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    transition: {
      ease: "backOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

function WorksCard() {
  return (
    <div className="flex w-96 flex-col border-2 border-black p-8">
      <div className="flex flex-col justify-start gap-10">
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
      </div>
    </div>
  );
}

export default WorksCard;
