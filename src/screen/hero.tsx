import { pages_interface } from "../utils/interfaces";

import Self from "./../assets/self.png";

export default function Hero(props: pages_interface) {
  return (
    <div
      className={`flex flex-row items-start justify-center h-full w-full overflow-hidden ${props.className}`}
      id={props.id}
    >
      <img
        src={Self}
        className="hidden md:inline h-full md:mt-[-3rem] rounded-md"
      />
      <div className="flex flex-col justify-center items-center md:items-baseline h-full md:ml-[-2.5rem] gap-3">
        <h1 className="text-[2.5rem]">Ryann Kim M. Sesgundo</h1>
        <h3 className="text-[1.75rem]">A developer po ata ako</h3>
      </div>
    </div>
  );
}
