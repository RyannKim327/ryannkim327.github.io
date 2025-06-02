import About from "./pages/about";
import Contact from "./pages/contacts";
import Hero from "./pages/hero";
import Poetry from "./pages/poetry";
import Projects from "./pages/projects";
import Header from "./parts/header";

function App() {
  return (
    <div className="flex flex-col dark:bg-[#212129] dark:text-white w-dvw h-dvh lg:px-[10%]">
      <Header className={`my-2`} />
      <div
        id="base"
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory"
      >
        <Hero
          id="main"
          className="snap-start dark:bg-[#212129] dark:text-white flex flex-col box-border items-center justify-center h-full w-full"
        />
        <About
          id="about"
          className="snap-start dark:bg-[#212129] dark:text-white flex flex-col box-border items-center justify-center h-full w-full"
        />
        <Projects
          id="projects"
          className="snap-start dark:bg-[#212129] overflow-hidden dark:text-white flex flex-col box-border items-center justify-center h-full w-full"
        />
        {/* <Poetry */}
        {/*   id="other-works" */}
        {/*   className="snap-start dark:bg-[#212129] dark:text-white flex flex-col box-border items-center justify-center h-full w-full" */}
        {/* /> */}
        <Contact
          id="contact"
          className="snap-start dark:bg-[#212129] dark:text-white flex flex-col box-border items-center justify-center h-full w-full"
        />
      </div>
    </div>
  );
}

export default App;
