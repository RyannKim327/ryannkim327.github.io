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
  // const [_, setNotice] = useState("The server is waking up");
  const [_, setChange] = useState(false);

  useEffect(() => {
    (async () => {
      await get("");
      setChange(true);
    })();
  }, []);

  return (
    <div className="flex flex-col dark:bg-slate-950 dark:text-white bg-[#f9fafb] h-dvh w-dvw">
      <Header />
      <div className="h-full w-full snap-mandatory snap-y scroll-smooth overflow-y-scroll overflow-x-hidden">
        <Hero id="home" className="snap-start" />
        <About id="about" className="snap-start" />
        <Projects id="projects" className="snap-start" />
        <Blogs id="blog" className="snap-start" />
        <Feedback id="feedback" className="snap-start" />
        <Contact id="contact" className="snap-start" />
      </div>
    </div>
  );
}

export default App;
