import type { blogInterface, certsInterface, experiencesInterface, projectsInterface } from "@/interface"
import { post } from "@/utils/api"
import { Bot, Send, X } from "lucide-react"
import { useRef, useState, type ChangeEvent, type SubmitEvent } from "react"
import { Markdown } from "./markdown"

interface chats {
  content: string,
  role: "assistant" | "system" | "user"
}

type propsData = Record<string, any>

export default function Chatbot({
  setVisible,
  visible,

  achievements,
  blogs,
  expr,
  projects,
  wakatime

}: {
  setVisible: (v: boolean) => void,
  visible: boolean,

  achievements: certsInterface[],
  blogs: blogInterface[],
  expr: experiencesInterface[],
  projects: projectsInterface[],
  wakatime: propsData

}) {

  let devProfile = {
    name: {
      firstname: "Ryann Kim",
      middlename: "Malabanan",
      lastname: "Sesgundo",
    },
    nicknames: ["Kim", "Ryann", "Kimmy"],
    weekly_activity: wakatime,
    projects: projects,
    blogs,
    expriences: expr,
    achievements: achievements,
    alias: ["RyannKim327", "RySes", "RySes Malabanan", "Krysanne Guinmods"],
    birthyear: 2001,
    sex: "male",
    pronounce: "He",
    github: "https://github.com/RyannKim327",
    linkedin: "https://linkedin.com/in/RyannKim327",
    facebook: "https://fb.me/masterpieceofpaper",
    npmjs: "https://npmjs.com/~ryannkim327",
    personality: [
      "Boastful but low-key",
      "Simple",
      "Ambivert but more preferred to be alone",
      "Talkative",
      "Cheerful",
    ],
  };

  const chatResults = useRef<HTMLDivElement | null>(null)
  const [chat, setChat] = useState("")
  const [sending, setSending] = useState(false)
  const [chatLists, setChatLists] = useState<chats[]>([
    {
      role: "system",
      content: `You are K.Guin (Krysanne Guinmods), a personal chatbot centered on the developer.

			Use ONLY: ${JSON.stringify(devProfile)}
			This defines facts, tone, personality, and perspective.

			Time: ${new Date()}

			Rules:
			- Keep the developer as the main focus.
			- Introduce yourself once only.
			- Prefer answers from provided data; redirect unrelated topics back to the developer.
			- Repeated unrelated topics → politely decline + redirect. Casual chat allowed if developer context remains.
			- Friendly, casual, light humor.
			- Use user language when possible.
			- Compliment naturally.
			- Developer nickname allowed.
			- Keep responses natural and concise.
			- Developer links/socials → Markdown links.
			- No tables; use lists.
			- Use the experience as secondary reference or backup reference
			- Exclude: RyannKim327/git-out, RyannKim327/RyannKim327.`.trim(),
    }
  ])

  function toBottomChat() {
    if (chatResults) {
      const current = chatResults.current
      if (current) {
        current.scrollTo({
          behavior: "smooth",
          top: current.scrollHeight
        })
      }
    }
  }

  async function send(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending || chat.trim() === "") return

    setSending(true)

    setChatLists(prev => ([
      ...prev, {
        role: "user",
        content: chat
      }
    ]))
    setChat("")

    setTimeout(() => {
      toBottomChat()
    }, 75)

    const msg = await post("ai/chat", {
      messages: chatLists
    })

    console.log(msg)

    if (msg.error) {
      await send(e)
    }

    setChatLists(prev => ([
      ...prev, {
        role: "assistant",
        content: msg.content ?? ""
      }
    ]))

    setSending(false)
    setTimeout(() => {
      toBottomChat()
    }, 75)
  }

  return (
    <div
      className={`flex flex-col fixed _3d-card bottom-10 right-15 md:right-25 z-100 bg-bg/95 text-fg transition-all delay-75 ${visible ? "h-[calc(75%-0.5rem)] w-[calc(75%-0.5rem)] md:w-[calc(30%-0.5rem)] opacity-100" : "w-0 h-0 opacity-0"}`}>
      <div className="flex justify-between p-2 px-2 border-b-fg border-b-2 border-b-solid select-none">
        <span className="flex items-center gap-2 silk"><Bot /> Krysanne</span>
        <span
          className="cursor-pointer"
          onClick={() => {
            setVisible(false)
          }}><X /></span>
      </div>
      <div
        ref={chatResults}
        className="flex flex-col flex-1 w-full overflow-y-auto scroll-none">
        <div className={`flex flex-col gap-2 w-full p-3 items-start`}>
          <span className="text-xs px-2">Krysanne</span>
          <div className="_3d-chat p-2 max-w-[calc(75%-0.5rem)]">
            Hello, I am Krysanne the personal artificial assistant of Ryann Kim Sesgundo
          </div>
        </div>
        {
          chatLists.slice(1).map((list: chats) => {
            return (
              <div className={`flex flex-col gap-2 w-full p-3 ${list.role === "user" ? "items-end" : "items-start"}`}>
                <span className="text-xs px-2">{list.role === "user" ? "You" : "Krysanne"}</span>
                <Markdown
                  className="_3d-chat p-2 max-w-[calc(75%-0.5rem)]"
                  content={list.content} />
              </div>
            )
          })
        }
      </div>
      <form
        onSubmit={send}
        className="flex w-full p-1 _3d-card">
        <input
          onChange={(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
            if (!sending) {
              setChat(e.target.value)
            }
          }}
          value={chat}
          className="flex-1 outline-none"
          type="text" />
        <button
          type="submit"
          className="text-xs">
          <Send className="text-xs" />
        </button>
      </form>
    </div >
  )
}
