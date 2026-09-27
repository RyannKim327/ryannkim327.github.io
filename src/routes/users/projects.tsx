import Modal from "@/components/widgets/modal"
import type { projectInterface, projectsInterface } from "@/interface"
import { get, retrieval } from "@/utils/api"
import { ArrowLeft } from "lucide-react"
import { use, useState } from "react"
import { useNavigate } from "react-router"

const getProject = get("projects")

export default function UserProject() {
  const project = use(getProject).data as projectInterface
  const projects = project.projects.sort((a: projectsInterface, b: projectsInterface) => a.name.localeCompare(b.name)) as projectsInterface[]
  const categories = ["all", ...project.categories] as string[]
  const [search, setSearch] = useState("all")
  const [filtered, setFiltered] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<projectsInterface | null>(null)
  const [visible, setVisible] = useState(false)

  const navigation = useNavigate()

  function filterProjects(category: string) {
    setSearch(category)
    if (category === "all") {
      setFiltered(projects)
      return
    }
    setFiltered(projects.filter(p => p.category.includes(category)))
  }

  return (
    <div className="flex md:flex-col w-full h-full overflow-y-auto gap-3 md:gap-0">
      <div
        className={`flex flex-col md:flex-row w-[calc(20%-0.5rem)] md:w-full gap-2 p-3 sticky md:z-20 bg-bg top-0 md:left-0 md:right-0`}>
        <span
          onClick={() => {
            navigation("/")
          }}
          className="text-xs">
          <ArrowLeft />
        </span>
        <div className="flex flex-col md:flex-row md:gap-2 w-full justify-center">
          {
            categories.map((c: string, i: number) => {
              return (
                <span
                  className={`cursor-pointer text-xs md:text-md ${c === search ? "underline" : ""}`}
                  onClick={() => {
                    filterProjects(c.toLowerCase())
                  }}
                  key={`${i}. ${c}`}
                >{c.toUpperCase()}</span>
              )
            })
          }
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-2 p-3 py-[2rem]">
        {
          filtered.map((p: projectsInterface, i: number) => {
            return (
              <span
                onClick={() => {
                  setVisible(true)
                  setSelectedProject(p)
                }}
                className="relative w-[calc(90%-0.5rem)] md:w-[calc(33.333%-0.5rem)] aspect-video group overflow-hidden"
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
                  className="absolute select-none cursor-pointer opacity-0 group-hover:opacity-100 bottom-0 p-3 z-10 w-full bg-bg/75 transition-all delay-75">
                  {p.name}
                </span>
              </span>
            )
          })
        }
      </div>
      <Modal
        visible={visible}
        className="flex flex-col relative rounded-md w-2/3 aspect-video overflow-hidden"
        setVisible={setVisible}>

        {selectedProject ?
          <>
            {
              selectedProject.img ?
                <img
                  className="inset-0 w-full h-full object-cover"
                  src={selectedProject.img ? retrieval("/retrieve", { file: selectedProject.img }) : ""}
                  alt={selectedProject.name} />
                :
                <div className="flex items-center justify-center aspect-video w-full">
                  <p>Screenshot Soon</p>
                </div>
            }
            <div
              onClick={() => {
                selectedProject.link ? window.open(selectedProject.link, "_blank") : null
              }}
              className="flex flex-col absolute bottom-0 right-0 left-0 z-1 bg-input/50 backdrop-blur-md p-2 cursor-pointer">
              <span>{selectedProject.name}</span>
              <span>{selectedProject.description}</span>
            </div>
          </>
          : null
        }
      </Modal>
    </div>
  )
}
