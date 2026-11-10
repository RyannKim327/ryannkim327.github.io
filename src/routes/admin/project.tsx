import { adminPost } from "@/lib/api"
import { session } from "@/lib/storage"
import { FileText, FolderKanban, Image, Link2, Loader2, Plus } from "lucide-react"
import React, { useState } from "react"
import { toast } from "react-toastify"

export default function AdminProject() {
  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
  const [link, setLink] = useState("")
  const [sending, setSending] = useState(false)

  async function createProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    setSending(true)
    const access = await adminPost("project/submit", session("admin") as string, {
      name: title.trim(),
      img: imageUrl.trim(),
      category: tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      link: link.trim(),
      description: description.trim()
    })
    setSending(false)

    if (access.error) {
      toast.error(access.error, {
        position: "bottom-right"
      })
      return
    }

    toast.success("Project published successfully!", {
      position: "bottom-right"
    })
    setTitle("")
    setImageUrl("")
    setDescription("")
    setTags("")
    setLink("")
  }

  return (
    <div className="flex w-full flex-col gap-4 items-center">
      <div className="flex items-center gap-3 self-start">
        <span className="flex size-10 items-center justify-center rounded-lg bg-input">
          <FolderKanban className="size-5" />
        </span>
        <div>
          <h1 className="silk text-2xl leading-tight">Upload Project</h1>
          <p className="text-sm text-fg/60">Add details about your project before publishing.</p>
        </div>
      </div>

      <form
        onSubmit={createProject}
        autoComplete="off"
        className="flex w-full max-w-2xl flex-col gap-4 rounded-xl border border-fg/10 bg-card p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <span className="flex flex-col md:col-span-2">
            <label htmlFor="name" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <FolderKanban className="size-3.5" />
              Project Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              placeholder="e.g. Portfolio Redefine"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>

          <span className="flex flex-col">
            <label htmlFor="image" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <Image className="size-3.5" />
              Cover Image
            </label>
            <input
              id="image"
              type="text"
              value={imageUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)}
              placeholder="Image URL or file ID"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>

          <span className="flex flex-col">
            <label htmlFor="link" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <Link2 className="size-3.5" />
              Project Link
            </label>
            <input
              id="link"
              type="url"
              value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value)}
              placeholder="https://github.com/..."
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>

          <span className="flex flex-col md:col-span-2">
            <label htmlFor="tags" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <FileText className="size-3.5" />
              Tags
            </label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
              placeholder="React, TypeScript, Vite"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
            <span className="px-1 pt-1 text-[0.7rem] text-fg/40">Separate tags with commas</span>
          </span>

          <span className="flex flex-col md:col-span-2">
            <label htmlFor="description" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <FileText className="size-3.5" />
              Description
            </label>
            <textarea
              id="description"
              rows={6}
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
              placeholder="Describe your project."
              className="resize-y rounded-md bg-input p-2 text-sm leading-relaxed outline-none ring-fg/20 focus:ring-2" />
          </span>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-1 flex items-center justify-center gap-2 rounded-md bg-fg px-3 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60">
          {sending ? <Loader2 className="size-4 animate-spin" /> : <Plus className="size-4" />}
          {sending ? "Publishing..." : "Publish Project"}
        </button>
      </form>
    </div>
  )
}
