import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Logo, CustomLink, CustomMobileLink } from "../index";
import { GithubIcon, LinkedInIcon, XIcon } from "./icons";
import { motion } from "framer-motion";
import useDarkTheme from "./hooks/useDarkTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [mode, setMode] = useDarkTheme();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <header
      className="w-full px-20 py-8 font-medium md:flex md:items-center md:justify-between relative"
      id="Home"
    >
      <button
        className="flex flex-col justify-center items-center md:hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-200 ease-in-out h-0.5 w-6 rounded-sm ${
            toggle ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-200 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
            toggle ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-200 ease-in-out h-0.5 w-6 rounded-sm ${
            toggle ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full md:flex md:justify-between md:items-center hidden">
        <nav className="space-x-6 md:text-xl">
          <CustomLink href="./" title="Home" />
          <CustomLink href="./about" title="About" />
          <CustomLink href="./contact" title="Contact" />
          <CustomLink href="./projects" title="Projects" />
        </nav>
        <div className="md:flex md:items-center md:justify-center md:flex-wrap md:space-x-3">
          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <XIcon />
          </motion.a>
          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <GithubIcon />
          </motion.a>

          <button
            className="flex flex-col justify-center items-center md:hidden"
            onClick={handleClick}
          >
            <span
              className={`bg-dark block transition-all duration-200 ease-in-out h-0.5 w-6 rounded-sm ${
                toggle ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-200 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                toggle ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-200 ease-in-out h-0.5 w-6 rounded-sm ${
                toggle ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>

          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "dark" ? (
              <SunIcon className={"text-dark"} />
            ) : (
              <MoonIcon className={"text-dark"} />
            )}
          </button>
        </div>
      </div>

      {/* mobile */}
     { toggle ?       <div className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden  bg-yellow-400 rounded-lg py-10 bg-transparent">
        <nav className="flex flex-col md:text-xl">
          <CustomMobileLink href="./" title="Home"  toggle={handleClick} />
          <CustomMobileLink href="./about" title="About" toggle={handleClick} />
          <CustomMobileLink href="./contact" title="Contact" toggle={handleClick} />
          <CustomMobileLink href="./projects" title="Projects" toggle={handleClick} />
        </nav>
        <div className="flex flex-row items-center justify-center space-x-3 mt-3">
          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <XIcon />
          </motion.a>
          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href=""
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <GithubIcon />
          </motion.a>
        </div>
      </div> : null }

      <div className="absolute left-[50%] md:left-[62%] lg:left-[55%] top-3 md:top-4 translate-x-[-50%] flex justify-evenly">
        <Logo />

        {/* <div className="md:hidden">
          <GiHamburgerMenu
            fontSize={27}
            className="block"
            onClick={() => setToggle(true)}
          />
          {toggle && (
            <div>
              <MdClose fontSize={27} onClick={() => setToggle(false)} />
              <ul>
                <CustomLink href="./" title="Home" />
                <CustomLink href="./about" title="About" />
                <CustomLink href="./contact" title="Contact" />
                <CustomLink href="./projects" title="Projects" />
              </ul>
            </div>
          )}
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
