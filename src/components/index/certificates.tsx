import Title from "@/components/widgets/title";
import type { certsInterface, IndexProps } from "@/interface";
import { retrieval } from "@/utils/api";

export default function Certificates({ data }: { data: certsInterface[] }) {

  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title id="certificates">Some Certificates</Title>
      <div className="flex flex-wrap justify-center lg:justify-start w-full gap-2 p-3 py-5">
        {
          data.map((c: certsInterface, i: number) => {
            return (
              <div
                className="relative w-[calc(90%-0.5rem)] lg:w-[calc(33.333%-0.5rem)] aspect-video group"
                key={`${i + 1}. ${c.source}`}>
                <img
                  className="absolute object-cover inset-0 h-full w-full"
                  src={c.url.startsWith("http")
                    ? c.url
                    : retrieval("retrieve", { file: c.url ?? "" })} />
                <span
                  onClick={() => {
                    c.link ? window.open(c.link, "_blank") : c.url
                  }}
                  className="absolute select-none cursor-pointer opacity-0 group-hover:opacity-100 bottom-0 p-3 z-10 w-full bg-bg/75 transition-all delay-75">
                  {c.source} [{c.category}]
                </span>
              </div>
            )
          })
        }
        <button className="w-full p-3 silk card">See more</button>
      </div>
    </div>
  )
}
