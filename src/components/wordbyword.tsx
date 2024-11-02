import { motion } from "framer-motion";
import { children_required } from "../utils/interfaces";

export default function Word(props: children_required) {
  const words: string[] = props.children.split(/\s/);
  const gap: number = 150
  return (
    <div className={`flex flex-row items-center ${props.className}`}>
      {words.map((word, i) => {
        return (
          <motion.h1
            initial={{
              marginTop: `-${gap}px`,
              marginBottom: `${gap}px`,
              paddingRight: "10px",
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              marginBottom: 0,
              opacity: 1,
            }}
            transition={{
              delay: i / 4,
            }}
            className="text-sm md:text-md lg:text-3xl"
          >
            {word.replace(/_/gi, " ")}
          </motion.h1>
        );
      })}
    </div>
  );
}
