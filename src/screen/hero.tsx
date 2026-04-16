import { pages_interface } from "../utils/interfaces";

import Light from "./../assets/light.png";
import Dark from "./../assets/dark.png";
import { useEffect, useState } from "react";
import { get } from "../utils/api";

export default function Hero(props: pages_interface) {
  const [_, setUser] = useState({
    about: "",
  });

  useEffect(() => {
    (async () => {
      const data = await get("dev");
      setUser(data.data);
    })();
  }, []);

  return (
    <div
      className={`flex flex-row justify-center h-full w-full overflow-hidden ${props.className} `}
      id={props.id}
    >
      <div className="flex flex-col justify-center items-center md:items-end w-full h-full gap-2 md:gap-5 p-2">
        <h1 className="text-[2em] w-5/6 md:text-[3em] md:w-5/6 text-center md:text-end">
          Ryann Kim M. Sesgundo
        </h1>
        <h3 className="text-[0.75em] md:text-[1.75em] text-center md:text-end">
          A Full-Stack Software Developer
        </h3>
      </div>
      <div className="md:flex md:flex-col hidden justify-center h-full gap-3 text-[2rem] p-2">
        <p>ᜇ</p>
        <p>ᜌ</p>
        <p>ᜈ᜔</p>
        <p>ᜃᜒ</p>
        <p>ᜋ᜔</p>
      </div>
      <div className="md:flex-col hidden md:flex w-full h-full items-start justify-start p-2">
        <img
          src={Dark}
          className="rounded-md hidden dark:inline h-[calc(50%-0.5rem)] mt-[calc(25%-1rem)]"
        />
        <img
          src={Light}
          className="rounded-md inline dark:hidden h-[calc(50%-0.5rem)] mt-[calc(25%-1rem)]"
        />
      </div>
    </div>
  );
}
