export default function Title({ id, children }: { id: string, children: string }) {
  return (
    <span className="sticky w-full z-1 text-center bg-bg top-0 left-0 right-0 p-2 pt-5 text-[2rem]">
      <span className="silk px-5 border-b-2 border-b-solid border-b-fg">{children}</span>
    </span>
  )
}
