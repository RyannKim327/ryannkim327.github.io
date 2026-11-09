import { MarkdownEditor } from "@/components/widgets/markdown-editor"
import { adminPost } from "@/lib/api"
import { session } from "@/lib/storage"
import { Download, FileText, Link2, Loader2, Plus } from "lucide-react"
import React, { useState } from "react"
import { toast } from "react-toastify"

export default function AdminDownload() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [downloadLink, setDownloadLink] = useState("")
  const [sending, setSending] = useState(false)

  async function createDownload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    setSending(true)
    const access = await adminPost("download/submit", session("admin") as string, {
      name: name.trim(),
      description: description.trim(),
      downloadLink: downloadLink.trim()
    })
    setSending(false)

    if (access.error) {
      toast.error(access.error, {
        position: "bottom-right"
      })
      return
    }

    toast.success("Download created successfully", {
      position: "bottom-right"
    })
    setName("")
    setDescription("")
    setDownloadLink("")
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex items-center gap-3 self-start">
        <span className="flex size-10 items-center justify-center rounded-lg bg-input">
          <Download className="size-5" />
        </span>
        <div>
          <h1 className="silk text-2xl leading-tight">Download</h1>
          <p className="text-sm text-fg/60">Add a new file to your download page.</p>
        </div>
      </div>

      <form
        onSubmit={createDownload}
        autoComplete="off"
        className="flex w-full max-w-2xl flex-col gap-4 rounded-xl border border-fg/10 bg-card p-4 md:p-6">
        <span className="flex flex-col">
          <label htmlFor="name" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
            <FileText className="size-3.5" />
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            placeholder="e.g. Notebook"
            className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
        </span>

        <span className="flex flex-col">
          <label htmlFor="description" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
            <FileText className="size-3.5" />
            Description
          </label>
          <MarkdownEditor
            id="description"
            value={description}
            onChange={setDescription}
            placeholder="Describe the file. Markdown is supported."
            rows={6} />
        </span>

        <span className="flex flex-col">
          <label htmlFor="downloadLink" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
            <Link2 className="size-3.5" />
            Download Link
          </label>
          <input
            id="downloadLink"
            type="url"
            required
            value={downloadLink}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDownloadLink(e.target.value)}
            placeholder="https://example.com/file.zip"
            className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
        </span>

        <button
          type="submit"
          disabled={sending}
          className="mt-1 flex items-center justify-center gap-2 rounded-md bg-fg px-3 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60">
          {sending ? <Loader2 className="size-4 animate-spin" /> : <Plus className="size-4" />}
          {sending ? "Creating..." : "Create Download"}
        </button>
      </form>
    </div>
  )
}
