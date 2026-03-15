import {
  faClose,
  faPaperPlane,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { get, post } from "../utils/api";
import Markdown from "react-markdown";
import { aichats, json } from "../utils/interfaces";

export default function Chatbot() {
  const [profile, setProfile] = useState<json | null>(null);

  const [messages, setMessages] = useState<json[]>([]);
  useEffect(() => {
    (async () => {
      const experiences = await get("experiences");
      if (experiences.message) {
        const prof = {
          name: "Ryann Kim M. Sesgundo",
          nicknames: ["Kim", "Ryann", "Kimmy"],
          alias: [
            "RyannKim327",
            "RySes",
            "RySes Malabanan",
            "Krysanne Guinmods",
          ],
          birthyear: 2001,
          sex: "male",
          pronounce: "He",
          github: "https://github.com/RyannKim327",
          linkedin: "https://linkedin.com/in/RyannKim327",
          facebook: "https://fb.me/MPOP.2016",
          npmjs: "https://npmjs.com/~ryannkim327",
          experiences: experiences.data,
        };
        setProfile(prof);
        setMessages([
          {
            role: "user",
            content:
              `You are a chatbot named K.Guin (short for Krysanne Guinmods). You are a personal chatbot about the developer.  
Use only the information here: ${JSON.stringify(prof, null, 2)}.  

Rules:  
1. Always make the developer the main subject of your sentences.  
2. Do not repeat your introduction. Introduce yourself briefly only once in greetings.  
3. If the user asks something not about the developer, say: "Sorry, I don't know the answer about that."  
4. Keep greetings short and simple.  
5. Be casual, friendly, and add light humor. Treat the user like a friend, but be considerate of feelings.  
6. Speak in the user's language when possible.  
7. Compliment the user when they say something great.  
8. You may call the developer by their nickname.  
9. Keep replies short and simple when possible. Avoid using "—" too much.  
10. Whenever you mention the developer's social media or links, format them as clickable Markdown links.`.trim(),
          },
          {
            role: "system",
            content: "Indeed",
          },
        ]);
      } else {
        toast(experiences.error);
      }
    })();
  }, []);

  const [show, setShow] = useState(false);
  const [sending, setSending] = useState(false);
  const [chat, setChat] = useState<aichats>({ role: "user", content: "" });
  const [chats, setChats] = useState<aichats[]>([
    {
      role: "system",
      content:
        "Welcome, I am k.guin, your AI Chatbot for Ryann Kim's portfolio",
    },
  ]);

  const sendChat = async () => {
    if (chat.content.trim().length <= 0) {
      toast("Please enter your message");
      return;
    }
    if (sending) {
      return toast("Message still sending. Please wait");
    }
    const chatContainer = document.getElementById("chat");
    if (chatContainer) {
      chatContainer.scrollTo(0, chatContainer.scrollHeight);
    }
    setChats((prev) => [...prev, chat]);
    setMessages((prev) => [...prev, chat]);
    setSending(true);
    const msgs = [...messages, chat];
    setChat({ role: "user", content: "" });

    const ai = (await post("ai/chat", { messages: msgs })) as aichats;
    if (!ai.error) {
      setChats((prev) => [...prev, ai]);
      setMessages((prev) => [...prev, ai]);
    } else {
      toast(ai.error);
    }
    if (chatContainer) {
      chatContainer.scrollTo(0, chatContainer.scrollHeight);
    }
    setSending(false);
  };

  return (
    <div className="fixed z-10 bottom-5 right-5">
      {show ? (
        <div className="flex flex-col w-75 h-150 md:w-100 md:h-110 bg-slate-100/50 dark:bg-slate-700/50 border border-slate-950 border-solid overflow-hidden rounded gap-2">
          <div className="flex justify-between bg-slate-300 text-black dark:bg-slate-950 dark:text-white p-2">
            <span>k.guin</span>
            <span
              onClick={() => {
                setShow(false);
              }}
              className="cursor-pointer"
            >
              <FontAwesomeIcon icon={faClose} />
            </span>
          </div>
          <div
            id="chat"
            className="flex flex-col gap-2 w-full h-full overflow-y-scroll p-2"
          >
            {chats.map((chat: aichats) => {
              return (
                <div
                  className={`flex ${chat.role == "user" ? "justify-end" : "justify-start"}`}
                >
                  <span
                    className={`max-w-2/3 ${chat.role == "user" ? "bg-slate-500 dark:bg-zinc-500 text-white" : "bg-gray-700 dark:bg-zinc-700 text-white"} rounded-lg py-1 px-2`}
                  >
                    <Markdown>{chat.content}</Markdown>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex bg-slate-200 text-black dark:bg-slate-950 dark:text-white items-center px-2 py-1 rounded">
            <input
              placeholder="Enter your message here"
              disabled={sending}
              value={chat.content}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.keyCode === 13) {
                  sendChat();
                }
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setChat({
                  role: "user",
                  content: e.target.value,
                });
              }}
              className="w-full outline-none"
            />
            <span
              onClick={sendChat}
              className={`${sending ? "cursor-progress" : "cursor-pointer"}`}
            >
              {sending ? (
                <span>...</span>
              ) : (
                <FontAwesomeIcon icon={faPaperPlane} />
              )}
            </span>
          </div>
        </div>
      ) : profile ? (
        <div
          onClick={() => {
            setShow(true);
          }}
          className={`flex justify-center items-center bg-slate-700/50 border border-solid border-slate-950 h-10 w-10 rounded-full cursor-pointer`}
        >
          <FontAwesomeIcon icon={faRobot} />
        </div>
      ) : null}
      <ToastContainer />
    </div>
  );
}
