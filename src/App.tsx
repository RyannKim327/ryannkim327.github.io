import Header from "./components/header";

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
    <div className="flex flex-col h-full w-full select-none overflow-hidden">
      <Header isLoaded={true} />
      <div className="h-full w-full snap-mandatory snap-y overflow-y-auto overflow-x-hidden">
        <Hero id="home" className="snap-start" />
        <div
          id="about"
          className="flex flex-col md:flex-row md:h-full w-full overflow-y-scroll md:overflow-hidden snap-start p-3 md:p-10 gap-5"
        >
          <Experiences id="exp" />
          <Certificates id="certs" />
        </div>
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
