import { type ReactNode } from "react"

export default function Modal(
  {
    children,
    className,
    setVisible,
    visible
  }: {
    children: ReactNode,
    className?: string,
    setVisible: (v: boolean) => void,
    visible: boolean
  }
) {

  return (
    <div
      onClick={() => {
        setVisible(false)
      }}
      className={visible ? `flex justify-center items-center p-5 fixed bg-bg/75 backdrop-blur-md left-0 right-0 top-0 bottom-0 z-200` : "hidden"}>
      <div className={`${className ?? ""} flex flex-col rounded bg-input`}>
        <span
          onClick={() => {
            setVisible(false)
          }}
          className="font-extrabold text-lg p-3 absolute right-3 top-3 z-1 aspect-square">X</span>
        {children}
      </div>
    </div >
  )
}
