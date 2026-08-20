import type { projectInterface, projectsInterface } from "@/interface"
import { get, retrieval } from "@/utils/api"
import { use } from "react"

const getProject = get("projects")

export default function UserProject() {
  const project = use(getProject).data as projectInterface
  const projects = project.projects.sort((a: projectsInterface, b: projectsInterface) => a.name.localeCompare(b.name)) as projectsInterface[]
  const categories = ["all", ...project.categories] as string[]

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      <div
        className="flex gap-2 justify-center p-3 sticky z-20 bg-bg top-0 left-0 right-0">
        {
          categories.map((c: string, i: number) => {
            return (
              <span key={`${i}. ${c}`}>{c.toUpperCase()}</span>
            )
          })
        }
      </div>
      <div className="flex flex-wrap w-full gap-2 p-3 py-[2rem]">
        {
          projects.map((p: projectsInterface, i: number) => {
            return (
              <span
                className="relative w-[calc(90%-0.5rem)] lg:w-[calc(33.333%-0.5rem)] aspect-video group overflow-hidden"
                key={`${i + 1}. ${p.name}`}>
                {p.img ?
                  <img
                    className="absolute object-cover inset-0 h-full w-full lg:dark:grayscale-100 group-hover:grayscale-0 transition delay-75"
                    src={p.img ?
                      retrieval("retrieve", { file: p.img ?? "" }) : ""} />
                  :
                  <span
                    className="absolute flex items-center justify-center border border-solid border-fg object-cover inset-0 h-full w-full lg:dark:grayscale-100 group-hover:grayscale-0 transition delay-75"
                  >
                    No Image Attached
                  </span>
                }
                <span
                  // onClick={() => {
                  //   p.link ? window.open(c.link, "_blank") : c.url
                  // }}
                  className="absolute select-none cursor-pointer opacity-0 group-hover:opacity-100 bottom-0 p-3 z-10 w-full bg-bg/75 transition-all delay-75">
                  {p.name}
                </span>
              </span>
            )
          })
        }
      </div>
    </div>
  )
}
