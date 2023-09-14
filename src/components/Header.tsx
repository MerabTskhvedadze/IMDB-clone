import Link from "next/link";

import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

import { MenuItem, DarkModeSwitch } from ".";

export function Header() {
  return (
    <div className="flex justify-between items-center mx-2 sm:mx-auto py-6 max-w-6xl ">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 mr-1 rounded-lg">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
