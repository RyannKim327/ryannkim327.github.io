import { useEffect, useState } from "react";
import prof from "./../assets/prof.jpg";
import { default_interface, link_interface } from "./../utils/interfaces.tsx";
import {
  faFolderOpen,
  faIdCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function List(props: link_interface) {
  const link = (id: string) => {
    const _ = document.getElementById(id);
    if (_) {
      _.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <li
      onClick={() => {
        link(props.link);
      }}
      className="cursor-pointer p-2 link-animation"
    >
      <FontAwesomeIcon className="lg:hidden" icon={props.icon} />
      <span className="hidden lg:inline">{props.children}</span>
    </li>
  );
}

export default function Header(props: default_interface) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const base = document.getElementById("base");
    if (base) {
      const scrollEffect = () => {
        if (base.scrollTop > 250) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      base.addEventListener("scroll", scrollEffect);
      return () => {
        base.removeEventListener("scroll", scrollEffect);
      };
    }
  }, []);

  return (
    <header
      className={`flex flex-row w-full justify-between items-center p-2 select-none ${scrolled ? "bg-black text-white dark:bg-[#3d3e51] h-12" : "h-16"} ${props.className} transition ease-in delay-150`}
    >
      <div
        onClick={() => {
          const _ = document.getElementById("main");
          if (_) {
            _.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
        className={`flex flex-row h-full items-center ${scrolled ? "cursor-pointer" : "cursor-default"}`}
      >
        <img className="aspect-square h-full box-border rounded-full" src={prof} />
        <div
          className={`${scrolled ? "opacity-1" : "opacity-0 cursor-default"}  transition ease delay-75`}
        >
          <h1 className={`pl-2 text-base`}>Ryann Kim M. Sesgundo</h1>
          <h3 className={`pl-4 text-xs`}>A software and Web Developer</h3>
        </div>
      </div>
      <nav className="flex flex-row list-none">
        <List link="about" icon={faUser}>
          About
        </List>
        <List link="projects" icon={faFolderOpen}>
          Projects
        </List>
        <List link="contact" icon={faIdCard}>
          Contact
        </List>
      </nav>
    </header>
  );
}
