import SetTitle from "../utils/title";
import { motion } from "framer-motion";
const Contacts = () => {
  SetTitle("Reach me out", "contacts");
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
      <h1>Contact</h1>
    </motion.div>
  );
};

export default Contacts;
