import Title from "@/components/widgets/title";
import type { certsInterface } from "@/interface";
import { retrieval } from "@/utils/api";
import { useState } from "react";
import Modal from "@/components/widgets/modal";

export default function Certificates({ data }: { data: certsInterface[] }) {
  const [visible, setVisible] = useState(false)
  const [certificate, setCertificate] = useState<certsInterface | null>(null)

  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title id="certificates">Some Certificates</Title>
      <div className="flex flex-wrap justify-center w-full gap-2 p-3 py-5">
        {
          data.map((c: certsInterface, i: number) => {
            return (
              <div
                onClick={() => {
                  setVisible(true)
                  setCertificate(c)
                }}
                className="relative w-[calc(90%-0.5rem)] lg:w-[calc(33.333%-0.5rem)] aspect-video group"
                key={`${i + 1}. ${c.source}`}>
                <img
                  className="absolute object-cover inset-0 h-full w-full"
                  src={c.url.startsWith("http")
                    ? c.url
                    : retrieval("retrieve", { file: c.url ?? "" })} />
                <span
                  onClick={() => {
                    const target = c.link || (c.url.startsWith("http") ? c.url : retrieval("retrieve", { file: c.url }));
                    if (target) window.open(target, "_blank");
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

      <Modal
        visible={visible}
        className="flex flex-col relative rounded-md w-2/3 aspect-video overflow-hidden"
        setVisible={setVisible}>
        {certificate ?
          <>
            <img
              className="inset-0 w-full h-full object-cover"
              src={certificate.url.startsWith("http") ? certificate.url : retrieval("/retrieve", { file: certificate.url })}
              alt={certificate.source} />

            <div
              onClick={() => {
                {
                  certificate.link ?
                    window.open(certificate.link, "_blank")
                    : null
                }
              }}
              className="flex flex-col absolute bottom-0 right-0 left-0 z-1 bg-input/75 backdrop-blur-md p-2">
              <span>{certificate.source}</span>
              <span>{certificate.category}</span>
            </div>
          </>
          : null
        }
      </Modal>
    </div >
  )
}
