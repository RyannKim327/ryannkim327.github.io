export default function Sections({ id }: { id: number }) {
  const ids = ["hero", "about", "experiences", "certificates", "projects", "blogs", "footer"]

  return (
    <div className="fixed z-100 left-5 flex flex-col justify-center gap-2 top-0 bottom-0">
      {
        ids.map((_: string, i: number) => {
          return (
            <div
              className={`h-3 w-3 ${i === id ? "bg-fg" : ""} border border-secondary border-solid`}></div>
          )
        })
      }
    </div>
  )
}
