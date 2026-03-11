import { pages_interface } from "../utils/interfaces";

import Light from "./../assets/light.png";
import Dark from "./../assets/dark.png";

export default function Hero(props: pages_interface) {
  return (
    <div
      className={`flex flex-row justify-center h-full w-full overflow-hidden ${props.className}`}
      id={props.id}
    >
      <div className="flex flex-col justify-center items-center md:items-end w-full h-full gap-3 md:gap-10 p-2">
        <h1 className="text-[3em] w-3/6 md:text-[4.5em] md:w-5/6 text-center md:text-end">
          Ryann Kim M. Sesgundo
        </h1>
        <h3 className="text-[1.75em] md:text-[2em] text-center md:text-end">
          A Full-Stack Software Developer
        </h3>
      </div>
      <div className="md:flex md:flex-col hidden justify-center h-full gap-3 text-5xl p-2">
        <p>傑</p>
        <p>作</p>
        <p>一</p>
        <p>枚</p>
        <p>の</p>
        <p>紙</p>
      </div>
      <div className="md:flex-col hidden md:flex w-full h-full items-start justify-center p-2">
        <img
          src={Dark}
          className="rounded-md hidden dark:inline h-3/4 mt-[-5rem]"
        />
        <img src={Light} className="rounded-md dark:hidden h-3/4 mt-[-5rem]" />
      </div>
    </div>
  );
}
