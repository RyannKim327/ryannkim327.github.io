import { link_interface } from "./../utils/interfaces.tsx";
import {
  faAward,
  faBlog,
  faContactCard,
  faFolderOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./../assets/logo.png";

interface HeaderProps {
  isLoaded: boolean;
}

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

export default function Header(props: HeaderProps) {
  return (
    <header
      className={`bg-[#f9fafb] dark:bg-slate-900 z-1 dark:text-white flex flex-row justify-between items-center px-5 shadow shadow-zinc-500 dark:shadow-slate-500 h-[75px]`}
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
        {props.isLoaded ? (
          <>
            <List link="about" icon={faUser}>
              About
            </List>
            <List link="projects" icon={faFolderOpen}>
              Projects
            </List>
            <List link="blog" icon={faBlog}>
              Blogs
            </List>
          </>
        ) : null}
        <List link="contact" icon={faContactCard}>
          Contact
        </List>
      </nav>
    </header>
  );
}
