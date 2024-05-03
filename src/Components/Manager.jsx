import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Manager() {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const ref = useRef();
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);
  const showpassword = () => {
    // toggle the eye image
    if (ref.current.src.includes("/images/hide-password.png")) {
      ref.current.src = "/images/show-password.png";
    } else {
      ref.current.src = "/images/hide-password.png";
    }
  };

  const savepassword = () => {
    console.log(form);
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
  };
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="absolute inset-0 -z-10 w-full h-full bg-gray-900 bg-[linear-gradient(to_right,#ff00ff1a_1px,transparent_1px),linear-gradient(to_bottom,#ff00ff1a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-x-0 top-0 -z-10 m-auto w-[310px] h-[310px] rounded-full bg-pink-500 opacity-40 blur-[130px]"></div>
      </div>
      {/* backround is taken from - https://sinqi.tools/backgrounds . ( Darker version not properly working, so took lighter one and changed colors) */}
      <div className="mx-auto rounded-md max-w-4xl">
        <p className="cursive text-zinc-400 text-2xl text-center uppercase font-semibold my-3">
          Your Own Password Manager...
        </p>
        <div className=" flex flex-col p-4 text-black gap-2 justify-around">
          <input
            onChange={handlechange}
            value={form.site}
            className="cursive rounded-full border-[2px] border-green-500 w-full py-1 px-4 bg-zinc-800"
            type="text"
            name="site"
            id=""
            placeholder="Enter Website URL."
          />
          <div className="flex w-full justify-between gap-6">
            <div className="w-1/2 flex justify-center items-center">
              <input
                onChange={handlechange}
                value={form.username}
                className="cursive rounded-full border-[2px] border-green-600 w-full py-1 px-4 bg-zinc-800"
                type="text"
                name="username"
                id=""
                placeholder="Enter Username."
              />
            </div>
            <div className="flex items-center justify-around w-1/2 gap-0">
              <input
                onChange={handlechange}
                value={form.password}
                className="cursive rounded-full  border-[2px] border-green-500 w-full py-1 px-4 bg-zinc-800"
                type="text"
                name="password"
                id=""
                placeholder="Enter Password."
              />
              <span className="h-10 flex items-center justify-center">
                <img
                  ref={ref}
                  onClick={() => showpassword()}
                  src="/images/show-password.png"
                  alt=""
                  className="block object-contain"
                  style={{ height: "160%" }} // Adjust the height as needed
                />
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              onClick={() => savepassword()}
              className="uppercase text-white border-[1.8px] border-zinc-500 py-1 px-1 rounded-xl flex justify-center items-center gap-2 hover:text-zinc-500 hover:border-zinc-200 transition-all duration-[.75s] ease-in-out"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                colors="primary:#16c72e"
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>
        <div className="passwords">
          <h2 className="cursive text-lg text-center uppercase text-white font-semibold mt-8 mb-8">
            {" "}
            Your passwords :
          </h2>
          {passwordArray.length === 0 && (
            <div className="cursive text-white uppercase text-center text-4xl my-16 font-bold ">
              No password to show !
            </div>
          )}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-2xl">
              <thead className=" bg-green-800  bg-opacity-[.25] text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-200 bg-opacity-[.1]">
                <tr>
                  <td className="text-center min-w-32 text-white px-1 py-3">
                    The SlidingÜ Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="text-center min-w-32 text-white px-1 py-3">
                    Malcolm Lockyer
                  </td>
                  <td className="text-center min-w-32 text-white px-1 py-3">
                    1961
                  </td>
                </tr>
                <tr>
                  <td className="text-center min-w-32 text-white px-1 py-3">
                    Witchy Woman
                  </td>
                  <td className="text-center min-w-32 text-white px-1 py-3">
                    The Eagles
                  </td>
                  <td className="text-center min-w-32 text-white px-1 py-3">
                    1972
                  </td>
                </tr>
                <tr>
                  <td className="text-center min-w-32 text-white px-1 py-3">
                    Shining Star
                  </td>
                  <td className="text-center min-w-32 text-white px-1 py-3">
                    Earth, Wind, and Fire
                  </td>
                  <td className="text-center min-w-32 text-white px-1 py-3">
                    1975
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Manager;
