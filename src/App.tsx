import Hero from "@/components/index/hero";
import About from "@/components/index/about";
import Experiences from "@/components/index/experiences"
import Name from "@/components/widgets/name"

export default function App() {
  return (
    <div className='w-dvw h-dvh bg-bg text-fg overflow-x-hidden'>
      <Name />
      <div className="absolute z-10 w-full h-full overflow-x-hidden overflow-y-auto">
        <Hero />
        <About />
        <Experiences />
      </div>
    </div>
  )
}
