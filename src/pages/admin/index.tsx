import { useEffect, useState } from "react";
import { projects } from "../../utils/interfaces";
import { get, retrieval } from "../../utils/api";

export default function Projects() {
  const [projects_, setProjects] = useState<projects[]>([]);

  useEffect(() => {
    (async () => {
      const data = await get("projects");
      const programs = data.data.projects.sort((a: projects, b: projects) =>
        a.name.localeCompare(b.name),
      );
      setProjects(programs);
    })();
  }, []);

  return (
    <div className="flex flex-col items-start h-full w-full justify-center">
      <span>Projects</span>
      <div className="flex flex-row w-full flex-wrap items-start justify-center h-full overflow-y-scroll aspect-video gap-3">
        {projects_.map((proj: projects) => {
          return (
            <div
              onClick={() => {
                const w = window.open(proj.link);
                if (w) w.focus();
              }}
              style={{
                backgroundImage: `url(${proj.img ? retrieval("retrieve", { file: proj.img }) : ""})`,
              }}
              className={`flex flex-col justify-end h-1/3 md:h-1/3 w-full md:w-2/7 text-white p-2 border border-slate-950 dark:border-slate-500 border-solid lg:grayscale hover:grayscale-0 bg-center bg-cover bg-no-repeat box-border overflow-hidden rounded transition ease-all delay-150`}
            >
              <span className="bg-slate-900/50 px-2">{proj.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
