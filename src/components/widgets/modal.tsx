import React, { type ReactNode } from "react"

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
      className={`${visible ? "flex justify-center items-center p-5 fixed bg-bg/50 backdrop-blur-md left-0 right-0 top-0 bottom-0 z-200 opacity-100" : "hidden opacity-0"} transition-all delay-75 select-none`}>
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { e.stopPropagation() }}
        className={`${className ?? ""} flex flex-col rounded bg-card max-h-[calc(75%-0.5rem)] max-w-[calc(75%-0.5rem)] overflow-hidden`}>
        <span
          onClick={() => {
            setVisible(false)
          }}
          className="font-extrabold text-lg p-3 absolute right-3 text-shadow-bg text-shadow-md cursor-pointer top-3 z-1 aspect-square">X</span>
        {children}
      </div>
    </div >
  )
}
