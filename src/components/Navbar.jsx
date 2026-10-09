import React, { useEffect, useState } from "react";
import "../style/NavbarStyle.css";
import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { IoCaretDownSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCart } from "./CartContext";
import { GiHamburgerMenu } from "react-icons/gi";

import ResponsiveMenu from "./ResponsiveMenu";
import { SlList } from "react-icons/sl";

const Navbar = () => {
  const { cartProduct } = useCart();
  const [location, setlocation] = useState();
  const [openNavbar, setOpenNavbar] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location1 = await axios.get(url);
        const exactLocation = location1.data.address;
        setlocation(exactLocation);
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    getLocation();
  }, []);

  const [openDropDown, setOpenDropDown] = useState(false);
  const toggleEffect = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div className="bg-white shadow-2xl py-3 px-4 md:px-0">
      <div className=" max-w-6xl mx-auto flex justify-between items-center">
        {/* logo section  */}
        <div className="flex items-center gap-7">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-400 font-serif ">360 </span>
              <span className="md:deva  text-3xl text-[#760776]">Kingdom</span>
            </h1>
          </Link>
          <div className="md:flex items-center gap-1 text-grey-700 cursor-pointer hidden">
            <MapPin className="text-red-400" />
            <span className="text-red-700 font-bold">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.county}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <IoCaretDownSharp onClick={() => toggleEffect()} />
          </div>
          {openDropDown ? (
            <div className="w-[300px] h-max open_drop_down fixed z-50 top-15 left-104 border-gray-100 border-3 rounded-md p-5">
              <h1 className="font-semibold mb-4 flex justify-between text-xl">
                change location
                <span>
                  <IoCloseCircleSharp onClick={() => toggleEffect()} />
                </span>
              </h1>
              <button
                onClick={() => getLocation()}
                className="sign_in_btn font-semibold text-white p-2 rounded-md cursor-pointer btn_hover"
              >
                Detect my location
              </button>
            </div>
          ) : null}
        </div>
        {/* Menu section */}
        <nav className="flex gap-7 items-center  ">
          <ul className="md:flex gap-7 items-center text-xl font-bold hidden">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-700" : "text-black"} cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/Products"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-700" : "text-black"} cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-700" : "text-black"} cursor-pointer`
              }
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              to={"/About"}
              className={({ isActive }) =>
                `${isActive ? "border-b-3 transition-all border-red-700" : "text-black"} cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
          </ul>
          <Link to={"/Cart"} className="relative ">
            <FaCartShopping className="h-7 w-7 " />
            <span className="bg-red-500 px-2 text-white rounded-full absolute -top-3 -right-2">
              {cartProduct.length}
            </span>
          </Link>
          <div className="ml-8 hidden md:block">
            <button className=" sign_in_btn py-1 text-white font-semibold px-2 rounded-md m-1   cursor-pointer">
              Sign In
            </button>
          </div>
          {openNavbar ? (
            <GiHamburgerMenu
              className="w-7 h-7 md:hidden"
              onClick={() => setOpenNavbar(false)}
            />
          ) : (
            <SlList
              className="w-7 h-7 md:hidden"
              onClick={() => setOpenNavbar(true)}
            />
          )}
        </nav>
      </div>
      <ResponsiveMenu openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
    </div>
  );
};

export default Navbar;
