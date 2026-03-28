import Header from "./parts/header";

import Hero from "./screen/hero";
import Projects from "./screen/projects";
import Contact from "./screen/contacts";
import Feedback from "./screen/feedback";
import Blogs from "./screen/blogs";
import Experiences from "./screen/experience";
import Certificates from "./screen/certifications";
import Chatbot from "./screen/chatbot";

function App() {
  return (
    <div className="flex flex-col dark:bg-slate-950 dark:text-white bg-[#f9fafb] h-dvh w-dvw select-none overflow-hidden">
      <Header isLoaded={true} />
      <div className="h-full w-full snap-mandatory snap-y scroll-smooth overflow-y-scroll overflow-x-hidden">
        <Hero id="home" className="snap-start" />

        <Experiences id="exp" className="snap-start" />
        <Certificates id="certs" className="snap-start" />
        <Projects id="projects" className="snap-start" />
        <Blogs id="blog" className="snap-start" />
        <Feedback id="feedback" className="snap-start" />
        <Chatbot />

        <Contact id="contact" className="snap-start" />
      </div>
    </div>
  );
}

export default App;
