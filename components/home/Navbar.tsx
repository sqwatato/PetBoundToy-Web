/**
 * Navbar
 */

import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-screen opacity-100" id="navbar__custom" style={{zIndex: 6}}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <Link href="/" className="text-xl text-black font-bold font__poppins">
            Petbound
          </Link>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  text-gray-400 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="w-full md:block md:w-auto items-center" id="navbar-default">
          <ul className="font-light flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white justify-center">
            <li>
              <Link
                href="#Home"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-black md:hover:bg-transparent navbar__elements"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#About_Us"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-black md:hover:bg-transparent navbar__elements"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#Search"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-black md:hover:bg-transparent navbar__elements"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                href="#Contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:p-0 md:hover:text-black  md:hover:bg-transparent navbar__elements"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:block md:w-auto items-center">
          <ul className="font-light flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-sm bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white justify-center pr-9 pl-9">
              <li>
                <Link
                  href="/login"
                  className="block py-2 pl-3 pr-4 text-white hover:bg-gray-100 md:border-0 md:hover:text-white-700 md:p-0 md:hover:text-white-500 md:hover:bg-green-400 bg-green-500 rounded-full"
                  id="navbar__contact"
                >
                  Log in
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}