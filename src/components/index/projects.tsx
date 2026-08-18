import type { IndexProps, projectInterface, projectsInterface } from "@/interface";
import Title from "../widgets/title";
import { useEffect, useState } from "react";
import { retrieval } from "@/utils/api";

export default function Projects({ data }: { data: projectInterface }) {

  const [lists, setLists] = useState<projectsInterface[]>(data.projects)

  useEffect(() => {
    const withImg = lists.filter((p: Record<string, any>) => p.img);
    const shuffled = [...withImg].sort(() => 0.5 - Math.random());
    setLists(shuffled
      .slice(0, 6)
      .sort((a: Record<string, any>, b: Record<string, any>) =>
        a.name.localeCompare(b.name),
      ));
  }, [])

  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title id="projects">Random Projects</Title>
      <div className="flex flex-wrap justify-center w-full gap-2 p-3 py-5">
        {
          lists.length > 0 ?
            lists.map((p: projectsInterface, i: number) => {
              return (
                <div
                  className="relative w-[calc(90%-0.5rem)] lg:w-[calc(33.333%-0.5rem)] aspect-video group overflow-hidden"
                  key={`${i + 1}. ${p.name}`}>
                  <img
                    className="absolute object-cover inset-0 h-full w-full lg:dark:grayscale-100 group-hover:grayscale-0 transition delay-75"
                    src={p.img ?
                      retrieval("retrieve", { file: p.img ?? "" }) : ""} />
                  <span
                    // onClick={() => {
                    //   p.link ? window.open(c.link, "_blank") : c.url
                    // }}
                    className="absolute select-none cursor-pointer opacity-0 group-hover:opacity-100 bottom-0 p-3 z-10 w-full bg-bg/75 transition-all delay-75">
                    {p.name}
                  </span>
                </div>
              )
            }) : null
        }
        <button className="w-full p-3 silk card">See more</button>
      </div>
    </div>
  )
}
