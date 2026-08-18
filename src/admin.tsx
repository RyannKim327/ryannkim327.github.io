import { useState } from "react";
import { Link, Outlet } from "react-router";
import AdminLogin from "./components/admin/login";

export default function Admin() {
  const [verified, setVerified] = useState(false)

  const menus = [
    {
      name: "Dashboard",
      endpoint: ""
    },
    {
      name: "Experiences",
      endpoint: "experiences"
    },
    {
      name: "Projects",
      endpoint: "project"
    }
  ]

  return (
    <div className='flex flex-col w-dvw h-dvh bg-bg text-fg'>
      {
        verified ?
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-col sticky top-0 bg-bg p-2 w-full">
              <span className="silk text-lg">Master Piece of Paper</span>
              <span>Main Page</span>
            </div>
            <div className="flex h-full w-full gap-2">
              <div className="flex flex-col w-[calc(25%-0.5rem)] bg-card h-full p-2">
                {
                  menus.map(menu => {
                    return (
                      <Link to={menu.endpoint}>{menu.name}</Link>
                    )
                  })
                }
              </div>
              <div className="flex flex-col w-[calc(75%-0.5rem)] h-full p-2 overflow-y-auto">
                <Outlet />
              </div>
            </div>
          </div>
          :
          <AdminLogin setVerified={setVerified} />
      }
    </div >
  )
}
