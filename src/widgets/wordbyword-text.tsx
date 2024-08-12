import { motion } from "framer-motion";

const single = (text: string, delay: number, pos: string) => {
  return (
    <motion.h1
      initial={{
        overflow: "hidden",
        marginTop: "100%",
        marginRight: "0.5rem",
        opacity: 0,
      }}
      animate={{
        marginTop: 0,
        marginBottom: pos,
        opacity: 1,
      }}
      transition={{
        delay: delay / 5,
      }}
    >
      {`${text} `}
    </motion.h1>
  );
};

const WordByWordText = (props: any) => {
  const words = props.text.split(" ");
  return (
    <span className="flex flex-row flex-wrap items-center overflow-hidden">
      {words.map((txt: string, i: number) => {
        return single(txt, i, props.position ?? "0");
      })}
    </span>
  );
};

export default WordByWordText;
