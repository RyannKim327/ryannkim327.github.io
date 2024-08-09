
const Header = () => {
  return (
    <div className="p-2 flex justify-between">
      <h3 className="text-base">{(document.title) ?? "I am RyannKim327"}</h3>
      <nav className="rounded-bl-lg border-white">
        {(document.title) ?? "I am Ryann Kim Sesgundo"}
      </nav>
    </div>
  )
}

export default Header
