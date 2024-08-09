import { Link } from 'react-router-dom'

const Header = () => {
  // TODO: To create a header inside of the right view
  return (
    <div className="p-2 flex justify-between select-none">
      <h3 className="text-2xl spartan pl-4">{(document.title) ?? "I am RyannKim327"}</h3>
      <nav className="rounded-bl-lg border-white roboto-slab">
        <Link className="px-2 cursor-pointer" to="/">Home</Link>
        <Link className="px-2 cursor-pointer" to="/about">About</Link>
      </nav>
    </div>
  )
}

export default Header
