import type { projectInterface, projectsInterface } from "@/interface";
import Title from "../widgets/title";
import { useEffect, useState } from "react";
import { retrieval } from "@/utils/api";
import Modal from "@/components/widgets/modal";
import { Link } from "react-router";

export default function Projects({ data }: { data: projectInterface }) {

  const [lists, setLists] = useState<projectsInterface[]>(data.projects)
  const [visible, setVisible] = useState(false)
  const [project, setProject] = useState<projectsInterface | null>(null)

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
                  onClick={() => {
                    setVisible(true)
                    setProject(p)
                  }}
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
        <Link to="/projects" className="text-center w-full p-3 silk card">See more</Link>
      </div>
      <Modal
        visible={visible}
        className="flex flex-col relative rounded-md w-2/3 aspect-video overflow-hidden"
        setVisible={setVisible}>

        {project ?
          <>
            {
              project.img ?
                <img
                  className="inset-0 w-full h-full object-cover"
                  src={project.img ? retrieval("/retrieve", { file: project.img }) : ""}
                  alt={project.name} />
                :
                <div className="flex items-center justify-center aspect-video w-full">
                  <p>Screenshot Soon</p>
                </div>
            }
            <div className="flex flex-col absolute bottom-0 right-0 left-0 z-1 bg-input/50 backdrop-blur-md p-2">
              <span>{project.name}</span>
              <span>{project.description}</span>
            </div>
          </>
          : null
        }
      </Modal>
    </div >
  )
}
