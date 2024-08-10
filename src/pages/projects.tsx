import SetTitle from "../utils/title";
import { motion } from "framer-motion";
import avd from "../assets/projects/avd-ext.png";
import ai from "../assets/projects/ai-haibara.png";
import aria from "../assets/projects/aria-bot.png";
import baybayin from "../assets/projects/baybayin-keyboard.png";
import websamples from "../assets/projects/web-samples.png";
import chatapp from "../assets/projects/chatapp.png";

const Project = (props: any) => {
  return (
    <motion.div
      initial={{
        marginTop: "150%",
        boxSizing: "border-box",
      }}
      animate={{
        marginTop: 0,
      }}
      transition={{
        delay: props.delay,
      }}
      className="grayscale hover:grayscale-0 h-40 aspect-video transition ease-in transition-75 delay-75 overflow-hidden"
    >
      <img
        src={props.src}
        alt={props.alt}
        className="absolute aspect-video h-full"
      />
      <h3 className="flex flex-col justify-end w-full h-full absolute bottom-0 opacity-0 hover:opacity-100 transition ease-in transition-25 rounded-sm">
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
    <div className="projects p-6 overflow-hidden border-box h-full max-h-11/12">
      <Project
        src={avd}
        alt="Audio Video Downloader"
        text="Audio Video Downloader"
        delay={0}
      />
      <Project src={ai} alt="AI Haibara" text="AI Haibara" delay={0.25} />
      <Project src={aria} alt="Ar!a Bot" text="Ar!a Bot" delay={0.5} />
      <Project
        src={baybayin}
        alt="Baybayin Keyboard"
        text="Baybayin Keyboard"
        delay={0.75}
      />
      <Project src={chatapp} alt="Chat App" text="Chat App" delay={1} />
      <Project
        src={websamples}
        alt="Web Samples for Newbie"
        text="Web Challenges"
        delay={1.25}
      />
    </div>
  );
};

export default Projects;
