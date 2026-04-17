import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router";
import { admin } from "../utils/tools";
import { useState } from "react";

interface linkProps {
  children: string;
  to: string;
}

const Links = (props: linkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-slate-900 dark:text-slate-200 font-bold"
          : "text-zinc-800 dark:text-gray-500"
      }
      to={`/${admin}${props.to}`}
      end
    >
      {props.children}
    </NavLink>
  );
};

export default function AdminSidebar() {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`flex flex-col ${toggle ? "h-15 overflow-y-hidden" : "h-1/2"} transition-all delay-150 md:h-full w-full md:w-[calc(25.0%-0.5rem)] justify-between bg-slate-100 text-slate-950 dark:bg-slate-900 dark:text-slate-100 p-5 rounded`}
    >
      <div className="flex flex-col gap-3">
        <div className={`flex flex-row w-full justify-between`}>
          <span className="font-serif font-bolf italic">MPOP Reverse II</span>
          <div
            className="md:hidden"
            onClick={() => {
              setToggle((t) => !t);
            }}
          >
            <FontAwesomeIcon icon={toggle ? faBars : faClose} />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Links to="">Home</Links>
          <Links to="/blog">Blog</Links>
          <Links to="/certificate">Certificate Upload</Links>
          <Links to="/contact">Contact</Links>
          <Links to="/exp">Experiences</Links>
          <Links to="/poem">Post Poem</Links>
          <Links to="/upload">Upload Image</Links>
          <Links to="/personal-info">Personal Information</Links>
        </div>
      </div>
      <Link to="/" className="text-zinc-700 dark:text-gray-500">
        Portfolio
      </Link>
    </div>
  );
}
