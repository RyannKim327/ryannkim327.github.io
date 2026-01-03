import { pages_interface } from "../utils/interfaces";
import { useEffect, useRef, useState } from "react";
import { get } from "../utils/api";

interface about_interface {
  title: string;
  year: number;
  children: string[];
  icon: string;
  even: boolean;
}

interface abt {
  title: string;
  year: number;
  icon: string;
  content: string[];
}

const Information = (props: about_interface) => {
  return (
    <div
      className={`flex w-full ${props.even ? "justify-start" : "justify-end"} items-start py-6`}
    >
      {/* Left side */}
      {props.even && (
        <div className="flex justify-end w-1/2 pr-6">
          <div className="bg-slate-900 text-white p-4 rounded-lg w-100">
            <h2 className="text-cyan-400 font-bold text-end">{props.year}</h2>
            <h3 className="text-lg font-semibold text-end">{props.title}</h3>
            <ul className="text-sm mt-2 list-disc list-inside">
              {props.children.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Timeline icon */}
      <div
        className={`${props.even ? "-translate-x-1/2" : "translate-x-1/2"} translate-y-1/2 bg-white border-2 border-slate-900 w-10 h-10 rounded-full flex items-center justify-center `}
      >
        <i className={`text-slate-900 ${props.icon}`}></i>
        {/* <FontAwesomeIcon icon={`fa-solid fa-gear`} className="text-slate-900" /> */}
      </div>

      {/* Right side */}
      {!props.even && (
        <div className="flex justify-start w-1/2 pl-6">
          <div className="bg-slate-900 text-white p-4 rounded-lg w-100">
            <h2 className="text-cyan-400 font-bold">{props.year}</h2>
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <ul className="text-sm mt-2 list-disc list-inside">
              {props.children.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default function About(props: pages_interface) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [about, setAbout] = useState<about_interface[]>([]);

  useEffect(() => {
    const current = scrollContainerRef.current;
    if (current) {
      const onWheel = (e: any) => {
        if (current) {
          e.preventDefaut();
          current.scrollLeft += e.deltaY;
        }
      };
      current.addEventListener("wheel", onWheel, { passive: false });
      return () => {
        current.removeEventListener("wheel", onWheel);
      };
    }

    (async () => {
      const experiences = await get("experiences");
      if (experiences.message) {
        setAbout(experiences.data);
      } else {
        alert(experiences.error);
      }
    })();
  }, []);

  return (
    <div
      id={props.id}
      className={`${props.className} flex flex-col w-full h-full`}
    >
      {/* <h1 className="text-base lg:text-2xl">About</h1> */}
      <div className="flex flex-col w-full h-full box-border">
        <div className="flex flex-col h-full w-full box-border">
          {about.map((item: abt, i: number) => {
            return (
              <Information
                title={item.title}
                year={item.year}
                icon={item.icon}
                even={i % 2 == 0}
              >
                {item.content}
              </Information>
            );
          })}
        </div>
      </div>
    </div>
  );
}
