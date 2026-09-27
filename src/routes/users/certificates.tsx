import Modal from "@/components/widgets/modal"
import type { certsInterface } from "@/interface"
import { get, retrieval } from "@/lib/api"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export default function UserCertifications() {
  const [visible, setVisible] = useState(false)
  const navigation = useNavigate()
  const [selectedCert, setSelectedCert] = useState<certsInterface | null>(null)
  const [currentPage] = useState(1)
  const [certis, setCertis] = useState<certsInterface[]>([])

  useEffect(() => {
    (async () => {
      const data = await get("certs", {
        page: currentPage,
        limit: 6
      })
      console.log(data)
      if (data.data) {
        setCertis(data.data as certsInterface[])
      }
    })()
  }, [currentPage])

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
      </div>
      <div className="flex flex-wrap w-full gap-2 p-3 py-[2rem]">
        {
          certis.map((c: certsInterface, i: number) => {
            return (
              <span
                onClick={() => {
                  setVisible(true)
                  setSelectedCert(c)
                }}
                className="relative w-[calc(90%-0.5rem)] md:w-[calc(33.333%-0.5rem)] aspect-video group overflow-hidden"
                key={`${i + 1}.${c.source}`}>
                <img
                  className="absolute object-cover inset-0 h-full w-full"
                  src={c.url.startsWith("http")
                    ? c.url
                    : retrieval("retrieve", { file: c.url ?? "" })} />
                <span
                  className="absolute select-none cursor-pointer opacity-0 group-hover:opacity-100 bottom-0 p-3 z-10 w-full bg-bg/75 transition-all delay-75">
                  {c.source}
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

        {selectedCert ?
          <>
            <img
              className="absolute object-fill inset-0 h-full w-full"
              src={selectedCert.url.startsWith("http")
                ? selectedCert.url
                : retrieval("retrieve", { file: selectedCert.url ?? "" })} />
            <div
              onClick={() => {
                selectedCert.url ? window.open(selectedCert.url, "_blank") : null
              }}
              className="flex flex-col absolute bottom-0 right-0 left-0 z-1 bg-input/50 backdrop-blur-md p-2 cursor-pointer">
              <span>{selectedCert.source}</span>
              <span>{selectedCert.category}</span>
            </div>
          </>
          : null
        }
      </Modal>
    </div>
  )
}
