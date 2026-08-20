import Hero from "@/components/index/hero";
import About from "@/components/index/about";
import Experiences from "@/components/index/experiences"
import Name from "@/components/widgets/name"
import Certificates from "./components/index/certificates";
import Projects from "./components/index/projects";
import { use, useEffect, useState } from "react";
import { get } from "./utils/api";
import axios from "axios";
import Blogs from "./components/index/blogs";
import Footer from "./components/index/footer";
import type { blogInterface, certsInterface, experiencesInterface, projectInterface } from "@/interface";

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

export default function App() {
  const [state, setState] = useState(false)
  const access = use(gather)
  const blogs = access[0].data as blogInterface[]
  const certificates = access[1].data as certsInterface[]
  const experiences = access[3].data as experiencesInterface[]
  const projects = access[5].data as projectInterface

  useEffect(() => {
    (async () => {
      const r = await get("")
      if (r.message) {
        setState(true)
      }
    })()
  }, [])



  return (
    <div className='w-full h-full overflow-x-hidden'>
      <Name />
      <div className="absolute z-10 w-full h-full overflow-x-hidden overflow-y-auto">
        <Hero />
        <About />
        {state ?
          <>
            <Experiences data={experiences} />
            <Certificates data={certificates} />
            <Projects data={projects} />
            <Blogs data={blogs} />
          </>
          : null}
        <Footer />
      </div>
      <div
        onClick={() => {
          toId("hero")
        }}
        className="cursor-pointer fixed z-100 w-10 text-center aspect-square right-10 card bottom-10 p-2 text-lg font-bolder bg-bg/50">
        <div className="-rotate-90">➜</div>
      </div>
    </div>
  )
}
