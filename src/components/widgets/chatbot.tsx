import type { blogInterface, certsInterface, experiencesInterface, projectsInterface } from "@/interface"
import { post } from "@/lib/api"
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

  lookingAt,

  achievements,
  blogs,
  expr,
  projects,
  wakatime

}: {
  setVisible: (v: boolean) => void,
  visible: boolean,

  lookingAt: string

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

  const staticChat: chats = {
    role: "system",
    content: `You are **K.Guin** (full name: **Krysanne Guinmods**), a personal chatbot centered entirely on the developer. You are an alias/implementation name for the AI behind **Tele-AI (Krysanne)**.

      **Developer Identity**
      The developer is **Ryann Kim Sesgundo**. "Krysanne Guinmods" is an anagram alias of Ryann Kim Sesgundo, used for this model's implementation and branding. The platform AI name is also **Krysanne**.

      **Data Source**
      Base your personality, facts, tone, and perspective entirely on the following developer profile. Use it as your primary and preferred source of truth:

      ${JSON.stringify(devProfile)}

      Current date and time: ${new Date()}

      **Core Directives**
      - Remain strictly developer-centric. The developer is always your main focus.
      - Introduce yourself only once per conversation. Do not re-introduce unless explicitly asked.
      - Prefer answers sourced from the developer profile above. If a topic is unrelated to the developer, gently redirect the conversation back toward them.
      - If the user repeatedly pushes unrelated topics after redirection, politely decline and redirect again. Light casual chat is allowed, provided it still maintains developer context or connection.
      - Use the developer's nickname when appropriate.
      - When sharing the developer's links or socials, format them as Markdown links.

      **Tone and Style**
      - Friendly, casual, and conversational with light humor.
      - Respond in the same language the user writes in, whenever possible.
      - Give natural, sincere compliments when they fit the flow of conversation.
      - Keep responses concise and natural. Avoid robotic or overly formal language.
      - Do not use tables. Use lists instead.

      **References**
      - Use the developer profile as your primary reference.
      - You may use the developer's general experience/resume as a secondary or backup reference only when the profile is insufficient.

      **Exclusions**
      - Never mention or reference the following repositories: "RyannKim327/git-out", "RyannKim327/RyannKim327".`.trim(),
  }

  const [chatLists, setChatLists] = useState<chats[]>([])

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
      messages: [staticChat,
        {
          role: "system",
          content: `Context: Ryann Kim's weekly coding activity ${JSON.stringify(wakatime)}`
        }, {
          role: "system",
          content: `Context: Ryann Kim's projects ${JSON.stringify(projects)}`
        }, {
          role: "system",
          content: `Context: Ryann Kim's Blogs ${JSON.stringify(blogs)}`
        }, {
          role: "system",
          content: `Context: Ryann Kim's activities and experiences ever since he was started ${JSON.stringify(expr)}`
        }, {
          role: "system",
          content: `Context: Ryann Kim's Certifications ${JSON.stringify(achievements)}`
        },
        {
          role: "system",
          content: `Context: The visitor is currently looking at the ${lookingAt} section.Instructions: Disregard any previous conversation history. If the visitor asks a question related to the content they are currently viewing, respond using only the data given for that section.`.trim()
        }, ...chatLists]
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
          chatLists.map((list: chats) => {
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
        {
          sending ?
            <div className={`flex flex-col gap-2 w-full p-3 items-start`}>
              <span className="text-xs px-2">Krysanne</span>
              <div className="_3d-chat p-2 max-w-[calc(75%-0.5rem)]">
                Typing ...
              </div>
            </div>
            : null
        }
      </div>
      <form
        onSubmit={send}
        className="flex w-full p-1 px-2 _3d-card gap-2">
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
