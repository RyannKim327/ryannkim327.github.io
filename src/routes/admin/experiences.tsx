import type { experiencesInterface } from "@/interface"
import { get } from "@/utils/api"
import { use } from "react"

const getExperience = get("experiences")

export default function AdminExperiences() {
  const experiences = use(getExperience) as { data: experiencesInterface[] }

  return (
    <div className="flex flex-col min-h-full gap-2">
      {
        experiences.data.length > 0 ?
          experiences.data.reverse().map((exp: experiencesInterface, i: number) => {
            return (
              <div
                key={`${i}. ${exp.title}`}
                className="bg-card rounded p-2 w-full">
                <span>{exp.title} [{exp.year}]</span>
                <ul className="px-2">
                  {
                    exp.content.length > 0 ?
                      exp.content.map((content: string, j: number) => {
                        return (
                          <li
                            className="flex items-center gap-2"
                            key={`${j}`}>
                            <span className="text-[0.75rem]">&gt;</span> {content}
                          </li>
                        )
                      })
                      : null}
                </ul>
              </div>
            )
          })
          : <div>No Experience here</div>
      }
    </div>
  )
}
