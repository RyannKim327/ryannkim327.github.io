import Me from "@/assets/dark.png"
import Title from "../widgets/title"

function toId(id: string) {
  const _ = document.getElementById(id);
  if (_) {
    _.scrollIntoView({
      behavior: "smooth",
    });
  }
}

export default function About() {
  return (
    <div className="bg-bg flex flex-col relative items-center w-full h-full">
      <Title id="about">About me</Title>
      <div className="flex flex-col-reverse lg:flex-row w-full h-full justify-center lg:justify-evenly px-5 items-center py-2">
        <div className="flex flex-col absolute bottom-0 pb-30 bg-linear-to-b from-bg/50 to-bg lg:pb-0 lg:static lg:gap-20 w-[calc(90%-0.5rem)] lg:w-[calc(40%-0.5rem)]">
          <blockquote className="text-justify lg:text-2xl p-5">
            <span className="animate-pulse text-green-600 font-extrabold">&gt; </span>
            I am Ryann Kim M. Sesgundo, a graduate of Bachelor of Science in Information Technology.
            I am more on focus on web development and Scripting for automations and to use the
            Artificial Intelligence to create a project to help people for their daily needs.
          </blockquote>
          <div className="flex gap-2 w-full">
            <button
              className="card p-3 w-full silk"
              onClick={() => {
                toId("footer")
              }}>Contact Me</button>
            <button
              className="card p-3 w-full silk"
              onClick={() => {
                toId("projects")
              }}>See my Projects</button>
          </div>
        </div>
        <img className="w-[calc(90%-0.5rem)] inset-0 object-scale-down lg:w-[calc(25%-0.5rem)]" src={Me} />
      </div>
    </div >
  )
}
