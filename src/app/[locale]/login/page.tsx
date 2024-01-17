import SignIn from "@/components/SignIn";
import { Shell } from "@/components/shell";
import React from "react";

export default function page() {
  return (
    <Shell variant="mainShell">
      <SignIn />
    </Shell>
  );
}
