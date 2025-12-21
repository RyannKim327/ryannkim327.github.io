// import Word from "../components/wordbyword";
import { motion } from "framer-motion";
import { pages_interface } from "../utils/interfaces";

export default function Hero(props: pages_interface) {
  const heroButton = (id: string) => {
    const _ = document.getElementById(id);
    if (_) {
      _.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className="flex flex-col items-center justify-center h-full w-full"
      id={props.id}
    >
      <h1>Ryann Kim Sesgundo</h1>
    </div>
  );
}
