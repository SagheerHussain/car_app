import "flowbite";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/", active: true },
    { name: "About", link: "/about", active: false },
    { name: "Cars", link: "/cars", active: false },
    { name: "Services", link: "/services", active: false },
    { name: "Inventory", link: "/inventory", active: false },
    { name: "Events", link: "/events", active: false },
    { name: "Blogs", link: "/blogs", active: false },
    { name: "Contact Us", link: "/contact-us", active: false },
  ];

  return (
    <nav className="bg-zinc-950/10 backdrop-blur-md fixed top-0 w-full border-b border-zinc-800 z-50">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4 md:px-12 px-3">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img src={logo} className="h-10" alt="skynetsilicon" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SNS <span className="text-red-600">CARS</span>
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center gap-x-4">
            <button
              type="button"
              className="flex items-center justify-center text-zinc-100 bg-zinc-800/40 hover:bg-zinc-700/40 focus:outline-none rounded-xl text-base font-normal w-10 h-10 ease-in-out duration-30 relative"
            >
              <FaShoppingCart />

              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-xs text-zinc-50 font-normal">
                5
              </div>
            </button>

            <button
              type="button"
              className="flex items-center justify-center text-zinc-100 bg-zinc-800/40 hover:bg-zinc-700/40 focus:outline-none rounded-xl text-base font-normal w-10 h-10 ease-in-out duration-30 relative"
            >
              <FaUserAlt />
            </button>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-400 rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="text-xl" />
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className="flex md:items-center items-start flex-col md:p-4 p-4 mt-4 text-lg font-normal border border-zinc-800 rounded-lg md:space-x-8 md:space-y-0 space-y-3 rtl:space-x-reverse md:flex-row md:mt-0 
          md:border-0 lg:bg-transparent bg-zinc-900 z-50"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className={`hover:text-red-600 ease-in-out duration-300 ${
                    item.active ? "text-red-600 font-medium" : "text-zinc-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
