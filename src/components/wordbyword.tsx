import { motion } from "framer-motion";

interface properties {
  children: string;
  className: string | unknown | null;
}

export default function Word(props: properties) {
  const words: string[] = props.children.split(/\s/);
  const gap: number = 150;
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
            className="text-xl"
          >
            {word.replace(/_/gi, " ")}
          </motion.h1>
        );
      })}
    </div>
  );
}
