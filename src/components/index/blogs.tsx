import type { blogInterface } from "@/interface";
import Title from "@/components/widgets/title";
import { Markdown, MarkdownExcerpt } from "../widgets/markdown";
import { useState } from "react";
import Modal from "../widgets/modal";

export default function Blogs({ data }: {
  data: blogInterface[]
}) {

  const [visible, setVisible] = useState(false)
  const [blog, setBlog] = useState<blogInterface | null>(null)

  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title id="blogs">Recent Blogs</Title>
      <div className="flex flex-wrap justify-center w-full gap-5 p-3 py-5">
        {
          data.map((b: blogInterface, i: number) => {
            return (
              <div
                className="flex flex-col relative group w-[calc(90%-0.5rem)] lg:w-[calc(33.333%-1rem)] card p-3 aspect-video gap-3 overflow-hidden"
                key={`${i + 1}. ${b.title}`}>
                <span className="text-[1.25rem]">{b.title.substring(0, 70)} {b.title.length > 70 ? "..." : ""}</span>
                <MarkdownExcerpt
                  // onClick={() => {
                  //   c.link ? window.open(c.link, "_blank") : c.url
                  // }}
                  content={`${b.content}`} />
                <button
                  onClick={() => {
                    setVisible(true)
                    setBlog(b)
                  }}
                  className="absolute silk cursor-pointer bg-linear-to-b from-bg-75 to-bg p-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 bottom-0 right-0 left-0 z-10 transition-all delay-75">View</button>
              </div>
            )
          })
        }
        <button className="w-full p-3 silk card">See more</button>
      </div>
      {
        blog ?
          <Modal visible={visible} setVisible={setVisible}>
            <div className="flex flex-col p-3 flex-1 overflow-hidden">
              <span className="silk pb-2 text-center text-lg w-full border-b border-b-fg border-b-solid">{blog.title}</span>
              <Markdown
                className="flex-1 overflow-y-auto p-5"
                content={blog.content} />
            </div>
          </Modal>
          : null
      }
    </div>
  )
}
