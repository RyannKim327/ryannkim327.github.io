import { MarkdownEditor } from "@/components/widgets/markdown-editor"
import { adminPost } from "@/lib/api"
import { session } from "@/lib/storage"
import { BookOpen, FileText, Loader2, Plus } from "lucide-react"
import React, { useState } from "react"
import { toast } from "react-toastify"

export default function AdminBlog() {
  const [title, setTitle] = useState("")
  const [tags, setTags] = useState("")
  const [media, setMedia] = useState("")
  const [content, setContent] = useState("")
  const [sending, setSending] = useState(false)

  async function createBlog(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    if (!title.trim() || !content.trim()) {
      toast.error("Title and Content are required", {
        position: "bottom-right"
      })
      return
    }

    setSending(true)
    const access = await adminPost("blog", session("admin") as string, {
      title: title.trim(),
      content,
      tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      media: media.trim()
    })
    setSending(false)

    if (access.error) {
      toast.error(access.error, {
        position: "bottom-right"
      })
      return
    }

    toast.success("Blog posted successfully!", {
      position: "bottom-right"
    })
    setTitle("")
    setTags("")
    setMedia("")
    setContent("")
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-input">
          <BookOpen className="size-5" />
        </span>
        <div>
          <h1 className="silk text-2xl leading-tight">Create Blog Post</h1>
          <p className="text-sm text-fg/60">Write markdown content with live preview.</p>
        </div>
      </div>

      <form
        onSubmit={createBlog}
        autoComplete="off"
        className="flex w-full max-w-5xl flex-col gap-4 rounded-xl border border-fg/10 bg-card p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <span className="flex flex-col">
            <label htmlFor="title" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <FileText className="size-3.5" />
              Title
            </label>
            <input
              id="title"
              type="text"
              required
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              placeholder="e.g. Building my portfolio"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>

          <span className="flex flex-col">
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
            <label htmlFor="media" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <FileText className="size-3.5" />
              Media Files
            </label>
            <input
              id="media"
              type="text"
              value={media}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMedia(e.target.value)}
              placeholder="Optional media file or link"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>
        </div>

        <span className="flex flex-col">
          <label className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
            <FileText className="size-3.5" />
            Content
          </label>
          <MarkdownEditor
            id="content"
            value={content}
            onChange={setContent}
            placeholder="Write your blog content here..."
            rows={14} />
        </span>

        <button
          type="submit"
          disabled={sending}
          className="mt-1 flex items-center justify-center gap-2 rounded-md bg-fg px-3 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60">
          {sending ? <Loader2 className="size-4 animate-spin" /> : <Plus className="size-4" />}
          {sending ? "Posting..." : "Post Blog"}
        </button>
      </form>
    </div>
  )
}
