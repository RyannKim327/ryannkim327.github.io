import type { contactInterface } from "@/interface"
import { adminGet } from "@/lib/api"
import { session } from "@/lib/storage"
import { Inbox, Loader2, Mail, RefreshCw } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<contactInterface[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const loadContacts = useCallback(async () => {
    setLoading(true)
    setError("")
    const result = await adminGet("contact", session("admin") as string)
    if (result.error) {
      setError(result.error)
      setContacts([])
    } else {
      setContacts((result.data as contactInterface[]) ?? [])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    let active = true
    adminGet("contact", session("admin") as string).then((result) => {
      if (!active) return
      if (result.error) {
        setError(result.error)
        setContacts([])
      } else {
        setContacts((result.data as contactInterface[]) ?? [])
      }
      setLoading(false)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="silk text-2xl">Contacts</h1>
          <p className="text-sm text-fg/60">Messages sent through your portfolio.</p>
        </div>
        <button
          type="button"
          onClick={loadContacts}
          disabled={loading}
          className="flex items-center gap-2 rounded-md border border-fg/10 px-3 py-2 text-sm transition-colors hover:bg-input disabled:opacity-60">
          {loading ? <Loader2 className="size-4 animate-spin" /> : <RefreshCw className="size-4" />}
          Refresh
        </button>
      </div>
      {
        loading ?
          <div className="flex flex-col items-center justify-center gap-2 py-16 text-fg/60">
            <Loader2 className="size-6 animate-spin" />
            <span className="text-sm">Loading contacts...</span>
          </div>
          : error ?
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500">
              {error}
            </div>
            : contacts.length > 0 ?
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {
                  contacts.map((contact: contactInterface, i: number) => {
                    return (
                      <article
                        key={`${i}. ${contact.name}`}
                        className="flex flex-col gap-2 rounded-xl border border-fg/10 bg-card p-4">
                        <div className="flex items-start justify-between gap-2">
                          <span className="silk text-sm">{contact.name}</span>
                          <a
                            href={`mailto:${contact.email}`}
                            title={contact.email}
                            className="flex items-center gap-1 text-[0.7rem] text-fg/60 hover:text-fg hover:underline">
                            <Mail className="size-3.5" />
                            {contact.email}
                          </a>
                        </div>
                        <p className="whitespace-pre-wrap text-sm text-fg/80">{contact.content}</p>
                      </article>
                    )
                  })
                }
              </div>
              : <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
                <Inbox className="size-10 text-fg/40" />
                <span className="silk text-2xl">No Contacts Yet</span>
                <span className="text-sm text-fg/60">Baka ayaw ka nilang kausap pre</span>
              </div>
      }
    </div>
  )
}
