import Images from "../assets/projects/images";
import { pages_interface } from "../utils/interfaces";

export default function Projects(props: pages_interface) {
  return (
    <div id={props.id} className={`${props.className} gap-10 w-full h-full`}>
      <h1 className="text-base lg:text-2xl">Projects</h1>
      <div className="flex flex-wrap justify-center overflow-y-scroll gap-2 w-full h-full box-border">
        {Images().map((item) => {
          return (
            <div
              style={{
                backgroundImage: `url(${item.src})`,
              }}
              className="flex flex-col justify-end items-center w-3/7 md:w-2/7 lg:grayscale hover:grayscale-0 bg-center bg-cover bg-no-repeat box-border overflow-hidden rounded transition ease-all delay-150"
            >
              {/* <img */}
              {/*   className="grayscale hover:grayscale-0 transition ease-all delay-150 w-full aspect-video" */}
              {/*   alt={item.name} */}
              {/*   src={item.src} */}
              {/* /> */}
              <span
                onClick={() => {
                  const w = window.open(item.link);
                  if (w) w.focus();
                }}
                className="flex flex-col select-none cursor-pointer hover:underline justify-center items-center text-white bg-black/50 mt-[-30px] px-2 backdrop-blur box-border"
              >
                <h1 className="text-base lg:text-3xl">{item.name}</h1>
                <h3>{item.description}</h3>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
