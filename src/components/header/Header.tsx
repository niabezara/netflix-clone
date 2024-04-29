"use client";
import React, { startTransition } from "react";
import { Icons } from "../shared/Icons";
import { useRouter, usePathname } from "../../navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./LocalSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="px-6 lg:px-8 py-6 w-full absolute z-10 flex justify-between items-center">
      <Icons.logo width="100px" height="50px" />
      <div className="flex gap-4">
        <LocaleSwitcher isMenuOpen={isMenuOpen} />
        <Link href="/auth">
          <button className="bg-red-600 text-white p-1 px-2 rounded-md cursor-pointer">
            Sign in
          </button>
        </Link>
      </div>
    </header>
  );
}
