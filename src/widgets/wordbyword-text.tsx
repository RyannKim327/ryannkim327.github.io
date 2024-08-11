import { motion } from "framer-motion";

const single = (text: string, delay: number) => {
  return (
    <motion.h1
      initial={{
        marginTop: "200%",
        marginRight: "0.5rem",
      }}
      animate={{
        marginTop: 0,
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
    <span className="flex flex-row items-center">
      {words.map((txt: string, i: number) => {
        return single(txt, i);
      })}
    </span>
  );
};

export default WordByWordText;
