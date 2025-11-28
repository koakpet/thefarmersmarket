"use client";

import {useState} from "react";

function LogIn() {
  const [isHidden, setIsHidden] = useState(true);

  function signUp() {
    setIsHidden(!isHidden);
  }

  function signIn() {
    setIsHidden(!isHidden);
  }

  return (
    <div className="mt-24 m-auto w-4/12 h-5/6 flex justify-center items-center">
      {isHidden ? (
        <form action="">
          <p className="font-semibold">Sign in</p>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="mt-3 rounded-md text-md p-1.5 w-full bg-white outline-1 outline-gray-300 focus:outline-green-300"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="mt-3 rounded-md text-md p-1.5 w-full outline-1 bg-white   outline-gray-300 focus:outline-green-300"
          />
          <button className="mt-3 w-full p-1.5 border border-green-300 bg-green-600 hover:bg-green-700 rounded-md text-white">
            Sign in
          </button>
          <p className="text-xs text-center">
            If you don't have an account,
            <span className="text-blue-700 cursor-pointer" onClick={signUp}>
              {" "}
              Sign up
            </span>{" "}
            here.
          </p>
        </form>
      ) : (
        <form action="">
          <p className="font-semibold">Sign up</p>
          <div className="mt-3 flex gap-3">
            <input
              type="text"
              id="fName"
              placeholder="First Name"
              className="rounded-md text-md p-1.5 bg-white outline-1 outline-gray-300 focus:outline-green-300"
            />
            <input
              type="text"
              id="lName"
              placeholder="Last Name"
              className="rounded-md text-md p-1.5  bg-white outline-1 outline-gray-300 focus:outline-green-300"
            />
          </div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="mt-3 rounded-md text-md p-1.5 w-full bg-white outline-1 outline-gray-300 focus:outline-green-300"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="mt-3 rounded-md text-md p-1.5 w-full outline-1 bg-white   outline-gray-300 focus:outline-green-300"
          />
          <button className="mt-3 w-full p-1.5 border border-green-300 bg-green-600 hover:bg-green-700 rounded-md text-white">
            Sign up
          </button>
          <p className="text-xs text-center">
            If you already have an account,
            <span className="text-blue-700 cursor-pointer" onClick={signIn}>
              {" "}
              Sign in
            </span>{" "}
            here
          </p>
        </form>
      )}
    </div>
  );
}

export default LogIn;
