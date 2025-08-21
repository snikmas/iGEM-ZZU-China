// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";  

export default function Header() {
  return (
    <header className="bg-[#D2E0E4] sticky shadow-md z-50 flex flex-row justify-between items-center align-middle">
      <div className="w-full h-full px-30 flex justify-between items-center align-middle">
        <Link to="/" className="flex items-center">
          <img
            src="https://static.igem.wiki/teams/5822/assets/logo.webp"
            alt="Logo"
            className="w-20 m-0! shadow-none!"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
