import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { Award, BookOpen, Briefcase, Download, FolderKanban, LayoutDashboard, LogOut, Menu, Upload, X } from "lucide-react";
import { ToastContainer } from "react-toastify";
import AdminLogin from "./components/admin/login";
import { session } from "./lib/storage";

const menus = [
  {
    name: "Dashboard",
    endpoint: "/admin",
    icon: LayoutDashboard,
    end: true
  },
  {
    name: "Blog",
    endpoint: "/admin/blog",
    icon: BookOpen,
    end: false
  },
  {
    name: "Certificates",
    endpoint: "/admin/certificates",
    icon: Award,
    end: false
  },
  {
    name: "Projects",
    endpoint: "/admin/project",
    icon: FolderKanban,
    end: false
  },
  {
    name: "Download",
    endpoint: "/admin/download",
    icon: Download,
    end: false
  },
  {
    name: "Experiences",
    endpoint: "/admin/experiences",
    icon: Briefcase,
    end: false
  },
  {
    name: "Upload",
    endpoint: "/admin/upload",
    icon: Upload,
    end: false
  }
]

export default function Admin() {
  const [verified, setVerified] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function logout() {
    session("admin", "")
    session("expiration", "")
    setVerified(false)
    setMenuOpen(false)
  }

  return (
    <div className='flex flex-col w-dvw h-dvh bg-bg text-fg'>
      {
        verified ?
          <div className="flex flex-col w-full h-full">
            <header className="flex shrink-0 items-center justify-between gap-3 border-b border-fg/10 bg-card/60 p-4 py-2 backdrop-blur">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="flex size-9 items-center justify-center rounded-md bg-input md:hidden"
                  aria-label="Toggle menu">
                  {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
                <div className="flex flex-col">
                  <span className="silk text-lg leading-tight">Master Piece of Paper</span>
                  <span className="px-2 text-[0.75rem] text-fg/60">Administrative Panel</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden items-center gap-2 rounded-full border border-fg/10 px-3 py-1 text-[0.7rem] text-fg/60 sm:flex">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Authenticated
                </span>
                <button
                  type="button"
                  onClick={logout}
                  className="flex items-center gap-2 rounded-md border border-fg/10 px-3 py-2 text-sm transition-colors hover:bg-input"
                  title="Log out">
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </header>
            <div className="relative flex min-h-0 flex-1 w-full gap-2">
              {
                menuOpen ?
                  <div
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden" />
                  : null
              }
              <aside
                className={`${menuOpen ? "flex" : "hidden"} absolute inset-y-0 left-0 z-40 w-64 shrink-0 flex-col gap-1 border-r border-fg/10 bg-card p-3 md:static md:flex md:w-[calc(25%-0.5rem)]`}>
                <span className="px-2 pb-2 text-[0.7rem] uppercase tracking-[0.2em] text-fg/50">Menu</span>
                {
                  menus.map(menu => {
                    const Icon = menu.icon
                    return (
                      <NavLink
                        key={menu.name}
                        to={menu.endpoint}
                        end={menu.end}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${isActive ? "bg-fg text-bg" : "text-fg/70 hover:bg-input hover:text-fg"}`}>
                        <Icon className="size-4" />
                        {menu.name}
                      </NavLink>
                    )
                  })
                }
                <div className="mt-auto rounded-md border border-fg/10 p-3 text-[0.7rem] text-fg/50">
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Admin session active
                  </div>
                </div>
              </aside>
              <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto p-3 md:p-4">
                <Outlet />
              </main>
            </div>
          </div>
          :
          <AdminLogin setVerified={setVerified} />
      }
      <ToastContainer position="bottom-right" theme="colored" />
    </div >
  )
}
