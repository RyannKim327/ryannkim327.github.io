import { pages_interface, projects } from "../utils/interfaces";
import { get, retrieval } from "../utils/api";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Projects(props: pages_interface) {
  const [categories, setCategories] = useState<string[]>([]);
  const [listProjects, setListProjects] = useState<projects[]>([]);
  const [projects, setProjects] = useState<projects[]>([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    (async () => {
      const api = await get("projects");
      if (api.error) {
        return toast(api.error);
      }
      setCategories(["all", ...api.data.categories]);
      const programs = api.data.projects.sort((a: projects, b: projects) =>
        a.name.localeCompare(b.name),
      );
      setListProjects(programs);
      if (category && category !== "all") {
        setProjects(
          programs.filter((program: projects) =>
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
      className={`flex flex-col ${props.className} gap-1 w-full h-full p-3 md:p-10`}
    >
      <h1 className="text-base lg:text-2xl">
        {category[0].toUpperCase() + category.substring(1).toLowerCase()}{" "}
        Projects
      </h1>
      <div className="flex w-full gap-2 box-border overflow-x-auto overflow-y-hidden p-2">
        {categories.map((category_) => {
          return (
            <span
              onClick={() => {
                setCategory(category_.toLowerCase());
              }}
              className={`flex items-center justify-center ${category_ === category ? "bg-transparent border border-solid border-taupe-900" : "border border-solid border-transparent bg-taupe-300"} w-full text-center select-none px-2 py-1 rounded-md cursor-pointer`}
            >
              {category_[0].toUpperCase() + category_.substring(1)}
            </span>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center gap-2 w-full h-full box-border overflow-y-auto">
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
                    backgroundImage: `url(${item.img ? retrieval("retrieve", { file: item.img }) : ""})`,
                  }}
                  className={`flex flex-col justify-end w-full md:w-[calc(25%-0.5rem)] aspect-video bg-taupe-600 text-taupe-100 border border-taupe-600 border-solid md:grayscale hover:grayscale-0 bg-center bg-cover bg-no-repeat box-border overflow-hidden rounded transition ease-all delay-150`}
                >
                  <span className="flex flex-col bg-taupe-100/50 text-taupe-900 select-none cursor-pointer hover:underlinei justify-center items-center box-border">
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
          <div className="flex flex-col h-full w-full items-center text-center justify-center gap-3">
            <p className="text-[2rem]">Please wait for a moment</p>
            <p className="text-[1.25rem]">Backend is currently loading</p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div >
  );
}
