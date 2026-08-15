import { get } from "@/utils/api"
import { use } from "react"
import Title from "../widgets/title"

const getExp = get("experiences")

export default function Experiences() {
  const experiences = use(getExp) as Record<string, any>

  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title>Experiences</Title>
      <div className="flex flex-col w-full gap-2">
        {
          experiences.data.reverse().map((d, i: number) => {
            return (
              <div
                key={`${i + 1}.${d.title}`}
                className="flex flex-col gap-2">
                <span className="flex flex-row items-center sticky left-0 right-0 top-15 p-5 bg-bg">{d.title} - {d.year}</span>
                <ul className="mx-4 p-4 card">
                  {
                    d.content.map((c, j: number) => {
                      return (
                        <li
                          key={`${i + 1}. ${c}`}
                          className="flex items-center gap-1">
                          <span className="font-mono text-[0.6rem]">&lt;li&gt;</span>
                          {c}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
