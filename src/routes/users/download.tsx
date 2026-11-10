import { Markdown } from "@/components/widgets/markdown"
import type { downloadInterface } from "@/interface"
import { get, post } from "@/lib/api"
import {
  ArrowLeft,
  Check,
  Copy,
  Download as DownloadIcon,
  FileQuestion,
  FileText,
  Globe,
  Loader2,
  RefreshCw,
  Share2
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router"

type Status = "loading" | "success" | "empty" | "error" | "forbidden"

type Result = {
  key: string
  status: Exclude<Status, "loading" | "forbidden">
  data: downloadInterface | null
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
    file: file || url.hostname,
    host: url.hostname.replace(/^www\./, ""),
    type: extension || "LINK"
  }
}

async function copyText(value: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value)
      return true
    }

    const area = document.createElement("textarea")
    area.value = value
    area.style.position = "fixed"
    area.style.opacity = "0"
    document.body.appendChild(area)
    area.select()
    const copied = document.execCommand("copy")
    document.body.removeChild(area)
    return copied
  } catch {
    return false
  }
}

export default function Download() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [result, setResult] = useState<Result | null>(null)
  const [retry, setRetry] = useState(0)
  const [copied, setCopied] = useState<"link" | "page" | null>(null)
  const [opening, setOpening] = useState(false)
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const key = `${id ?? ""}:${retry}`

  const status: Status = !id
    ? "forbidden"
    : result?.key === key
      ? result.status
      : "loading"
  const data = status === "success" ? result?.data ?? null : null
  const error = status === "error" ? result?.error ?? "" : ""

  useEffect(() => {
    return () => {
      if (copiedTimer.current) clearTimeout(copiedTimer.current)
    }
  }, [])

  useEffect(() => {
    let active = true

    if (!id) {
      return () => {
        active = false
      }
    }

    const current = `${id}:${retry}`

    get("download", {
      id: id.toLowerCase()
    }).then((api) => {
      if (!active) return

      if (api.error) {
        setResult({
          key: current,
          status: "error",
          data: null,
          error: api.error
        })
        return
      }

      if (api.data) {
        setResult({
          key: current,
          status: "success",
          data: api.data as downloadInterface,
          error: ""
        })
        return
      }

      setResult({
        key: current,
        status: "empty",
        data: null,
        error: ""
      })
    })

    return () => {
      active = false
    }
  }, [id, retry])

  function markCopied(target: "link" | "page") {
    setCopied(target)
    if (copiedTimer.current) clearTimeout(copiedTimer.current)
    copiedTimer.current = setTimeout(() => setCopied(null), 2000)
  }

  async function trackDownload() {
    if (!id || opening) return
    const href = safeLink(data?.downloadLink)?.href
    if (!href) return

    setOpening(true)
    const tracked = await post("dlcounts", null, { id: id.toLowerCase() })
    setOpening(false)

    if (tracked.error) return

    setResult((prev) =>
      prev?.data
        ? {
          ...prev,
          data: {
            ...prev.data,
            downloads: (prev.data.downloads ?? 0) + 1
          }
        }
        : prev
    )

    window.open(href, "_blank", "noopener,noreferrer")
  }

  async function copyLink() {
    if (!data) return
    if (await copyText(data.downloadLink)) {
      markCopied("link")
    }
  }

  async function share() {
    if (!data) return

    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: data.name,
          text: `Download ${data.name}`,
          url
        })
        return
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return
      }
    }

    if (await copyText(url)) {
      markCopied("page")
    }
  }

  const link = safeLink(data?.downloadLink)
  const meta = fileInfo(data?.downloadLink)

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

        {
          status === "loading" ?
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-fg/10 bg-card py-16 text-fg/60">
              <Loader2 className="size-6 animate-spin" />
              <span className="text-sm">Loading download...</span>
            </div>
            : status === "error" ?
              <div className="flex flex-col gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
                <span className="flex items-center gap-2 font-medium">
                  <FileQuestion className="size-4" />
                  Unable to load this download.
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
              : !id || status === "forbidden" ?
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-fg/10 bg-card py-16 text-center">
                  <FileQuestion className="size-10 text-fg/40" />
                  <span className="silk text-2xl">403<span className="mx-1 font-bold">|</span>Forbidden Access</span>
                  <span className="text-sm text-fg/60">This download link is missing an ID.</span>
                </div>
                : status === "empty" ?
                  <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-fg/10 bg-card py-16 text-center">
                    <FileQuestion className="size-10 text-fg/40" />
                    <span className="silk text-2xl">404<span className="mx-1 font-bold">|</span>Not Found</span>
                    <span className="text-sm text-fg/60">This download does not exist or was removed.</span>
                  </div>
                  : data ?
                    <article className="overflow-hidden rounded-xl border border-fg/10 bg-card">
                      <div className="flex items-start gap-3 border-b border-fg/10 p-4 md:p-6">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-input">
                          <FileText className="size-6" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h1 className="silk break-words text-xl leading-tight md:text-2xl">{data.name}</h1>
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
                            <span className="flex items-center gap-1">
                              <DownloadIcon className="size-3" />
                              {data.downloads ?? 0} download{(data.downloads ?? 0) === 1 ? "" : "s"}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="p-4 md:p-6">
                        {
                          data.description ?
                            <Markdown
                              className="max-h-64 overflow-y-auto text-sm text-fg/80"
                              content={data.description} />
                            : <p className="text-sm text-fg/50">No description provided.</p>
                        }
                        {
                          meta ?
                            <div className="mt-4 flex items-center gap-2 rounded-md bg-input px-2 py-1.5 text-xs text-fg/60">
                              <FileText className="size-3.5 shrink-0" />
                              <span className="truncate">{meta.file}</span>
                            </div>
                            : null
                        }
                      </div>

                      <div className="flex flex-col gap-2 border-t border-fg/10 p-4 sm:flex-row md:p-6">
                        {
                          link ?
                            <button
                              type="button"
                              onClick={trackDownload}
                              disabled={opening}
                              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-fg px-3 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                              {opening ? <Loader2 className="size-4 animate-spin" /> : <DownloadIcon className="size-4" />}
                              {opening ? "Opening..." : "Download"}
                            </button>
                            : <span className="flex flex-1 items-center justify-center gap-2 rounded-md bg-input px-3 py-2 text-sm text-fg/50">
                              <DownloadIcon className="size-4" />
                              Invalid download link
                            </span>
                        }
                        <button
                          type="button"
                          onClick={copyLink}
                          disabled={!link}
                          className="flex items-center justify-center gap-2 rounded-md border border-fg/10 px-3 py-2 text-sm transition-colors hover:bg-input disabled:cursor-not-allowed disabled:opacity-50">
                          {copied === "link" ? <Check className="size-4" /> : <Copy className="size-4" />}
                          {copied === "link" ? "Copied" : "Copy link"}
                        </button>
                        <button
                          type="button"
                          onClick={share}
                          className="flex items-center justify-center gap-2 rounded-md border border-fg/10 px-3 py-2 text-sm transition-colors hover:bg-input">
                          {copied === "page" ? <Check className="size-4" /> : <Share2 className="size-4" />}
                          {copied === "page" ? "Link copied" : "Share"}
                        </button>
                      </div>
                    </article>
                    : null
        }
      </div>
    </div>
  )
}
