import Title from "../widgets/title"

export default function About() {
  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title>About me</Title>
      <div className="h-dvh p-4">
        <blockquote>A developer with experience in development from years of learning since 2016</blockquote>
      </div>
    </div>
  )
}
