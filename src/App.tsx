import Header from "./parts/header";

import About from "./screen/about";
import Hero from "./screen/hero";
import Projects from "./screen/projects";
import Contact from "./screen/contacts";
import { useEffect, useState } from "react";
import { get } from "./utils/api";

function App() {
  const [notice, setNotice] = useState("The server is waking up");
  const [change, setChange] = useState(false);

  useEffect(() => {
    (async () => {
      const wakeup = await get("");
      setNotice(wakeup.message);
      setChange(true);
      setTimeout(() => {
        setNotice("");
      }, 5000);
    })();
  }, []);

  return (
    <div className="flex flex-col p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh">
      <div className="flex flex-col border border-solid border-[#0c0c0c] dark:border-[#f9f9f6] h-full w-full overflow-hidden pt-6 px-6">
        <Header />

        <div className="w-full h-full overflow-x-hidden overflow-y-scroll snap-mandatory snap-y scroll-smooth">
          <Hero id="home" className="snap-start" />
          <About id="about" className="snap-start" />
          <Projects id="projects" className="snap-start" />
          <Contact id="contact" className="snap-start" />
          {notice.length > 0 ? (
            <div className="flex flex-row justify-end w-full fixed z-10 bottom-5 left-5 pr-10">
              <span
                title={notice}
                className={`flex flex-col items-center justify-center animate-pulse ${change ? "bg-[#90EE90] dark:bg-[#106510]" : "bg-[#f87c7c] dark:bg-[#f83e3e]"} p-3 rounded-full`}
              >
                <span className="bg-amber-400 w-4 h-4 rounded-full"></span>
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
