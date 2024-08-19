import SetTitle from "../utils/title";
import { motion } from "framer-motion";

const About = () => {
  SetTitle("About me", "about");
  return (
    <motion.div
      initial={{
        boxSizing: "border-box",
        position: "absolute",
        marginTop: "50%",
        opacity: 0,
      }}
      animate={{
        marginTop: 0,
        opacity: 1,
      }}
      exit={{ marginTop: "100%" }}
      className="p-4 overflow-hidden"
    >
      <fieldset className="border-slate-900 dark:border-white border-[1px] rounded-md p-2">
        <legend className="ml-6 border-slate-900 dark:border-white border-[1px] rounded-md px-2">
          Who am I?
        </legend>
        <blockquote>
          &emsp;I am Ryann Kim Sesgundo, a software developer with Android and
          Web Development. I focus in combining the differences of each
          technologies to develop something that is unique and helpful. I was
          also an aspiring student who want to be a successful in chosen field.
        </blockquote>
      </fieldset>
    </motion.div>
  );
};

export default About;
