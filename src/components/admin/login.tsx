import { post } from "@/lib/api"
import { session } from "@/lib/storage"
import { Loader2, LockKeyhole } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function AdminLogin({
  setVerified
}: {
  setVerified: (b: boolean) => void
}) {

  const [password, setPassword] = useState("")
  const [sending, setSending] = useState(false)

  const checker = useCallback((admin: string | null, expiration: number) => {
    const time = new Date().getTime();
    setVerified(
      admin !== undefined &&
      admin !== null &&
      time < expiration
    )
    if (time > expiration) {
      session("admin", "");
      session("expiration", "");
    }
  }, [setVerified]);

  async function checkUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return
    setSending(true)
    const access = await post("admin", {
      key: password
    })
    setSending(false)

    if (access.error) {
      toast.error(access.error ?? "Invalid Password", {
        position: "bottom-right"
      })
      return
    }

    const data = JSON.parse(atob(access.code as string))
    session("admin", data.code)
    session("expiration", data.time)
    const admin = data.code
    const time = data.time
    checker(admin, time)
  }

  useEffect(() => {
    const admin = session("admin") as string
    const time = session("expiration") as number
    checker(admin, time)
    const interval = setInterval(() => {
      const admin_ = session("admin") as string
      const time_ = session("expiration") as number
      checker(admin_, time_)
    }, 1000 * 60 * 30)
    return () => clearInterval(interval)
  }, [checker])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <form
        className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-fg/10 bg-card p-6"
        onSubmit={checkUser}>
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-input">
            <LockKeyhole className="size-6" />
          </span>
          <span className="silk text-[1.5rem] leading-tight">Administrator Login</span>
          <span className="text-[0.75rem] text-fg/60">Authorized personnel only</span>
        </div>
        <span className="flex flex-col">
          <label htmlFor="password" className="px-3 text-[0.75rem] text-fg/60">Password</label>
          <input
            id="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value)
            }}
            required={true}
            autoComplete="current-password"
            type="password"
            placeholder="Enter password"
            className="bg-input p-2 rounded-md w-full outline-none ring-fg/20 focus:ring-2" />
        </span>
        <button
          type="submit"
          disabled={sending}
          className="flex items-center justify-center gap-2 rounded-md bg-fg px-3 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:opacity-60">
          {sending ? <Loader2 className="size-4 animate-spin" /> : null}
          {sending ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  )
}
