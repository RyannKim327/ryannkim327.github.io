import { adminPost } from "@/lib/api"
import { session } from "@/lib/storage"
import { Award, FileText, Link2, Loader2, Plus } from "lucide-react"
import React, { useState } from "react"
import { toast } from "react-toastify"

export default function AdminCertificates() {
  const [source, setSource] = useState("")
  const [url, setUrl] = useState("")
  const [category, setCategory] = useState("")
  const [link, setLink] = useState("")
  const [sending, setSending] = useState(false)

  async function createCertificate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    setSending(true)
    const access = await adminPost("certs/submit", session("admin") as string, {
      source: source.trim(),
      url: url.trim(),
      category: category.trim(),
      link: link.trim()
    })
    setSending(false)

    if (access.error) {
      toast.error(access.error, {
        position: "bottom-right"
      })
      return
    }

    toast.success("Certificate published successfully!", {
      position: "bottom-right"
    })
    setSource("")
    setUrl("")
    setCategory("")
    setLink("")
  }

  return (
    <div className="flex w-full flex-col gap-4 items-center">
      <div className="flex items-center gap-3 self-start">
        <span className="flex size-10 items-center justify-center rounded-lg bg-input">
          <Award className="size-5" />
        </span>
        <div>
          <h1 className="silk text-2xl leading-tight">Upload Certificate</h1>
          <p className="text-sm text-fg/60">Add another milestone in your journey.</p>
        </div>
      </div>

      <form
        onSubmit={createCertificate}
        autoComplete="off"
        className="flex w-full max-w-2xl flex-col gap-4 rounded-xl border border-fg/10 bg-card p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <span className="flex flex-col md:col-span-2">
            <label htmlFor="source" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <FileText className="size-3.5" />
              Source
            </label>
            <input
              id="source"
              type="text"
              required
              value={source}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSource(e.target.value)}
              placeholder="e.g. Cisco Networking Academy"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>

          <span className="flex flex-col">
            <label htmlFor="url" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <Link2 className="size-3.5" />
              Certificate URL
            </label>
            <input
              id="url"
              type="text"
              required
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
              placeholder="Image URL or file ID"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>

          <span className="flex flex-col">
            <label htmlFor="category" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <FileText className="size-3.5" />
              Category
            </label>
            <input
              id="category"
              type="text"
              required
              value={category}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}
              placeholder="e.g. Cyber Security"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>

          <span className="flex flex-col md:col-span-2">
            <label htmlFor="link" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <Link2 className="size-3.5" />
              Certification Link
            </label>
            <input
              id="link"
              type="url"
              value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value)}
              placeholder="https://www.credly.com/badges/..."
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-1 flex items-center justify-center gap-2 rounded-md bg-fg px-3 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60">
          {sending ? <Loader2 className="size-4 animate-spin" /> : <Plus className="size-4" />}
          {sending ? "Publishing..." : "Publish Certificate"}
        </button>
      </form>
    </div>
  )
}
