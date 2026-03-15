import {
  faClose,
  faPaperPlane,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { post } from "../utils/api";
import Markdown from "react-markdown";

interface aichats {
  role: "user" | "system" | "assistant";
  content: string;
}

export default function Chatbot() {
  const profile = {
    name: "Ryann Kim M. Sesgundo",
    birthyear: 2001,
    sex: "male",
    pronounce: "He",
    github: "https://github.com/RyannKim327",
    linkedin: "https://linkedin.com/in/RyannKim327",
    facebook: "https://fb.me/MPOP.2016",
    npmjs: "https://npmjs.com/~ryannkim327",
  };

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
  const [messages, setMessages] = useState([
    {
      role: "user",
      content: `Pretend to be a chatbot named k.guin.
                A personal chatbot related to the developer.
                Just based only with this infomation given:
                ${JSON.stringify(profile, null, 2)}.
                If the user ask somethine not related to the developer, just say, sorry, I don't know the answer about that.
                If the user greets you, just greet them back, don't give too much information just introduce yourself,
                basically be kind to them and treat them as friends and getting to know each other.
                Don't limit yourself, be someone's companion, try to be more friendly and add some humor as well, but consider feelings to others.
                Make it casual as possible, lessen the use of "—" too.`.trim(),
    },
    {
      role: "system",
      content: "Indeed",
    },
  ]);

  const sendChat = async () => {
    if (sending) {
      return toast("Message still sending. Please wait");
    }
    setSending(true);
    setChats((prev) => [...prev, chat]);
    setMessages((prev) => [...prev, chat]);
    setChat({ role: "user", content: "" });
    const ai = await post("ai/chat", { messages });

    if (!ai.error) {
      setChats((prev) => [...prev, ai]);
      setMessages((prev) => [...prev, ai]);
    } else {
      toast(ai.error);
    }
    setSending(false);
  };

  return (
    <div className="fixed z-10 bottom-5 right-5">
      {show ? (
        <div className="flex flex-col w-100 h-110 bg-slate-100/50 dark:bg-slate-700/50 border border-slate-950 border-solid overflow-hidden rounded gap-2">
          <div className="flex justify-between bg-slate-300 text-black dark:bg-slate-950 dark:text-white p-2">
            <span>k.guin</span>
            <span className="cursor-pointer">
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
      ) : (
        <div
          onClick={() => {
            setShow(true);
          }}
          className={`flex justify-center items-center bg-slate-700/50 border border-solid border-slate-950 h-10 w-10 rounded-full cursor-pointer`}
        >
          <FontAwesomeIcon icon={faRobot} />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
