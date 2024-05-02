import React from "react";

function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between px-10 py-5">
      <div className="text-center font-bold text-2xl text-white ">PassOp..</div>
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
