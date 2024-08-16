import SetTitle from "../utils/title";
import { motion } from "framer-motion";
import avd from "../assets/projects/avd-ext.png";
import ai from "../assets/projects/ai-haibara.png";
import aria from "../assets/projects/aria-bot.png";
import baybayin from "../assets/projects/baybayin-keyboard.png";
import websamples from "../assets/projects/web-samples.png";
import chatapp from "../assets/projects/chatapp.png";

const Project = (props: any) => {
  function go(url: string) {
    if (url) {
      const w = window.open(url);
      if (w) {
        w.focus();
      }
    }
  }

  return (
    <motion.div
      initial={{
        marginTop: "200%",
        boxSizing: "border-box",
      }}
      animate={{
        marginTop: 0,
      }}
      transition={{
        delay: props.delay,
      }}
      className="grayscale hover:grayscale-0 w-full box-border aspect-video transition ease-in transition-75 delay-75 overflow-hidden p-4"
      onClick={() => {
        go(props.location);
      }}
    >
      <img
        src={props.src}
        alt={props.alt}
        className="absolute w-full box-border aspect-video"
      />
      <h3 className="flex flex-col justify-end w-full h-full absolute bottom-0 opacity-0 hover:opacity-100 select-none transition ease-in transition-25 rounded-sm">
        <span className="backdrop-blur-sm p-2 w-full box-border bg-black/30">
          {props.text}
        </span>
      </h3>
    </motion.div>
  );
};

const Projects = () => {
  SetTitle("My Flex Projects", "projects");
  return (
    <div className="projects grid grid-rows-3 p-6 overflow-x-hidden border-box w-full h-full">
      <Project
        src={avd}
        alt="Audio Video Downloader"
        text="Audio Video Downloader"
        delay={0}
        location="https://github.com/RyannKim327/video-downloader-extension/releases/tag/Chrome-0.0.3"
      />
      <Project
        src={ai}
        alt="AI Haibara"
        text="AI Haibara"
        delay={0.25}
        location="https://github.com/RyannKim327/Ai-Haibara/raw/main/app.apk"
      />
      <Project
        src={aria}
        alt="Ar!a Bot"
        text="Ar!a Bot"
        delay={0.5}
        location="https://ryannkim327.is-a.dev/FacebookBot"
      />
      <Project
        src={baybayin}
        alt="Baybayin Keyboard"
        text="Baybayin Keyboard"
        delay={0.75}
        location="https://ryannkim327.is-a.dev/Baybayin-Keyboard"
      />
      <Project
        src={chatapp}
        alt="Chat App"
        text="Chat App"
        delay={1}
        location="https://chat-app-y7a7.onrender.com"
      />
      <Project
        src={websamples}
        alt="Web Samples for Newbie"
        text="Web Challenges"
        delay={1.25}
        location="https://ryannkim327.is-a.dev/Web-Challenges-for-Newbie"
      />
    </div>
  );
};

export default Projects;
