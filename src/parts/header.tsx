import { useEffect, useState } from "react";
import prof from "./../assets/prof.jpg";
import { default_interface, link_interface } from "./../utils/interfaces.tsx";
import {
  faFolderOpen,
  faHouse,
  faIdCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function onclick(id: string) {
  const _ = document.getElementById(id);
  if (_) {
    _.scrollIntoView({
      behavior: "smooth",
    });
  }
}

function List(props: link_interface) {
  return (
    <li
      onClick={() => {
        onclick(props.link);
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
      className={`flex flex-row w-full sticky justify-between items-center p-2 select-none dark:text-white text-black ${scrolled ? "h-12 lg:h-16" : "h-12 lg:h-16 lg:text-lg"} ${props.className} transition ease-in delay-150`}
    >
      {scrolled ? <div>MPOP Reverse II</div> : null}
      <nav className="flex flex-row list-none">
        <List link="home" icon={faHouse}>
          Home
        </List>
        <List link="about" icon={faUser}>
          About
        </List>
        <List link="projects" icon={faFolderOpen}>
          Projects
        </List>
      </nav>
      <span className="bg-lime-900 px-3 py-1 rounded-full">Contact</span>
    </header>
  );
}
