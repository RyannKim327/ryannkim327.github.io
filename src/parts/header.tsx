import { useEffect, useState } from "react";
import prof from "./../assets/prof.jpg";
import { default_interface, link_interface } from "./../utils/interfaces.tsx";

function List(props: link_interface) {
  const link = (id: string) => {
    const _ = document.getElementById(id);
    if (_) {
      _.scrollIntoView(
        {
          behavior: "smooth",
        },
        true,
      );
    }
  };
  return (
    <li
      onClick={() => {
        link(props.link);
      }}
      className="cursor-pointer p-2 link-animation"
    >
      {props.children}
    </li>
  );
}

export default function Header(props: default_interface) {
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
      className={`flex flex-row w-full fixed top-0 h-12 justify-between items-center p-2 ${scrolled ? "bg-black text-white" : ""} ${props.className} transition ease delay-75`}
    >
      <div
        onClick={() => {
          const _ = document.getElementById("main");
          if (_) {
            _.scrollIntoView(
              {
                behavior: "smooth",
              },
              true,
            );
          }
        }}
        className={`flex flex-row h-full items-center ${scrolled ? "cursor-pointer" : "cursor-default"}`}
      >
        <img className="aspect-square h-full rounded-full" src={prof} />
        <div
          className={`${scrolled ? "opacity-1" : "opacity-0 cursor-default"}  transition ease delay-75`}
        >
          <h1 className={`pl-2 text-base`}>Ryann Kim M. Sesgundo</h1>
          <h3 className={`pl-4 text-xs`}>A Devdevan</h3>
        </div>
      </div>
      <nav className="flex flex-row list-none">
        <List link="about">About</List>
        <List link="projects">Projects</List>
        <List link="contact">Contact</List>
      </nav>
    </header>
  );
}
