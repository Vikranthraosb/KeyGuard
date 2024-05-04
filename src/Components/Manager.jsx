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
    <div className="">
      <div className="mx-auto rounded-md max-w-4xl">
        <p className="lg:cursive text-zinc-400 lg:text-2xl text-xl text-center uppercase font-semibold my-3">
          Your Own Password Manager...
        </p>
        <div className=" flex flex-col p-4 text-black gap-2 justify-around">
          <input
            onChange={handlechange}
            value={form.site}
            className="lg:cursive rounded-full border-[1px] border-green-500 w-full py-1 px-4 bg-zinc-800 text-zinc-300"
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
                className="lg:cursive rounded-full border-[1px] border-green-600 w-full py-1 px-4 bg-zinc-800 text-zinc-300"
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
                className="lg:cursive rounded-full  border-[1px] border-green-500 w-full py-1 px-4 bg-zinc-800 text-zinc-300"
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
          <h2 className="cursive text-lg text-center uppercase text-zinc-400 font-semibold mt-8 mb-8">
            {" "}
            Your passwords :
          </h2>
          {passwordArray.length === 0 && (
            <div className="cursive text-zinc-300 uppercase text-center text-4xl my-16 font-bold ">
              No password to show !
            </div>
          )}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-2xl">
              <thead className=" bg-green-800  bg-opacity-[.25] text-zinc-300">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>

              <tbody className="bg-green-200 bg-opacity-[.1]">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center min-w-32 text-zinc-400 px-1 py-3">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                      </td>
                      <td className="text-center min-w-32 text-zinc-400 px-1 py-3">
                        {item.username}{" "}
                      </td>
                      <td className="text-center min-w-32 text-zinc-400 px-1 py-3">
                        {item.password}{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Manager;
