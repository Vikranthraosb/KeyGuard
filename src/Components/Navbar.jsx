import React from "react";

function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between px-10 py-5">
      <div className="text-center font-bold text-2xl text-white ">
        {" "}
        <h1 className="text-3xl text-center font-bold mb-2">
          <span className="text-green-500">&lt;</span>{" "}
          <span className="text-green-100">Passop/;</span>
          <span className="text-green-500">&gt;</span>
        </h1>
      </div>
      <ul>
        <li className="flex gap-8 ">
          <a
            href=""
            className="capitalize hover:font-bold font-semibold text-emerald-300 text-lg"
          >
            HOME
          </a>
          <a
            href=""
            className="uppercase hover:font-bold font-semibold text-emerald-300 text-lg"
          >
            About
          </a>
          <a
            href=""
            className="uppercase hover:font-bold font-semibold text-emerald-300 text-lg"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
