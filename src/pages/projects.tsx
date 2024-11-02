import Images from "../assets/projects/images";
import { pages_interface } from "../utils/interfaces";

export default function Projects(props: pages_interface) {
  return (
    <div id={props.id} className={`${props.className} gap-3`}>
      <h1>Projects</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {Images().map((item) => {
          return (
            <div className="relative w-1/4 aspect-video box-border">
              <img
                className="relative grayscale hover:grayscale-0 transition ease-all delay-150 w-full aspect-video"
                alt={item.name}
                src={item.src}
              />
              <span className="relative h-full w-full box-border aspect-video w-full">
                <h3 className="">{item.name}</h3>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
