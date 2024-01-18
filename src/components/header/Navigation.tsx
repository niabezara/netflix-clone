"use client";
import React, { useCallback, useState } from "react";
import { Icons } from "../Icons";
import AccountMenu from "../AccountMenu";
import { IoIosArrowDown } from "react-icons/io";
import { PiBell } from "react-icons/pi";
import { SlMagnifier } from "react-icons/sl";
const list = [
  { title: "Home" },
  { title: "Series" },
  { title: "Films" },
  { title: "New & Popular" },
  { title: "My List" },
  { title: "Browse by Languages" },
];

export default function Navigation() {
  const [showBackground, setShowBackground] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40 text-white">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Icons.logo width="167px" height="30px" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          {list.map((item) => {
            return <div>{item.title}</div>;
          })}
        </div>
        {/* <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <ChevronDownIcon
            className={`w-4 text-white fill-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div> */}
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <SlMagnifier className="w-8" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <PiBell className="w-8" />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <IoIosArrowDown
              className={`w-4 text-white fill-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
