import { Outlet } from "react-router";
import AdminController from "../middleware/admin_controller";
import AdminSidebar from "../parts/admin-sidebar";

export default function Admin() {
  return (
    <AdminController>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 bg-[#f6f6f6] text-black dark:bg-[#0c0c0c] dark:text-white w-dvw h-dvh gap-2 select-none">
        <AdminSidebar />
        <div className="flex flex-col h-full w-full md:flex-1 bg-zinc-300 text-black dark:bg-slate-800 dark:text-white p-5 rounded overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </AdminController>
  );
}
