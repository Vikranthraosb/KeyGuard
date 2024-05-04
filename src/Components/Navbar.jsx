import React from "react";
import { FaGithub } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between px-3 py-2 pb-8 lg:pr-20 mb-16 lg:mb-8">
      <div className="text-center font-bold text-2xl text-white lg:ml-8">
        {" "}
        <h1 className="lg:text-3xl text-center font-bold mb-2 text-xl pt-2">
          <span className="text-green-500">&lt;</span>{" "}
          <span className="text-green-100">KeyGuard /</span>
          <span className="text-green-500">&gt;</span>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://github.com/Vikranthraosb/KeyGuard"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img
            src="/images/github-img.png"
            alt="GitHub"
            className="block object-contain w-14"
          />
        </a>
        <h1 className="text-white font-semibold">GitHub</h1>
      </div>
    </nav>
  );
}

export default Navbar;
