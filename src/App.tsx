import About from "./pages/about";
import Contact from "./pages/contacts";
import Hero from "./pages/hero";
import Projects from "./pages/projects";
import Header from "./parts/header";

function App() {
  return (
    <div className=" w-dvw h-dvh">
      <Header className={`z-10`} />
      <Hero
        id="main"
        className="flex flex-col box-border items-center justify-center h-full w-full"
      />
      <About
        id="about"
        className="flex flex-col box-border items-center justify-center h-full w-full"
      />
      <Projects
        id="projects"
        className="flex flex-col box-border items-center justify-center h-full w-full"
      />
      <Contact
        id="contact"
        className="flex flex-col box-border items-center justify-center h-full w-full"
      />
    </div>
  );
}

export default App;
