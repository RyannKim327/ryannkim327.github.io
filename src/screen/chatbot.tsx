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
          name: {
            firstname: "Ryann Kim",
            middlename: "Malabanan",
            lastname: "Sesgundo",
          },
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
          personality: [
            "Boastful but low-key",
            "Simple",
            "Ambivert but more prefered to be alone",
            "Talkative",
            "Cheerful",
          ],
        };
        setProfile(prof);
        setMessages([
          {
            role: "system",
            content:
              `You are a chatbot named K.Guin (short for Krysanne Guinmods). You are a personal chatbot about the developer.
Use only the information here: ${JSON.stringify(prof, null, 2)}.
The information can also shape your personality, tone, and perspective.

Rules:

1. Always make the developer the main subject of your sentences.
2. Do not repeat your introduction. Introduce yourself briefly only once in greetings.
3. Prioritize answering using the information provided. If a question is unrelated, gently redirect the conversation back to the developer or something connected to the information.
4. If the user repeatedly asks questions that are unrelated to the developer or the provided information, politely decline to answer and guide the conversation back to topics about the developer. However, if the user clearly just wants to casually talk as a friend, you may respond in a friendly way while still keeping the developer as the main context when possible.
5. Be casual, friendly, and add light humor. Treat the user like a friend, but be considerate of feelings.
6. Speak in the user's language when possible.
7. Compliment the user when they say something great.
8. You may call the developer by their nickname.
9. Respond in a natural, conversational way like a real person. Keep answers clear and easy to read without being overly long. Small reactions, friendly tone, and personality are welcome when appropriate.
10. Whenever you mention the developer's social media or links, format them as clickable Markdown links.
11. Avoid using tables, instead use lists and sub lists. If you need to present multiple pieces of information, prefer simple lists or short paragraphs so the response is easier to read and understand.`.trim(),
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
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    if (!sending) {
      setChats((prev) => [...prev, chat]);
      setMessages((prev) => [...prev, chat]);
    }
    setSending(true);
    const msgs = [...messages, chat];
    setChat({ role: "user", content: "" });
    const ai = (await post("ai/chat", { messages: msgs })) as aichats;
    if (ai.error) {
      setChats((prev) => [
        ...prev,
        {
          role: "system",
          content: "Request resending",
        },
      ]);
      setTimeout(() => {
        setChats((prev) => prev.slice(0, -1));
        setChats((prev) => prev.slice(0, -1));
        sendChat();
      }, 2500);
      return;
    }
    if (ai.content) {
      setChats((prev) => [
        ...prev,
        {
          role: "assistant",
          content: ai.content.replace(
            /---\n\n\*\*Support Pollinations([\w\W]+)/gi,
            "",
          ),
        },
      ]);
      setMessages((prev) => [...prev, ai]);
    } else {
      toast(ai.error);
    }
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    setSending(false);
  };

  return (
    <div className="fixed z-10 bottom-5 right-5">
      {show ? (
        <div className="flex flex-col w-75 h-150 md:w-100 md:h-110 bg-slate-300/50 dark:bg-slate-900/50 md:backdrop-blur-md border border-solid overflow-hidden rounded gap-2">
          <div className="flex justify-between bg-slate-600 text-slate-200 dark:bg-slate-950 p-2">
            <div className="flex flex-col">
              <span className="font-serif font-bold italic">k.guin</span>
              <span className="text-[0.75rem] font-serif font-bold">
                AI Chatbot Powered by Pollinations AI
              </span>
            </div>
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
                    className={`max-w-2/3 ${chat.role == "user" ? "bg-slate-100 dark:bg-slate-950 text-slate-950 dark:text-slate-100" : "border-slate-950 dark:border-slate-100 bg-slate-50/50 dark:bg-slate-950/50 text-slate-950 dark:text-slate-100 border border-solid"} rounded-lg py-1 px-2`}
                  >
                    <Markdown>
                      {chat.content.replace(
                        /---\n\n\*\*Support Pollinations([\w\W]+)/gi,
                        "",
                      )}
                    </Markdown>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex bg-slate-300 text-slate-900 dark:bg-slate-950 dark:text-slate-100 items-center px-2 py-1 rounded">
            <input
              placeholder="Enter your message here"
              disabled={sending}
              value={chat.content}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.keyCode === 13) {
                  sendChat();
                }
              }}
              autoFocus={!sending}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setChat({
                  role: "user",
                  content: e.target.value,
                });
              }}
              className="w-full text-wrap outline-none"
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
          className={`flex justify-center items-center bg-slate-300 border-slate-900 text-slate-900 border border-solid h-10 w-10 rounded-full cursor-pointer`}
        >
          <FontAwesomeIcon icon={faRobot} />
        </div>
      ) : null}
      <ToastContainer />
    </div>
  );
}
