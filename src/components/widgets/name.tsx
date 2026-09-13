import { useEffect, useState, type RefObject } from "react"

interface NameInterface {
  main: RefObject<HTMLElement>
}

export default function Name({ main }: NameInterface) {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const current = main.current
    if (!current) return

    const handleScroll = () => {
      console.log(current.scrollTop)
      setScroll(current.scrollTop * 0.5);
    };

    current.addEventListener("scroll", handleScroll)

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, [main]);

  return (
    <div className={`fixed flex flex-col justify-center items-center w-full h-[95%] select-none`}
      style={{
        top: scroll * -1
      }}>
      <span
        className="
          text-[5rem] lg:text-[12rem] 3xl:text-[36rem] tracking-widest
          text-center w-full
          _3d
          ">
        <span className="relative"
          style={{
            left: scroll * -1
          }}>RYANN</span>
        <span className="text-xs"> </span>
        <span className="relative"
          style={{
            right: scroll * -1
          }}>KIM</span>
      </span>
      <span
        className="relative silk text-[2rem] lg:text-[6rem] font-mono"
        style={{
          top: scroll * -0.75
        }}>Sesgundo</span>
    </div>

  )
}
