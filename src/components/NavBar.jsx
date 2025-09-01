"use client";

import Link from "next/link";
import {useState} from "react";
import {UserCircleIcon} from "lucide-react";
import {ShoppingCart} from "lucide-react";
import {X} from "lucide-react";
import LogIn from "./LogIn";

function NavBar() {
  const [logInToggle, setLogInToggle] = useState(true);

  function logInBotton() {
    setLogInToggle(true);
  }

  function close() {
    setLogInToggle(false);
  }

  return (
    <nav className="fixed top-0 w-full py-3 px-3 md:px-28 z-50 bg-gray-50 opacity-95 shadow-sm">
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
            className="text-2xl hidden md:block bg-slate-300 rounded-4xl"
          />
          <div className="cursor-pointer hover:text-slate-600">
            <ShoppingCart size="18" />
          </div>

          <div
            className="cursor-pointer hover:text-slate-600"
            onClick={logInBotton}
          >
            <UserCircleIcon size="21" />
          </div>
        </div>
        {/* <input type="search" name="Search" id="search" className="text-2xl md:hidden bg-slate-300 rounded-4xl" /> */}

        {logInToggle && (
          <div className="fixed top-16 left-[0.5vw] h-10/12 w-[96vw] md:top-20 md:left-[7vw] md:h-10/12 md:w-[84vw] bg-gray-50 border border-gray-300 rounded-xl shadow-2xl">
            <button
              onClick={close}
              className="absolute right-2 top-1.5 cursor-pointer hover:text-slate-600"
            >
              <X size="15" />
            </button>
            <LogIn />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
