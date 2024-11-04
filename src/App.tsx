import About from "./pages/about";
import Contact from "./pages/contacts";
import Hero from "./pages/hero";
import Projects from "./pages/projects";
import Header from "./parts/header";

function App() {
  return (
    <div className="dark:bg-[#212129] dark:text-white w-dvw h-dvh">
      <Header className={`z-10`} />
      <Hero
        id="main"
        className="dark:bg-[#212129] dark:text-white flex flex-col box-border items-center justify-center h-full w-full"
      />
      <About
        id="about"
        className="dark:bg-[#212129] dark:text-white flex flex-col box-border items-center justify-center h-full w-full"
      />
      <Projects
        id="projects"
        className="dark:bg-[#212129] overflow-hidden dark:text-white flex flex-col box-border items-center justify-center h-full w-full"
      />
      <Contact
        id="contact"
        className="dark:bg-[#212129] dark:text-white flex flex-col box-border items-center justify-center h-full w-full"
      />
    </div>
  );
}

export default App;
