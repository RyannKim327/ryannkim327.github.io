import { useEffect, useState } from "react";
import { default_interface, link_interface } from "./../utils/interfaces.tsx";
import {
  faBlog,
  faContactCard,
  faFolderOpen,
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
      className="cursor-pointer p-2 link-animation text-[1.15rem]"
    >
      <span className="xl:hidden">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <span className="hidden xl:inline xl:text-[1.25em]">
        {props.children}
      </span>
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
      className={`bg-[#f9fafb] dark:bg-slate-900 z-1 dark:text-white flex flex-row justify-between items-center px-2 shadow dark:shadow-white h-[75px]`}
    >
      <img
        onClick={() => {
          onclick("home");
        }}
        src={Logo}
        className="h-[50px] rounded-full aspect-square"
      />
      <nav className="flex flex-row list-none h-full items-center">
        {/* <List link="home" icon={faHouse}> */}
        {/*   {/* Home *} */}
        {/* </List> */}
        <List link="about" icon={faUser}>
          About
        </List>
        <List link="projects" icon={faFolderOpen}>
          Projects
        </List>
        <List link="blog" icon={faBlog}>
          Blogs
        </List>
        <List link="contact" icon={faContactCard}>
          Contact
        </List>
      </nav>
    </header>
  );
}
