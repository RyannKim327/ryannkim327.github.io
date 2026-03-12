import { Link, NavLink, Outlet } from "react-router";

interface linkProps {
  children: string;
  to: string;
}

const Links = (props: linkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-blue-500 font-bold" : "text-gray-500"
      }
      to={`/admin${props.to}`}
      end
    >
      {props.children}
    </NavLink>
  );
};

export default function Admin() {
  return (
    <div className="flex flex-row justify-center items-center p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh gap-2">
      <div className="flex flex-col h-full w-1/6 justify-between bg-slate-200 dark:bg-slate-800 dark:text-white p-5 rounded ">
        <div className="flex flex-col">
          <Links to="">Home</Links>
          <Links to="/blog">Blog</Links>
          <Links to="/exp">Experiences</Links>
          <Links to="/upload">Upload Image</Links>
        </div>
        <Link to="/" className="text-gray-500">
          Portfolio
        </Link>
      </div>
      <div className="flex flex-col h-full flex-1 bg-slate-200 dark:bg-slate-800 dark:text-white p-5 rounded">
        <Outlet />
      </div>
    </div>
  );
}
