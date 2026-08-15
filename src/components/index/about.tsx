import Me from "@/assets/dark.png"
import Title from "../widgets/title"

export default function About() {
  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title id="about">About me</Title>
      <div className="flex w-full justify-evenly px-5 items-center">
        <div className="flex w-[calc(40%-0.5rem)]">
          <blockquote className="text-justify text-2xl">
            <span className="text-green-800 font-extrabold">&gt; </span>
            I am Ryann Kim M. Sesgundo, a grqaduate of Bachelor of Science in Information Techmnology.
            I am more on focus on web development and Scripting for automations and to use the
            Artificial Intelligence to create a project to help people for their daily needs.
          </blockquote>
        </div>
        <img className="w-[calc(25%-0.5rem)]kl" src={Me} />
      </div>
    </div >
  )
}
