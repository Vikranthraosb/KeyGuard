import React from "react";
import { BiShow } from "react-icons/bi";

function Manager() {
  return (
    <div>
      <div class="absolute inset-0 -z-10 w-full h-full bg-gray-900 bg-[linear-gradient(to_right,#ff00ff1a_1px,transparent_1px),linear-gradient(to_bottom,#ff00ff1a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute inset-x-0 top-0 -z-10 m-auto w-[310px] h-[310px] rounded-full bg-pink-500 opacity-40 blur-[130px]"></div>
      </div>
      {/* backround is taken from - https://sinqi.tools/backgrounds . ( Darker version not properly working, so took lighter one and changed colors) */}
      <div className="mx-auto bg-slate-600 rounded-md max-w-4xl">
        <h1 className="text-3xl text-center font-bold">
          <span className="text-green-500">&lt;</span>{" "}
          <span className="text-green-100">Passop/;</span>
          <span className="text-green-500">&gt;</span>
        </h1>
        <p className="text-zinc-300 text-xl text-center capitalize font-semibold">
          Your Own Password Manager
        </p>
        <div className=" flex flex-col p-4 text-black gap-4 justify-around">
          <input
            className="rounded-full border-[2px] border-green-800 w-full py-1 px-4"
            type="text"
            name=""
            id=""
            placeholder="Enter Website URL."
          />
          <div className="flex w-full justify-between gap-6">
            <div className="w-1/2 flex justify-center items-center">
              <input
                className="rounded-full border-[2px] border-green-800 w-full py-1 px-4"
                type="text"
                name=""
                id=""
                placeholder="Enter Username."
              />
            </div>

            <div className="flex items-center justify-start w-1/2 gap-2">
              <input
                className="rounded-full  border-[2px] border-green-600 w-full py-1 px-4"
                type="text"
                name=""
                id=""
                placeholder="Enter Password."
              />
              <BiShow className="w-[7vw] h-[3vw] text-white" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="uppercase text-white font-semibold border-[1.8px] border-zinc-500 py-1 px-1 rounded-xl flex justify-center items-center gap-2 hover:text-zinc-500 hover:border-zinc-200 transition-all duration-[.75s] ease-in-out">
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                colors="primary:#16c72e"
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;
