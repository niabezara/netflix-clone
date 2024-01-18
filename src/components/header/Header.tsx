"use client";
import React, { startTransition } from "react";
import { Icons } from "../Icons";
import { useRouter, usePathname } from "../../navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./LocalSwitcher";

export default function Header() {
  const [isPending, startTransition] = React.useTransition();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const locale = useLocale();

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const pathname = usePathname();
  // const router = useRouter();
  // const locale = useLocale();

  // const onLinkClickitem = (selectedValue: "ka" | "en") => {
  //   startTransition(() => {
  //     router.replace(pathname, { locale: selectedValue });
  //   });
  // };
  return (
    <header className="px-8 py-6 w-full absolute z-10 flex justify-between items-center">
      <Icons.logo width="155px" height="55px" />
      <div className="flex gap-4">
        <LocaleSwitcher isMenuOpen={isMenuOpen} />
        {/* <select
          id="local"
          className="pr-4 bg-transparent text-white border-[#5E5E5E] border-[1px] rounded-sm py-1 px-4 mr-3"
          onChange={(e) => onLinkClickitem(e.target.value as "ka" | "en")}
        >
          <option value="en" className="text-black">
            English
          </option>
          <option value="ka" className="text-black">
            Georgian
          </option>
        </select> */}
        <Link href="/auth">
          <button className="bg-red-600 text-white p-1 px-2 rounded-md cursor-pointer">
            Sign in
          </button>
        </Link>
      </div>
    </header>
  );
}
