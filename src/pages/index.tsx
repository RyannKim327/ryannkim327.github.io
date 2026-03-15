import { Link, NavLink, Outlet } from "react-router";
import { admin } from "../utils/tools";

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

export default function Admin() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh gap-2 select-none">
      <div className="flex md:flex-col md:h-full w-full md:w-1/6 justify-between bg-zinc-300 text-black dark:bg-slate-800 dark:text-white p-5 rounded">
        <div className="flex md:flex-col gap-1">
          <Links to="">Home</Links>
          <Links to="/blog">Blog</Links>
          <Links to="/certificate">Certificate Upload</Links>
          <Links to="/exp">Experiences</Links>
          <Links to="/poem">Post Poem</Links>
          <Links to="/upload">Upload Image</Links>
        </div>
        <Link to="/" className="text-zinc-700 dark:text-gray-500">
          Portfolio
        </Link>
      </div>
      <div className="flex flex-col h-full w-full md:flex-1 bg-zinc-300 text-black dark:bg-slate-800 dark:text-white p-5 rounded">
        <Outlet />
      </div>
    </div>
  );
}
