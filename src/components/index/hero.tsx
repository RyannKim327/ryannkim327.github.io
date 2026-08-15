import Img from "@/assets/hero.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-end w-full h-full">
      <div className="flex flex-col scroll items-center justify-center w-full h-[25%] bg-bg">
        <div className="flex h-1/2 justify-center w-full scrollbox">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0h24v24H0z"
              fill="none">
            </path>
            <path
              className="path"
              d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z">
            </path>
          </svg>
        </div>
        <span className="text-lg">Scroll down to explore</span>
      </div>
    </div>
  )
}
