import { Markdown } from "@/components/widgets/markdown"
import type { downloadInterface } from "@/interface"
import { get } from "@/lib/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Download() {
  const { id } = useParams()
  const [data, setData] = useState<downloadInterface | null>()

  if (!id) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="text-xl">403<span className="text-3xl font-bold">|</span>Forbidden Access</div>
      </div>
    )
  }

  useEffect(() => {
    (async () => {
      const api = await get("download", {
        id: id.toLowerCase()
      })
      if (api.data) {
        setData(api.data as downloadInterface)
        return
      }
      setData(null)
    })()
  }, [id])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-3">
      {data === null ?
        <div className="text-xl">404<span className="text-3xl font-bold">|</span>Not Found</div>
        :
        <div className="flex flex-col p-2 gap-1 max-h-1/2 min-w-1/3 md:max-w-[calc(80%-0.5rem)] items-center card">
          <span className="silk">{data?.name ?? "File Name"}</span>
          <Markdown className="self-start w-full overflow-y-auto" content={data?.description ?? ""} />
          <button onClick={() => {
            window.open(data?.downloadLink ?? "", "_blank")
          }} className="hover:underline w-full">Download</button>
        </div>
      }
    </div>
  )
}
