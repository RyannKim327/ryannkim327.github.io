import type { blogInterface, IndexProps } from "@/interface";
import Title from "@/components/widgets/title";

export default function Blogs({ data }: {
  data: blogInterface[]
}) {

  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title id="blogs">Recent Blogs</Title>
      <div className="flex flex-wrap justify-center w-full gap-5 p-3 py-5">
        {
          data.map((b: blogInterface, i: number) => {
            return (
              <div
                className="flex flex-col w-[calc(90%-0.5rem)] lg:w-[calc(33.333%-1rem)] card p-3 aspect-video gap-3"
                key={`${i + 1}. ${b.title}`}>
                <span className="text-[1.25rem]">{b.title.substring(0, 70)} {b.title.length > 70 ? "..." : ""}</span>
                <span
                  // onClick={() => {
                  //   c.link ? window.open(c.link, "_blank") : c.url
                  // }}
                  className="text-justify select-none">
                  {b.content.substring(0, 150)} {b.content.length > 150 ? "..." : ""}
                </span>
              </div>
            )
          })
        }
        <button className="w-full p-3 silk card">See more</button>
      </div>
    </div >
  )
}
