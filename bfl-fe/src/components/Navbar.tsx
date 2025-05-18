import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 bg-transparent z-10 h-32">
      <div className="mx-auto h-full flex items-center justify-between !px-12 !pt-2">
        <img src={logo} alt="Logo" className="h-28 w-auto" />

        <div className="flex space-x-6">
          {/* Inline button in top right */}
          <Button label="Login" href="/signup" />
          {/* <button className="bg-white text-black font-semibold px-4 py-4 rounded-lg shadow hover:bg-gray-100 transition">
            Sign In
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
