import { motion } from "framer-motion";

interface properties {
  children: string;
  className: string | unknown;
}

export default function Word(props: properties) {
  const words: string[] = props.children.split(/\s/);
  return (
    <div className={`flex flex-row items-center ${props.className}`}>
      {words.map((word, i) => {
        return (
          <motion.h1
            initial={{
              marginTop: "150px",
              paddingRight: "10px",
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            transition={{
              delay: i / 5,
            }}
            className="text-xl"
          >
            {word}
          </motion.h1>
        );
      })}
    </div>
  );
}
