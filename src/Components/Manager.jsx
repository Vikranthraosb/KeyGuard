import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { PiCopyDuotone } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

function Manager() {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const ref = useRef();
  const passwordref = useRef();
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copytext = (text) => {
    navigator.clipboard.writeText(text);
    // copy text to keyboard
  };

  const showpassword = () => {
    passwordref.current.type = "text";
    // toggle the eye image
    if (ref.current.src.includes("/images/hide-password.png")) {
      ref.current.src = "/images/show-password.png";
      passwordref.current.type = "password";
    } else {
      passwordref.current.type = "text";
      ref.current.src = "/images/hide-password.png";
    }
  };

  const savepassword = () => {
    console.log(form);
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      ); // this line stores password in local storage, even after refresh
      setform({ site: "", username: "", password: "" }); // after saving, input field cleared
    } else {
      alert("Min length should be 4 !");
    }
  };

  const deletepassword = (id) => {
    console.log("deleted pasword with id ", id);
    let c = confirm("Do you really want to Delete the Password ?");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id != id));
      // localStorage.setItem(
      //   "passwords",
      //   JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      // );
    }
  };
  const editpassword = (id) => {
    console.log("edited pasword with id ", id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
    // console.log(form);
    // setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    // localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
  };
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
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
            id="site"
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
                id="username"
                placeholder="Enter Username."
              />
            </div>
            <div className="flex items-center justify-around w-1/2 gap-0">
              <input
                ref={passwordref}
                onChange={handlechange}
                value={form.password}
                className="lg:cursive rounded-full  border-[1px] border-green-500 w-full py-1 px-4 bg-zinc-800 text-zinc-300"
                type="password"
                name="password"
                id="password"
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
              className="uppercase text-white border-[1.8px] border-zinc-500 py-1 px-3 lg:mt-4 rounded-xl flex justify-center items-center gap-2 hover:text-zinc-500 hover:border-zinc-200 transition-all duration-[.75s] ease-in-out"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                colors="primary:#16c72e"
              ></lord-icon>
              Save
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
            <table className="table-auto w-full overflow-hidden rounded-2xl mb-3">
              <thead className=" bg-green-800  bg-opacity-[.25] text-zinc-300">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>

              <tbody className="bg-green-200 bg-opacity-[.1]">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center min-w-32 text-zinc-400 px-1 py-4 ">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                      </td>
                      <td className="text-center min-w-32 text-zinc-400 px-1 py-4">
                        {item.username}{" "}
                      </td>
                      <td className="text-center min-w-32 text-zinc-400 px-1 py-4 flex items-center justify-center gap-3">
                        {item.password}{" "}
                        <PiCopyDuotone
                          className="copytext text-green-300 text-lg cursor-pointer "
                          onClick={() => {
                            copytext(item.password);
                          }}
                        />
                      </td>
                      <td className="text-center min-w-32 text-zinc-400 px-1 py-4 cursor-pointer ">
                        <span className="flex items-center justify-center gap-2">
                          <FaRegEdit
                            onClick={() => {
                              editpassword(item.id);
                            }}
                          />
                          <RiDeleteBin6Line
                            onClick={() => {
                              deletepassword(item.id);
                            }}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className="footer md:text-2xl text-center cursive capitalize text-zinc-300 p-3 pb-8">
          -Vikranth
        </div>
      </div>
    </>
  );
}

// local storage is working fine, leaving it here .
// video source at : https://youtu.be/sgNZcK8QIyc?si=4hm2RR-HZBGbXst3
export default Manager;
