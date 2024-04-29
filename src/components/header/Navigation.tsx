"use client";
import React, { useCallback, useState } from "react";
import { Icons } from "../shared/Icons";
import AccountMenu from "../AccountMenu";
import { IoIosArrowDown } from "react-icons/io";
import { PiBell } from "react-icons/pi";
import { SlMagnifier } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";

const list = [
  { id: 1, title: "Home" },
  { id: 2, title: "Series" },
  { id: 3, title: "Films" },
  { id: 4, title: "New & Popular" },
  { id: 5, title: "My List" },
  { id: 6, title: "Browse by Languages" },
];

export default function Navigation() {
  const [showBackground, setShowBackground] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  return (
    <nav className="w-full  z-40 text-white">
      <div
        className={`pr-4  md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Link href="/">
          <Icons.logo width="120px" height="30px" />
        </Link>
        <div className="flex-row ml-8 gap-7 hidden lg:flex cursor-pointer">
          {list.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
        </div>
        {/* mobile menu */}
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <IoIosArrowDown
            className={`w-4 text-white fill-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          {showMobileMenu && (
            <div className="bg-black w-56 absolute top-8 left-[-67px] py-5 flex-col border-2 border-gray-800 flex">
              <div className="flex flex-col gap-4">
                {list.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="px-3 text-center text-white hover:underline"
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row ml-auto md:gap-7 items-center">
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
              <Image
                src="/images/default-blue.png"
                alt=""
                width={500}
                height={500}
              />
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
