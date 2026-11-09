import { adminPostMultipart } from "@/lib/api"
import { session } from "@/lib/storage"
import { FileUp, Loader2, Upload } from "lucide-react"
import React, { useState } from "react"
import { toast } from "react-toastify"

interface TelegramFile {
  file_id: string
}

interface UploadResult {
  video?: TelegramFile
  document?: TelegramFile
  photo?: TelegramFile[]
}

interface UploadResponse {
  error?: string
  from?: {
    description?: string
    result?: UploadResult
  }
}

export default function AdminUpload() {
  const [fileCode, setFileCode] = useState("")
  const [file, setFile] = useState<FileList | null>(null)
  const [sending, setSending] = useState(false)

  async function uploadFile(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    if (!file || file.length === 0) {
      toast.error("No file selected", {
        position: "bottom-right"
      })
      return
    }

    const formData = new FormData()
    formData.append("file", file[0] as Blob)

    setSending(true)
    const res = await adminPostMultipart(
      "upload/submit",
      session("admin") as string,
      formData
    ) as UploadResponse
    setSending(false)

    if (res.error) {
      toast.error(res.error, {
        position: "bottom-right"
      })
      return
    }

    if (res.from?.description) {
      toast.error(res.from.description, {
        position: "bottom-right"
      })
      return
    }

    const result = res.from?.result
    if (!result) {
      toast.error("Upload failed", {
        position: "bottom-right"
      })
      return
    }

    if (result.video) {
      setFileCode(result.video.file_id)
    } else if (result.document) {
      setFileCode(result.document.file_id)
    } else if (result.photo && result.photo.length > 0) {
      setFileCode(result.photo[result.photo.length - 1].file_id)
    } else {
      toast.error("Upload failed", {
        position: "bottom-right"
      })
      return
    }

    toast.success("File uploaded successfully", {
      position: "bottom-right"
    })
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex items-center gap-3 self-start">
        <span className="flex size-10 items-center justify-center rounded-lg bg-input">
          <Upload className="size-5" />
        </span>
        <div>
          <h1 className="silk text-2xl leading-tight">Upload File</h1>
          <p className="text-sm text-fg/60">Securely upload and manage your files.</p>
        </div>
      </div>

      <form
        onSubmit={uploadFile}
        autoComplete="off"
        className="flex w-full max-w-2xl flex-col gap-4 rounded-xl border border-fg/10 bg-card p-4 md:p-6">
        <span className="flex flex-col">
          <label htmlFor="file_code" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
            <FileUp className="size-3.5" />
            File Code
          </label>
          <input
            id="file_code"
            type="text"
            value={fileCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFileCode(e.target.value)}
            placeholder=""
            className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
        </span>

        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-fg/20 bg-input/50 p-8 transition hover:border-fg/40">
          <div className="text-center">
            <h2 className="silk text-lg">Choose a file</h2>
            <p className="text-sm text-fg/60">Drag and drop or browse from your device</p>
          </div>

          <input
            id="file"
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e.target.files)}
            className="w-full cursor-pointer rounded-xl border border-fg/20 bg-input p-2 text-sm text-fg/70 file:mr-4 file:rounded-lg file:border-0 file:bg-fg file:px-4 file:py-2 file:text-bg hover:file:opacity-90" />

          {file && file.length > 0 ?
            <div className="w-full rounded-xl border border-fg/10 bg-card px-4 py-3 text-sm text-fg/70">
              Selected File:{" "}
              <span className="font-medium text-fg">
                {file[0].name}
              </span>
            </div>
            : null}
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-1 flex items-center justify-center gap-2 rounded-md bg-fg px-3 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60">
          {sending ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />}
          {sending ? "Uploading..." : "Upload File"}
        </button>
      </form>
    </div>
  )
}
