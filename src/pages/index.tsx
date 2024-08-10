import { Link } from "react-router-dom";
import SetTitle from "../utils/title";
import { motion } from "framer-motion";

const Index = () => {
  SetTitle("I am Ryann Kim Sesgundo", "index");
  return (
    <motion.div className="flex flex-col items-center">
      <motion.h1
        initial={{
          marginTop: "100%",
        }}
        animate={{
          marginTop: 0,
        }}
        className="text-2xl roboto-slab"
      >
        I am Ryann Kim Sesgundo
      </motion.h1>
      <h3 className="text-lg roboto-slab">An android and web developer</h3>

      <p className="mt-10 text-sm">Want to see some of my projects?</p>
      <Link
        to="/projects"
        className="rounded-full border-[1px] border-solid border-white px-4 m-2 shadow-[0_0_0.75rem] shadow-black hover:bg-white hover:text-black hover:shadow-[rgba(255,255,255,0.3)]"
      >
        Projects
      </Link>
    </motion.div>
  );
};

export default Index;
