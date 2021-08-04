import React from "react";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  return (
    <header className="w-full absolute z-10">
      <div className="w-90vw mx-auto flex justify-between h-40 items-center">
        <div className="text-grayish-green text-right w-20 relative">
          <p className="text-xl font-bold">SACHIN</p>
          <p className="text-xl font-bold leading-3 mb-2">PASI</p>
          <div className="absolute right-0 w-4 h-0.5 rounded-lg bg-grayish-green"></div>
        </div>

        <div className="fixed top-12 right-12 z-20">
          <div
            onClick={() => setisNavOpen(!isNavOpen)}
            className=" flex justify-center items-center flex-col w-14 h-14 rounded-full bg-white shadow cursor-pointer"
          >
            <div
              className={`w-8 bg-grayish-green h-0.5 transform transition-transform  absolute ${
                isNavOpen ? "translate-y-0  -rotate-45 " : " -translate-y-1.5 "
              } `}
            ></div>
            <div
              className={`w-8 bg-grayish-green h-0.5 transform transition-transform  absolute   ${
                isNavOpen ? "rotate-45 translate-y-0.5" : "translate-y-1.5 "
              } `}
            ></div>
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 bottom-0 left-0 bg-white transform transition-transform h-screen w-full  duration-500 ${
            isNavOpen ? "" : "-translate-y-full"
          }`}
        >
          <div className="w-90vw mx-auto flex justify-between h-40 items-center">
            <div className="text-grayish-green text-right w-20 relative">
              <p className="text-xl font-bold">SACHIN</p>
              <p className="text-xl font-bold leading-3 mb-2">PASI</p>
              <div className="absolute right-0 w-4 h-0.5 rounded-lg bg-grayish-green"></div>
            </div>
          </div>
          <ul
            onClick={() => setisNavOpen(false)}
            className="flex flex-col w-4/6 mx-auto items-center justify-center "
          >
            <li className="block w-full self-start">
              <Divider />
              <Link href="/">
                <a className="flex py-6 text-grayish-green font-semibold text-6xl transform transition-transform  hover:translate-x-2 hover:text-blue">
                  Home
                </a>
              </Link>
            </li>
            <li className="block w-full self-start">
              <Divider />
              <Link href="/">
                <a className="flex py-6 text-grayish-green font-semibold text-6xl transform transition-transform  hover:translate-x-2 hover:text-blue">
                  Skills
                </a>
              </Link>
            </li>{" "}
            <li className="block w-full self-start">
              <Divider />
              <Link href="/">
                <a className="flex py-6 text-grayish-green font-semibold text-6xl transform transition-transform  hover:translate-x-2 hover:text-blue">
                  Projects
                </a>
              </Link>
            </li>
            <li className="block w-full self-start">
              <Divider />
              <Link href="/">
                <a className="flex py-6 text-grayish-green font-semibold text-6xl transform transition-transform  hover:translate-x-2 hover:text-blue">
                  Contact
                </a>
              </Link>
              <Divider />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Divider = () => (
  <div className="relative z-0 w-full h-0.5 bg-gray-100"></div>
);
