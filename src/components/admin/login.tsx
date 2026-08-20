import { post } from "@/utils/api"
import { session } from "@/utils/storage"
import React, { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

export default function AdminLogin({
  setVerified
}: {
  setVerified: (b: boolean) => void
}) {

  const [password, setPassword] = useState("")
  const [admin, setAdmin] = useState<string | null>(session("admin") as string)
  const [expiration, setExpiration] = useState<number>(session("expiration") as number)
  const [sending, setSending] = useState(false)

  const checker = () => {
    const time = new Date().getTime();
    setVerified(
      admin !== undefined &&
      admin !== null &&
      time < expiration
    )
    if (time >= expiration) {
      session("admin", "");
      session("expiration", "");
    }
  };

  async function checkUser() {
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
    setAdmin(data.code)
    setExpiration(data.time)
    checker()
  }

  useEffect(() => {
    checker()
    const interval = setInterval(() => {
      checker()
    }, 1000 * 60 * 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <form className="flex flex-col gap-3 w-1/3 rounded items-center bg-card p-2" onSubmit={checkUser}>
        <span className="text-[1.5rem] silk">Administrator Login</span>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
          }}
          required={true}
          type="password"
          placeholder="Enter password"
          className="bg-input p-2 rounded-md w-full" />

        {sending ? null :
          <input
            type="submit"
            className="card w-full"
            value="Login" />
        }
      </form>
      <ToastContainer />
    </div>
  )
}
