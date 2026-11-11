import type { downloadInterface } from "@/interface"
import { get } from "@/lib/api"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  FileQuestion,
  FileText,
  Globe,
  Loader2,
  PackageOpen,
  RefreshCw
} from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router"

const LIMIT = 6

type Status = "loading" | "success" | "empty" | "error"

type Result = {
  key: string
  status: Exclude<Status, "loading">
  data: downloadInterface[]
  pages: number
  count: number
  error: string
}

function safeLink(link?: string): URL | null {
  if (!link) return null
  try {
    const url = new URL(link)
    return url.protocol === "http:" || url.protocol === "https:" ? url : null
  } catch {
    return null
  }
}

function fileInfo(link?: string) {
  const url = safeLink(link)
  if (!url) return null

  const parts = url.pathname.split("/").filter(Boolean)
  const raw = parts.length > 0 ? parts[parts.length - 1] : ""
  let file = raw
  try {
    file = decodeURIComponent(raw)
  } catch {
    file = raw
  }

  const extension = file.includes(".") ? file.split(".").pop()?.toUpperCase() ?? "" : ""

  return {
    host: url.hostname.replace(/^www\./, ""),
    type: extension || "LINK"
  }
}

export default function DownloadLists() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Math.max(1, parseInt(searchParams.get("p") ?? "1") || 1)
  const [result, setResult] = useState<Result | null>(null)
  const [retry, setRetry] = useState(0)
  const key = `${page}:${retry}`

  const status: Status = result?.key === key ? result.status : "loading"
  const data = status === "success" ? result?.data ?? [] : []
  const pages = status === "success" ? result?.pages ?? 0 : 0
  const count = status === "success" ? result?.count ?? 0 : 0
  const error = status === "error" ? result?.error ?? "" : ""

  useEffect(() => {
    let active = true
    const current = `${page}:${retry}`

    get("dl-lists", {
      page: page,
      limit: LIMIT
    }).then((api) => {
      if (!active) return

      if (api.error) {
        setResult({
          key: current,
          status: "error",
          data: [],
          pages: 0,
          count: 0,
          error: api.error
        })
        return
      }

      if (api.data) {
        const list = Array.isArray(api.data) ? api.data : [api.data]
        setResult({
          key: current,
          status: list.length > 0 ? "success" : "empty",
          data: list as downloadInterface[],
          pages: typeof api.pages === "number" ? api.pages : 1,
          count: typeof api.count === "number" ? api.count : list.length,
          error: ""
        })
        return
      }

      setResult({
        key: current,
        status: "empty",
        data: [],
        pages: 0,
        count: 0,
        error: ""
      })
    })

    return () => {
      active = false
    }
  }, [page, retry])

  function setPage(next: number) {
    if (next < 1 || (pages > 0 && next > pages)) return
    setSearchParams(next > 1 ? { p: String(next) } : {})
  }

  return (
    <div className="flex h-full w-full flex-col overflow-y-auto p-3 sm:p-5">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 self-start rounded-md px-2 py-1 text-sm text-fg/60 transition-colors hover:bg-input hover:text-fg">
          <ArrowLeft className="size-4" />
          Back to home
        </button>

        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-input">
            <PackageOpen className="size-6" />
          </span>
          <div className="min-w-0">
            <h1 className="silk text-xl leading-tight md:text-2xl">Downloads</h1>
            <p className="text-sm text-fg/60">
              {
                status === "success" && count > 0 ?
                  `${count} file${count === 1 ? "" : "s"} available`
                  : "Shared files and downloads"
              }
            </p>
          </div>
        </div>

        {
          status === "loading" ?
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-fg/10 bg-card py-16 text-fg/60">
              <Loader2 className="size-6 animate-spin" />
              <span className="text-sm">Loading downloads...</span>
            </div>
            : status === "error" ?
              <div className="flex flex-col gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
                <span className="flex items-center gap-2 font-medium">
                  <FileQuestion className="size-4" />
                  Unable to load downloads.
                </span>
                <span className="text-red-500/80">{error}</span>
                <button
                  type="button"
                  onClick={() => setRetry((prev) => prev + 1)}
                  className="flex w-fit items-center gap-2 rounded-md bg-red-500 px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90">
                  <RefreshCw className="size-3.5" />
                  Try again
                </button>
              </div>
              : status === "empty" ?
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-fg/10 bg-card py-16 text-center">
                  <FileQuestion className="size-10 text-fg/40" />
                  <span className="silk text-2xl">404<span className="mx-1 font-bold">|</span>Not Found</span>
                  <span className="text-sm text-fg/60">No downloads have been shared yet.</span>
                </div>
                : <div className="flex flex-col gap-3">
                  {
                    data.map((item) => {
                      const meta = fileInfo(item.downloadLink)

                      return (
                        <button
                          type="button"
                          key={item.id ?? item.name}
                          onClick={() => item.id && navigate(`/download/${item.id}`)}
                          className="flex items-center gap-3 rounded-xl border border-fg/10 bg-card p-4 text-left transition-colors hover:bg-input/50">
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-input">
                            <FileText className="size-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <span className="silk block truncate text-base leading-tight">{item.name}</span>
                            <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.75rem] text-fg/60">
                              {
                                meta ?
                                  <>
                                    <span className="rounded bg-input px-1.5 py-0.5 font-medium">{meta.type}</span>
                                    <span className="flex items-center gap-1">
                                      <Globe className="size-3" />
                                      {meta.host}
                                    </span>
                                  </>
                                  : <span>Shared file</span>
                              }
                            </p>
                          </div>
                          <ChevronRight className="size-4 shrink-0 text-fg/40" />
                        </button>
                      )
                    })
                  }
                  {
                    pages > 1 ?
                      <div className="flex flex-wrap items-center justify-center gap-1 pt-1">
                        <button
                          type="button"
                          onClick={() => setPage(page - 1)}
                          disabled={page <= 1}
                          className="flex items-center justify-center rounded-md border border-fg/10 bg-card p-2 transition-colors hover:bg-input disabled:cursor-not-allowed disabled:opacity-40">
                          <ChevronLeft className="size-4" />
                        </button>
                        {
                          Array.from({ length: pages }).map((_, i) => (
                            <button
                              type="button"
                              key={i + 1}
                              onClick={() => setPage(i + 1)}
                              className={
                                page === i + 1 ?
                                  "min-w-8 rounded-md bg-fg px-2 py-1.5 text-sm font-medium text-bg"
                                  : "min-w-8 rounded-md border border-fg/10 bg-card px-2 py-1.5 text-sm text-fg/70 transition-colors hover:bg-input"
                              }>
                              {i + 1}
                            </button>
                          ))
                        }
                        <button
                          type="button"
                          onClick={() => setPage(page + 1)}
                          disabled={page >= pages}
                          className="flex items-center justify-center rounded-md border border-fg/10 bg-card p-2 transition-colors hover:bg-input disabled:cursor-not-allowed disabled:opacity-40">
                          <ChevronRight className="size-4" />
                        </button>
                      </div>
                      : null
                  }
                </div>
        }
      </div>
    </div>
  )
}
