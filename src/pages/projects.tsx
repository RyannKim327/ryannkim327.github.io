import Images from "../assets/projects/images";
import { pages_interface } from "../utils/interfaces";

export default function Projects(props: pages_interface) {
  return (
    <div id={props.id} className={`${props.className} gap-10`}>
      <h1 className="text-base lg:text-xl">Projects</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {Images().map((item) => {
          return (
            <div className="w-1/4 aspect-video box-border overflow-hidden">
              <img
                className="grayscale hover:grayscale-0 transition ease-all delay-150 w-full aspect-video"
                alt={item.name}
                src={item.src}
              />
              <span className="absolute text-white bg-black/30 mt-[-30px] px-2 backdrop-blur box-border">
                <h3 className="">{item.name}</h3>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
