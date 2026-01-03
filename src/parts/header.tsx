import { useEffect, useState } from "react";
import { default_interface, link_interface } from "./../utils/interfaces.tsx";
import {
  faContactCard,
  faFolderOpen,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./../assets/logo.jpg";

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
      className={`flex flex-row w-full sticky justify-between items-center p-2 select-none dark:text-white text-black ${scrolled ? "h-12 lg:h-16" : "h-16 lg:h-20 lg:text-lg"} ${props.className} transition ease-in delay-150`}
    >
      <img src={Logo} className="h-[50px] rounded-full aspect-square" />
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
        <List link="contact" icon={faContactCard}>
          Contact
        </List>
      </nav>
    </header>
  );
}
