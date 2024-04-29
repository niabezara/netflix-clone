import { Icons } from "@/components/shared/Icons";
import SignIn from "@/components/login/SignIn";
import React from "react";

export default function page() {
  return (
    <div className="relative h-full w-full bg-mainbg bg-no-repeat bg-center bg-fixed">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Icons.logo width="167px" height="45px" />
        </nav>
        <SignIn />
      </div>
    </div>
  );
}
