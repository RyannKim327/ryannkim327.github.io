import Modal from "@/components/widgets/modal"
import type { experiencesInterface } from "@/interface"
import { get } from "@/utils/api"
import { use, useState } from "react"

const getExperience = get("experiences")

export default function AdminExperiences() {
  const experiences = use(getExperience) as { data: experiencesInterface[] }

  const [visible, setVisible] = useState(false)
  const [modify, setModify] = useState<experiencesInterface | null>(null)

  function updateExperience() {
    console.log(modify)
  }

  return (
    <div className="flex flex-col min-h-full gap-2">
      {
        experiences.data.length > 0 ?
          experiences.data.reverse().map((exp: experiencesInterface, i: number) => {
            return (
              <div
                onClick={() => {
                  setVisible(true)
                  setModify(exp)
                }}
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
      <Modal setVisible={setVisible} visible={visible} className="p-3 gap-3 rounded max-h-3/4 w-2/3 overflow-hidden">
        <div className="flex justify-center w-full">
          <span className="silk text-xl">Edit Experience information</span>
        </div>
        {
          modify ?
            <form onSubmit={updateExperience} className="flex flex-col gap-2 overflow-hidden">
              <span className="flex flex-col">
                <label
                  htmlFor="title"
                  className="px-3 text-[0.75rem]">Title</label>
                <input
                  className="bg-input p-2 rounded"
                  id="title"
                  value={modify.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setModify({
                      ...modify,
                      "title": e.target.value
                    })
                  }}
                  type="text" />
              </span>
              <span className="flex flex-col">
                <label
                  htmlFor="year"
                  className="px-3 text-[0.75rem]">Year</label>
                <input
                  className="bg-input p-2 rounded"
                  id="year"
                  value={modify.year}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setModify({
                      ...modify,
                      "year": parseInt(e.target.value)
                    })
                  }}
                  type="number" />
              </span>
              <span className="flex flex-col flex-1 overflow-hidden">
                <span
                  className="px-3 text-[0.75rem]">Contents</span>
                <div className="flex flex-col gap-2 overflow-y-auto h-full">
                  {
                    modify.content.map((c: string, k: number) => {
                      return (
                        <span
                          className="w-full flex bg-input p-2 rounded"
                          key={`${k}. ${c}`}>
                          <input
                            className="flex-1 outline-none"
                            value={c}
                            type="text" />
                          <span
                            className="cursor-pointer p-2 font-extrabold text-red-500 hover:text-red-800"
                            onClick={() => {
                              const content = modify.content.filter((_, i) => i !== k)
                              setModify({
                                ...modify,
                                "content": content
                              })
                            }}>X</span>
                        </span>
                      )
                    })
                  }
                </div>
              </span>
              <div className="flex w-full p-1 gap-3">
                <input type="button" className="flex-1 card p-1" value="Add Content" />
                <input className="flex-1 card p-1" type="submit" value="Update Experience" />
              </div>
            </form>
            : null
        }
      </Modal>
    </div>
  )
}
