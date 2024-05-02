import React from "react";

function Navbar() {
  return (
    <nav className="bg-purple-400 flex items-center justify-between px-10 py-5">
      <div className="text-center font-semibold text-xl ">PassOp</div>
      <ul>
        <li className="flex gap-8 ">
          <a
            href=""
            className="capitalize hover:font-bold font-semibold italic text-emerald-800"
          >
            HOME
          </a>
          <a
            href=""
            className="uppercase hover:font-bold font-semibold italic text-emerald-800"
          >
            About
          </a>
          <a
            href=""
            className="uppercase hover:font-bold font-semibold italic text-emerald-800"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
