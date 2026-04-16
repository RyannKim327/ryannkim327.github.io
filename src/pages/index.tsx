import { Outlet } from "react-router";
import AdminController from "../middleware/admin_controller";
import AdminSidebar from "../components/admin-sidebar";

export default function Admin() {
  return (
    <AdminController>
      <div className="flex flex-col md:flex-row justify-center items-center p-4 w-full h-full gap-2 select-none">
        <AdminSidebar />
        <div className="flex flex-col bg-slate-900 h-full w-full md:flex-1 p-5 rounded overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </AdminController>
  );
}
