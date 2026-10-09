import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ openNavbar, setOpenNavbar }) => {
  const username = "";

  return (
    <div
      className={`${openNavbar ? "left-0 " : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex flex-col px-8 pt-16 pb-6 w-[75%] bg-white text-black h-screen justify-between md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <div className="flex justify-start items-center gap-3">
          {username ? (
            <FaUserCircle className="w-10 h-10 rounded-full bg-gray-200" />
          ) : (
            <FaUserInjured className="w-10 h-10" />
          )}
          <div>
            <h1 className="font-bold text-orange-800">hello user</h1>
            <h1 className="text-sm text-slate-700">Premium users only</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="flex flex-col gap-7 font-semibold text-2xl">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-700" : "text-black"} cursor-pointer`
              }
              onClick={() => setOpenNavbar()}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/Products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-700" : "text-black"} cursor-pointer`
              }
              onClick={() => setOpenNavbar()}
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-700" : "text-black"} cursor-pointer`
              }
              onClick={() => setOpenNavbar()}
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              to={"/About"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-700" : "text-black"} cursor-pointer`
              }
              onClick={() => setOpenNavbar()}
            >
              <li>About</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
