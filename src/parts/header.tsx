import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollEffect = () => {
      if (window.scrollY > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <header
      className={`flex flex-row w-full fixed top-0 h-12 justify-between items-center p-2 ${scrolled ? "bg-black text-white" : ""} ${props.className} transition ease delay-150`}
    >
      <div className="flex flex-row h-full items-center">
        <img className="aspect-square h-full rounded-full" src={prof} />
        <h1
          className={`pl-2 text-lg md:text-md ${scrolled ? "opacity-1" : "opacity-0"} transition ease delay-150`}
        >
          Ryann Kim Sesgundo
        </h1>
      </div>
      <nav className="flex flex-row list-none">
        <List link="">Test</List>
        <List link="">Hello</List>
      </nav>
    </header>
  );
}
