import React from "react";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Data = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Employer",
    path: "/admin/employer",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "User",
    path: "/admin/userlist",
    icon: <FaIcons.FaHome />,
  },
];

function Sidebar() {
  const activeLink =
    "hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-brown-500text-2xl space-x-1 font-bold bg-red-500";
  const normalLink =
    "hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-brown-500 text-2xl space-x-1 font-bold";
  return (
    <>
      <section>
        <div className="text-white">
          {Data.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Sidebar;
