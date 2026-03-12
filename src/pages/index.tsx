import { Outlet } from "react-router";

export default function Admin() {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh">
      <div>
        <Outlet />
      </div>
    </div>
  );
}
