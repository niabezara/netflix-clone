"use client";
import React from "react";
import Navigation from "../header/Navigation";
import Featured from "../feature/Featured";
import Listitems from "../list/Listitems";

function Home() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Featured type="movie" />
      <Listitems />
    </div>
  );
}

export default Home;
