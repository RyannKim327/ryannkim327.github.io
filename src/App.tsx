import Header from "./parts/header";

import About from "./screen/about";
import Hero from "./screen/hero";
import Projects from "./screen/projects";
import Contact from "./screen/contacts";

function App() {
  return (
    <div className="flex flex-col p-4 bg-[#f6f6f6] text-black dark:bg-[#232136] dark:text-[#e0def4] w-dvw h-dvh">
      <div className="flex flex-col border border-solid border=[#907aa9] dark:border-[#c4a7e7] h-full w-full overflow-hidden pt-6 px-6">
        <Header />

        <div className="w-full h-full overflow-x-hidden overflow-y-scroll">
          <Hero id="home" />
          <About id="about" />
          <Projects id="projects" />
          <Contact id="contact" />
        </div>
      </div>
    </div>
  );
}

export default App;
