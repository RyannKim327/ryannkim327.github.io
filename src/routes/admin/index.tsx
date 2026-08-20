import type { contactInterface } from "@/interface"
import { adminGet } from "@/utils/api"
import { session } from "@/utils/storage"
import { use } from "react"

const getContacts = adminGet("contact", session("admin") as string)

export default function AdminDashboard() {
  const contacts = use(getContacts) as { data: contactInterface[] }

  return (
    <div className="flex flex-col w-full h-full">
      {
        contacts.data.length > 0 ?
          contacts.data.map((contact: contactInterface, i: number) => {
            return (
              <div key={i}>
                <span>{contact.name}</span>
              </div>
            )
          })
          : <div className="flex flex-col h-full w-full items-center justify-center">
            <span className="silk text-4xl">No Contacts Yet</span>
            <span>Baka ayaw ka nilang kausap pre</span>
          </div>
      }
    </div>
  )
}
