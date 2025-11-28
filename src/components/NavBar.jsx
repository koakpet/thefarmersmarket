"use client";

import Link from "next/link";
import {useState} from "react";
import {UserCircleIcon} from "lucide-react";
import {ShoppingCart} from "lucide-react";
import {X} from "lucide-react";
import LogIn from "./LogIn";

function NavBar() {
  const [logInToggle, setLogInToggle] = useState(false);

  function logInBotton() {
    setLogInToggle(true);
  }

  function close() {
    setLogInToggle(false);
  }

  return (
    <nav className="fixed top-0 w-full py-3 px-3 md:px-28 z-50 bg-gray-50 shadow-sm">
      <div className="flex justify-between">
        <Link href="/" className="festive text-2xl md:text-3xl">
          the
          <span className="atma text-green-700 text-3xl font-semibold md:text-5xl md:align-sub">
            farmers'
          </span>
          market
        </Link>

        <div className="flex justify-between gap-4 items-center">
          <input
            type="search"
            name="Search"
            id="search"
            className="hidden md:block text-sm p-1 outline-1 outline-slate-300 rounded-sm focus:outline-green-300"
          />
          <Link href="/cart" className="cursor-pointer hover:text-slate-600">
            <ShoppingCart size="18" />
          </Link>

          {/* <Link href="/signin" className="cursor-pointer hover:text-slate-600">
            <UserCircleIcon size="21" />
          </Link> */}

          <div
            className="cursor-pointer hover:text-slate-600"
            onClick={logInBotton}
          >
            <UserCircleIcon size="21" />
          </div>
        </div>
        {/* <input type="search" name="Search" id="search" className="text-2xl md:hidden bg-slate-300 rounded-4xl" /> */}

        {logInToggle && (
          <div className="fixed top-15 left-0 h-full w-full md:top-20 md:left-[7vw] md:h-10/12 md:w-[84vw] bg-gray-50 border border-gray-300 md:rounded-xl shadow-2xl">
            <button
              onClick={close}
              className="hidden md:block absolute right-2 top-1.5 cursor-pointer hover:text-slate-600"
            >
              <X size="15" />
            </button>
            <button
              onClick={close}
              className="md:hidden text-xs hover:underline active:underline absolute right-2 top-1.5 cursor-pointer hover:text-slate-600 active:text-slate-600"
            >
              close
            </button>
            <LogIn />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
