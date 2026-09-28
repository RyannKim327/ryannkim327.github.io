import Hero from "@/components/index/hero";
import About from "@/components/index/about";
import Experiences from "@/components/index/experiences"
import Name from "@/components/widgets/name"
import Certificates from "./components/index/certificates";
import Projects from "./components/index/projects";
import { use, useEffect, useRef, useState } from "react";
import { get } from "./lib/api";
import axios from "axios";
import Blogs from "./components/index/blogs";
import Footer from "./components/index/footer";
import type { blogInterface, certsInterface, experiencesInterface, projectInterface } from "@/interface";
import { ArrowUp, Bot, X } from "lucide-react";
import Chatbot from "./components/widgets/chatbot";
import Boxes from "./components/widgets/boxes";

function toId(id: string) {
  const _ = document.getElementById(id);
  if (_) {
    _.scrollIntoView({
      behavior: "smooth",
    });
  }
}

const gather = Promise.all([
  get("blog?limit=6"),
  get("certs?limit=6"),
  get("dev"),
  get("experiences"),
  axios.get(""), //https://api.github.com/users/RyannKim327/repos?sort=updated"),
  get("projects"),
  get("wakatime")
])

const ids = [
  "hero",
  "about",
  "experiences",
  "projects",
  "certificates",
  "blogs",
  "footer"
]

export default function App() {
  const access = use(gather)
  const blogs = access[0].data as blogInterface[]
  const certificates = access[1].data as certsInterface[]
  const experiences = access[3].data as experiencesInterface[]
  const projects = access[5].data as projectInterface
  const wakatime = access[6].data as Record<string, any>

  const [looking, setLooking] = useState("hero")
  const [visible, setVisible] = useState(false)

  const main = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!main) return
    const current = main.current
    if (!current) return
    const handleScroll = () => {
      ids.map(id => {
        const c = document.getElementById(id)
        if (c) {
          const position = c.getBoundingClientRect().top
          if (position >= 0 && position < 250) {
            console.log(id)
            setLooking(id)
          }
        };
      })
    };

    current.addEventListener("scroll", handleScroll)

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <div className='w-full h-full overflow-x-hidden'>
      <Name main={main} />
      <div
        ref={main}
        className="absolute z-10 w-full h-full overflow-x-hidden overflow-y-auto">
        <Hero />
        <About />
        {experiences && certificates && projects && blogs ?
          <>
            <Experiences data={experiences} />
            <Certificates data={certificates} />
            <Projects data={projects} />
            <Blogs data={blogs} />
          </>
          : null}
        <Footer />
      </div>
      <div className="flex flex-col fixed z-100 right-10 bottom-10 gap-3">
        {experiences && certificates && projects && blogs ?
          <div
            onClick={() => {
              setVisible((prev) => {
                return !prev
              })
            }}
            className="flex items-center justify-center cursor-pointer w-8 md:w-10 text-center aspect-square card p-2 text-lg font-bolder bg-bg/50">
            <div>
              {visible ?
                <X /> :
                <Bot />
              }
            </div>
          </div>
          : null}
        <div
          onClick={() => {
            toId("hero")
          }}
          className="flex items-center justify-center cursor-pointer w-8 md:w-10 text-center aspect-square card p-2 text-lg font-bolder bg-bg/50">
          <div>
            <ArrowUp />
          </div>
        </div>
      </div>
      {experiences && certificates && projects && blogs ?
        <Chatbot
          blogs={blogs}
          expr={experiences}
          wakatime={wakatime}
          achievements={certificates}
          projects={projects.projects}

          lookingAt={looking}

          setVisible={setVisible}
          visible={visible} />
        : null}
    </div>
  )
}
