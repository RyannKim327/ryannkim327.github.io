import Header from "./parts/header";

import About from "./screen/about";
import Hero from "./screen/hero";
import Projects from "./screen/projects";
import Contact from "./screen/contacts";
import { useEffect, useState } from "react";
import { get } from "./utils/api";
import Feedback from "./screen/feedback";
import Blogs from "./screen/blogs";

function App() {
  const [loaded, setChange] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await get("");
      if (res.message) {
        setChange(true);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col dark:bg-slate-950 dark:text-white bg-[#f9fafb] h-dvh w-dvw">
      <Header isLoaded={loaded} />
      <div className="h-full w-full snap-mandatory snap-y scroll-smooth overflow-y-scroll overflow-x-hidden">
        <Hero id="home" className="snap-start" />
        {loaded ? (
          <>
            <About id="about" className="snap-start" />
            <Projects id="projects" className="snap-start" />
            <Blogs id="blog" className="snap-start" />
            <Feedback id="feedback" className="snap-start" />
          </>
        ) : (
          <div className="flex flex-col h-full w-full items-center text-center justify-center gap-3 snap-start">
            <p className="text-[2rem]">Some pages are disabled.</p>
            <p className="text-[1.25rem]">Backend is currently loading</p>
          </div>
        )}
        <Contact id="contact" className="snap-start" />
      </div>
    </div>
  );
}

export default App;
