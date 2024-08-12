import { Link } from "react-router-dom";
import SetTitle from "../utils/title";
import { motion } from "framer-motion";
import WordByWordText from "../widgets/wordbyword-text";

const Index = () => {
  SetTitle("I am Ryann Kim Sesgundo", "index");
  return (
    <div className="flex flex-col items-center justify-center h-full box-border overflow-hidden">
      <h1 className="text-2xl roboto-slab">
        <WordByWordText text="I am Ryann Kim Sesgundo" position="5rem" />
      </h1>
      <motion.div
        initial={{
          position: "absolute",
          marginTop: "8rem",
          opacity: 0,
        }}
        animate={{
          marginTop: "5rem",
          opacity: 1,
        }}
        transition={{
          delay: 1.15,
        }}
        className="flex flex-col items-center box-border"
      >
        <h3 className="text-lg roboto-slab">An android and web developer</h3>

        <p className="mt-10 text-sm">Want to see some of my projects?</p>
        <Link
          to="/projects"
          className="rounded-full border-[1px] border-solid border-white px-4 m-2 shadow-[0_0_0.75rem] shadow-black hover:bg-white transition transition-75 ease-in hover:text-black hover:shadow-[rgba(255,255,255,0.3)]"
        >
          Projects
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;
