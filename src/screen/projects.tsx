import { pages_interface, projects } from "../utils/interfaces";
import { get } from "../utils/api";
import { useEffect, useState } from "react";

export default function Projects(props: pages_interface) {
  const [categories, setCategories] = useState<string[]>([]);
  const [listProjects, setListProjects] = useState<projects[]>([]);
  const [projects, setProjects] = useState<projects[]>([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    (async () => {
      const api = await get("projects");
      setCategories(["all", ...api.categories]);
      const programs = api.projects.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      setListProjects(programs);
      if (category && category !== "all") {
        setProjects(
          programs.filter((program) =>
            program.category.includes(category.toLowerCase()),
          ),
        );
      } else {
        setProjects(programs);
      }
    })();
  }, []);

  useEffect(() => {
    if (category && category !== "all") {
      setProjects(
        listProjects.filter((project) =>
          project.category.includes(category.toLowerCase()),
        ),
      );
    } else {
      setProjects(listProjects);
    }
  }, [category]);

  return (
    <div
      id={props.id}
      className={`flex flex-col ${props.className} gap-1 w-full h-full`}
    >
      <h1 className="text-base lg:text-2xl">
        {category[0].toUpperCase() + category.substring(1).toLowerCase()}{" "}
        Projects
      </h1>
      <div className="flex w-full gap-2 box-border overflow-x-auto">
        {categories.map((category_) => {
          return (
            <span
              onClick={() => {
                setCategory(category_.toLowerCase());
              }}
              className={`${category_ === category ? "bg-transparent border border-solid border-slate-200" : "border border-solid border-transparent bg-slate-700"} w-full text-center select-none px-2 rounded-md cursor-pointer`}
            >
              {category_[0].toUpperCase() + category_.substring(1)}
            </span>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full h-full box-border overflow-y-auto pb-4">
        {listProjects.length > 0 ? (
          projects.length <= 0 ? (
            <p>
              No Projects included with "
              {category[0].toUpperCase() + category.substring(1).toLowerCase()}"
              yet.
            </p>
          ) : (
            projects.map((item) => {
              return (
                <div
                  onClick={() => {
                    const w = window.open(item.link);
                    if (w) w.focus();
                  }}
                  style={{
                    backgroundImage: `url(${item.src ?? ""})`,
                  }}
                  className={`flex flex-col justify-end h-1/3 w-3/7 md:w-2/7 bg-slate-900 text-white p-2 lg:grayscale hover:grayscale-0 bg-center bg-cover bg-no-repeat box-border overflow-hidden rounded transition ease-all delay-150`}
                >
                  {/* <img */}
                  {/*   className="grayscale hover:grayscale-0 transition ease-all delay-150 w-full aspect-video" */}
                  {/*   alt={item.name} */}
                  {/*   src={item.src} */}
                  {/* /> */}
                  <span className="flex flex-col bg-slate-900/50 select-none cursor-pointer hover:underline justify-center items-center box-border">
                    <h1 className="text-base md:text-xl text-center">
                      {item.name}
                    </h1>
                    <h3 className="text-xs text-center">
                      {item.description ?? "No description applied"}
                    </h3>
                  </span>
                </div>
              );
            })
          )
        ) : (
          <div className="flex flex-col h-full w-full items-center justify-center">
            <p className="text-[2rem]">Please wait for a moment</p>
            <p className="text-[1.25rem]">Backend is currently loading</p>
          </div>
        )}
      </div>
    </div>
  );
}
