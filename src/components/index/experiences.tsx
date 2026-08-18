import type { experiencesInterface } from "@/interface"
import Title from "../widgets/title"

export default function Experiences({ data }: {
  data: experiencesInterface[]
}) {

  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title id="experiences">Experiences</Title>
      <div className="flex flex-col w-full gap-2 py-5">
        {
          data.reverse().map((d: experiencesInterface, i: number) => {
            return (
              <div
                key={`${i + 1}.${d.title}`}
                className="flex flex-col gap-2">
                <span className="flex flex-row items-center sticky left-0 right-0 top-15 lg:top-18 p-5 bg-bg">{d.title} - {d.year}</span>
                <ul className="mx-15 p-4 card">
                  {
                    d.content.map((c: string) => {
                      return (
                        <li
                          key={`${i + 1}. ${c}`}
                          className="flex items-start gap-2">
                          <span className="font-mono py-1.5 text-[0.6rem]">&gt;</span>
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
