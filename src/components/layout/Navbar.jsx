import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import lightModeLogo from "../../assets/favicon.png";
import darkModeLogo from "../../assets/favicon.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const content = (
    <>
      <div
        className="absolute left-0 right-0 top-16 z-50 block h-full w-full
    bg-gray-200/70 text-darkblue backdrop-blur-lg transition dark:bg-blue-950/70 dark:text-gray-200 md:hidden"
      >
        <ul className="p-20 text-center text-2xl font-medium">
          <NavLink to="/" onClick={toggleMobileMenu}>
            <li className="border-b0 mb-8 cursor-pointer border-blue-950  transition hover:border-blue-200 hover:text-blue-200">
              Home
            </li>
          </NavLink>
          <NavLink to="/about" onClick={toggleMobileMenu}>
            <li className="border-b0 mb-8 cursor-pointer border-blue-950  transition hover:border-blue-200 hover:text-blue-200">
              About
            </li>
          </NavLink>
          <NavLink
            to="https://github.com/MyBaBB"
            target="_blank"
            onClick={toggleMobileMenu}
          >
            <li className="border-b0 cursor-pointer border-blue-950  transition hover:border-blue-200 hover:text-blue-200">
              GitHub
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="w-screen bg-gray-200 dark:bg-blue-500">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={darkMode ? darkModeLogo : lightModeLogo}
            className="h-8"
            alt="GitHub Issue Tracker Logo"
          />
          <span
            className="hidden self-center whitespace-nowrap text-2xl font-semibold text-blue-950
      dark:text-light md:block"
          >
            MyBaBB Issue Tracker
          </span>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-sm 
      text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-200 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <IoClose className="h-7 w-7" />
            ) : (
              <IoMenu className="h-7 w-7" />
            )}
          </button>
        </div>

        <div className="flex items-center">
          <div className="mr-4 hidden md:block">
            <ul
              className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4
       font-medium text-blue-950 dark:text-light md:mt-0 md:flex-row md:space-x-8 
       md:border-0 md:bg-white md:p-0 rtl:space-x-reverse"
            >
              <NavLink to="/">
                <li className="hover:text-blue-200 dark:text-blue-950 dark:hover:text-blue-200">
                  Home
                </li>
              </NavLink>
              <NavLink to="/about">
                <li className="hover:text-blue-200 dark:text-blue-950 dark:hover:text-blue-200">
                  About
                </li>
              </NavLink>
              <NavLink to="https://github.com/MyBaBB" target="blank">
                <li className="hover:text-blue-200 dark:text-blue-950 dark:hover:text-blue-200">
                  GitHub
                </li>
              </NavLink>
            </ul>
          </div>
          <div>
            <button
              className="flex h-6 w-10 items-center justify-center rounded-lg bg-darkgray text-blue-950"
              onClick={darkModeHandler}
            >
              {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
          </div>
        </div>
      </div>

      <div>{isMobileMenuOpen && content}</div>
    </nav>
  );
}

export default Navbar;
