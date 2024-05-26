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

function NewPage() {
  return (
    <div className="absolute left-1/2 top-[10%] max-w-[400px] -translate-x-1/2">
      <div className="sticky h-1 w-full bg-black"></div>
      <div className="mt-4 flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="font-mulish text-7xl font-bold text-black">
            Eric Wiyanto
          </h1>
          <h2 className="font-inconsolata text-black opacity-80">
            {"// app developer"}
          </h2>
          <div className="mt-6 space-y-4">
            <p className="font-mulish text-justify">
              {
                "Hi there, I'm Eric. I'm an app developer with a formal education in IT"
              }
            </p>
            <p className="font-mulish text-justify">
              {
                "I do code and design creative website and beautiful mobile app."
              }
            </p>
          </div>
          <nav className="mt-12 flex flex-row gap-4">
            <a
              className="font-inconsolata group"
              href="https://linkedin.com/in/ericwiyanto"
            >
              [<span className="group-hover:underline">linkedin</span>]
            </a>
            <a
              className="font-inconsolata group"
              href="https://github.com/wiyantoeric"
            >
              [<span className="group-hover:underline">github</span>]
            </a>
          </nav>
        </div>

        {/* <div className="font-mulish font-bold text-white bg-black w-fit px-1">
          Works
        </div> */}
        <div>
          <p className="font-mulish font-bold">Works</p>
          <div className="flex flex-col">
            {articles.map((e) => {
              return (
                <div key={e.title}>
                  <p>{e.title}</p>
                  {e.projects.map((p) => {
                    return <div key={p.title}>
                      <p>{p.title}</p>
                      <a>{p.link}</a>
                    </div>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPage;
