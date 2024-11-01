import { useState } from "react";
import prof from "./../assets/prof.jpg";

interface properties {
  className: string | unknown;
}

interface list_properties {
  children: string;
  link: string;
}

function List(props: list_properties) {
  return (
    <li className="cursor-pointer p-2 link-animation">{props.children}</li>
  );
}

export default function Header(props: properties) {
  const { theme, setTheme } = useState("");

  window.onscroll = (event) => {};

  return (
    <header
      className={`flex flex-row w-full fixed top-0 h-12 justify-between items-center p-2 ${theme} ${props.className}`}
    >
      <div className="flex flex-row h-full items-center">
        <img className="aspect-square h-full rounded-full" src={prof} />
        <h1 className="pl-2 text-lg md:text-md">Ryann Kim Sesgundo</h1>
      </div>
      <nav className="flex flex-row list-none">
        <List link="">Test</List>
        <List link="">Hello</List>
      </nav>
    </header>
  );
}
