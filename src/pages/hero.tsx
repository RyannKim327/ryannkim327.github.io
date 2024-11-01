import Word from "../components/wordbyword";
import { motion } from "framer-motion";

interface properties {
  className: string | unknown;
}

export default function Hero(props: properties) {
  return (
    <div className={` ${props.className}`}>
      <Word>Hello, I am Ryann_Kim_M._Sesgundo</Word>
      <motion.h1
        initial={{
          opacity: 0,
          marginTop: "150px",
          marginBottom: "-150px",
        }}
        animate={{
          opacity: 1,
          marginTop: 0,
          marginBottom: 0,
        }}
        transition={{
          delay: 4 / 5,
        }}
      >
        A student of Dalubhasaan ng Lungsod ng Lucena
      </motion.h1>
    </div>
  );
}
