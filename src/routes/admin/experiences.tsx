import type { experiencesInterface } from "@/interface"
import { adminPut, get } from "@/lib/api"
import { session } from "@/lib/storage"
import { AlertCircle, Briefcase, Loader2, Plus, RotateCcw, Save, X } from "lucide-react"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"

const currentYear = new Date().getFullYear()

function emptyExperience(): experiencesInterface {
  return {
    title: "",
    year: currentYear,
    icon: "",
    content: [""]
  }
}

export default function AdminExperiences() {
  const [experiences, setExperiences] = useState<experiencesInterface[]>([])
  const [form, setForm] = useState<experiencesInterface>(emptyExperience)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    let active = true
    get("experiences").then((result) => {
      if (!active) return
      if (result.error) {
        setError(result.error)
        setExperiences([])
      } else {
        setExperiences((result.data as experiencesInterface[]) ?? [])
      }
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [])

  const orderedExperiences = experiences
    .map((experience, index) => ({ experience, index }))
    .sort((a, b) => b.experience.year - a.experience.year)

  function updateForm(patch: Partial<experiencesInterface>) {
    setForm((prev) => ({ ...prev, ...patch }))
  }

  function updateContent(index: number, value: string) {
    setForm((prev) => ({
      ...prev,
      content: prev.content.map((item, i) => i === index ? value : item)
    }))
  }

  function addContent() {
    setForm((prev) => ({ ...prev, content: [...prev.content, ""] }))
  }

  function removeContent(index: number) {
    setForm((prev) => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index)
    }))
  }

  function editExperience(index: number) {
    const experience = experiences[index]
    setForm({ ...experience, content: [...experience.content] })
    setEditingIndex(index)
  }

  function resetForm() {
    setForm(emptyExperience())
    setEditingIndex(null)
  }

  async function saveExperience(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    if (!form.title.trim()) {
      toast.error("Title is required", {
        position: "bottom-right"
      })
      return
    }

    const payload: experiencesInterface = {
      ...form,
      title: form.title.trim(),
      icon: form.icon.trim(),
      content: form.content.map((item) => item.trim()).filter(Boolean)
    }

    const next = editingIndex === null ?
      [...experiences, payload] :
      experiences.map((experience, index) => index === editingIndex ? payload : experience)

    setSending(true)
    const result = await adminPut("experiences", session("admin") as string, next)
    setSending(false)

    if (result.error) {
      toast.error(result.error, {
        position: "bottom-right"
      })
      return
    }

    setExperiences(next)
    toast.success(editingIndex === null ? "Experience added successfully!" : "Experience updated successfully!", {
      position: "bottom-right"
    })
    resetForm()
  }

  return (
    <div className="flex w-full flex-col gap-4 h-full">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-input">
          <Briefcase className="size-5" />
        </span>
        <div>
          <h1 className="silk text-2xl leading-tight">
            {editingIndex === null ? "Add Experience" : "Update Experience"}
          </h1>
          <p className="text-sm text-fg/60">Manage your professional journey.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-full gap-3">
        <form
          onSubmit={saveExperience}
          autoComplete="off"
          className="flex w-full md:w-[calc(40%-0.5rem)] flex-col gap-4 rounded-xl border border-fg/10 bg-card p-4 md:p-6 xl:col-span-2 overflow-y-auto">
          <span className="flex flex-col">
            <label htmlFor="title" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <Briefcase className="size-3.5" />
              Title
            </label>
            <input
              id="title"
              type="text"
              required
              value={form.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateForm({ title: e.target.value })}
              placeholder="Beginner's Path"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>

          <span className="flex flex-col">
            <label htmlFor="year" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <Briefcase className="size-3.5" />
              Year
            </label>
            <input
              id="year"
              type="number"
              disabled
              value={form.year}
              className="cursor-not-allowed rounded-md bg-input p-2 opacity-60 outline-none" />
            <span className="px-1 pt-1 text-[0.7rem] text-fg/40">Year is fixed to {form.year}</span>
          </span>

          <span className="flex flex-col">
            <label htmlFor="icon" className="flex items-center gap-2 px-1 pb-1 text-[0.75rem] text-fg/60">
              <Briefcase className="size-3.5" />
              Font Awesome Icon
            </label>
            <input
              id="icon"
              type="text"
              value={form.icon}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateForm({ icon: e.target.value })}
              placeholder="fa-solid fa-hourglass"
              className="rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
          </span>

          <span className="flex flex-col">
            <span className="flex items-center justify-between gap-2 px-1 pb-1">
              <label className="flex items-center gap-2 text-[0.75rem] text-fg/60">
                <Briefcase className="size-3.5" />
                Content
              </label>
              <button
                type="button"
                onClick={addContent}
                className="flex items-center gap-1 rounded-md border border-fg/10 px-2 py-1 text-[0.7rem] transition-colors hover:bg-input">
                <Plus className="size-3" />
                Add Point
              </button>
            </span>
            <div className="flex flex-col gap-2">
              {
                form.content.length > 0 ?
                  form.content.map((item, index) => {
                    return (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateContent(index, e.target.value)}
                          placeholder="Experience detail..."
                          className="min-w-0 flex-1 rounded-md bg-input p-2 outline-none ring-fg/20 focus:ring-2" />
                        <button
                          type="button"
                          onClick={() => removeContent(index)}
                          title="Remove point"
                          className="flex items-center justify-center rounded-md bg-red-500/10 px-3 text-red-500 transition-colors hover:bg-red-500/20">
                          <X className="size-4" />
                        </button>
                      </div>
                    )
                  })
                  : <span className="rounded-md border border-dashed border-fg/20 p-3 text-center text-[0.75rem] text-fg/40">No content points yet</span>
              }
            </div>
          </span>

          <div className="mt-1 flex gap-2">
            <button
              type="submit"
              disabled={sending}
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-fg px-3 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60">
              {sending ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
              {sending ? "Saving..." : editingIndex === null ? "Save" : "Update"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              disabled={sending}
              className="flex items-center justify-center gap-2 rounded-md border border-fg/10 px-3 py-2 text-sm transition-colors hover:bg-input disabled:opacity-60">
              <RotateCcw className="size-4" />
              Reset
            </button>
          </div>
        </form>

        <div className="flex w-full md:w-[calc(60%-0.5rem)] flex-col gap-3 xl:col-span-3 md:h-full md:overflow-y-auto">
          <h3 className="px-1 text-[0.7rem] uppercase tracking-[0.2em] text-fg/50">History</h3>

          {
            loading ?
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-fg/10 bg-card p-8 text-fg/60">
                <Loader2 className="size-6 animate-spin" />
                <span className="text-sm">Loading experiences...</span>
              </div>
              : error ?
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
                  <AlertCircle className="size-4" />
                  {error}
                </div>
                : orderedExperiences.length > 0 ?
                  orderedExperiences.map(({ experience, index }) => {
                    return (
                      <article
                        key={`${index}. ${experience.title}`}
                        className="flex flex-col gap-3 rounded-xl border border-fg/10 bg-card p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="flex size-10 items-center justify-center rounded-lg bg-input">
                              <Briefcase className="size-4" />
                            </span>
                            <div>
                              <h4 className="silk text-sm">{experience.title}</h4>
                              <p className="text-[0.7rem] text-fg/50">{experience.year}</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => editExperience(index)}
                            className="rounded-md border border-fg/10 px-3 py-1.5 text-[0.7rem] transition-colors hover:bg-input">
                            Edit
                          </button>
                        </div>
                        {
                          experience.content.length > 0 ?
                            <ul className="flex flex-col gap-1.5">
                              {
                                experience.content.map((content, j) => {
                                  return (
                                    <li key={`${j}. ${content}`} className="flex items-start gap-2 text-sm text-fg/70">
                                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-fg/30" />
                                      {content}
                                    </li>
                                  )
                                })
                              }
                            </ul>
                            : <span className="text-[0.75rem] text-fg/40">No content points</span>
                        }
                      </article>
                    )
                  })
                  : <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-fg/20 p-8 text-center">
                    <Briefcase className="size-8 text-fg/30" />
                    <span className="silk text-lg">No Experience Yet</span>
                    <span className="text-sm text-fg/50">Add your first experience using the form.</span>
                  </div>
          }
        </div>
      </div>
    </div>
  )
}
