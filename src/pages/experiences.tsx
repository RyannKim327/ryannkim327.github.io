import { motion } from "framer-motion";
import SetTitle from "../utils/title";

const Experiences = () => {
  SetTitle("My Experiences", "experiences");
  return (
    <motion.div
      initial={{
        boxSizing: "border-box",
        marginTop: "100%",
        position: "absolute",
      }}
      animate={{
        marginTop: 0,
      }}
    >
      <h1>Experiences</h1>
    </motion.div>
  );
};

export default Experiences;
