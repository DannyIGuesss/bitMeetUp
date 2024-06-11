"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative flex justify-between items-center bg-gradient-to-r from-purple via-blue to-ocean w-full h-screen-10 h-16">
      <div className="flex justify-bewteen w-2/4 pl-2 md:pl-4">
        <img
          src="../../crypto.png"
          alt="Crypto Logo"
          className="h-full oject-cover w-16"
        />
        <h1 className="text-xl text-gray self-center pl-3">BitMeetUp</h1>
      </div>
      <div className="relative md:hidden">
        <button
          className={`text-white ${menuOpen ? "bg-gray" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <img src="../../menu.png" alt="icon" className=" h-16 w-18" />
        </button>
        {menuOpen && (
          <ul className="absolute flex flex-col justify-around bg-gray mt-2 py-2 px-4 rounded-lg shadow-lg z-10 right-5">
            <button className="text-center bg-blue px-3.5 py-2 rounded-md my-1">
              <li>Location</li>
            </button>
            <button className="text-center bg-blue px-3.5 py-2 rounded-md my-1">
              <li>News</li>
            </button>
            <button className="text-center bg-blue px-3.5 py-2 rounded-md my-1">
              <li>Pay</li>
            </button>
          </ul>
        )}
      </div>
      <div className="hidden md:flex md:flex-row md:w-2/4">
        <ul className="flex justify-around w-full p-5 ">
          <button
            className="flex justify-center items-center bg-ocean hover:bg-teal rounded-md h-10"
            style={{ minWidth: "20%" }}
          >
            <li>Location</li>
          </button>
          <button
            className="flex justify-center items-center bg-ocean hover:bg-teal rounded-md h-10"
            style={{ minWidth: "20%" }}
          >
            <li>News</li>
          </button>
          <button
            className="flex justify-center items-center bg-ocean hover:bg-teal rounded-md h-10"
            style={{ minWidth: "20%" }}
          >
            <li>Pay</li>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
