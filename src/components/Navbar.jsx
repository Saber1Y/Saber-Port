import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Logo, CustomLink, CustomMobileLink } from "../index";
import { GithubIcon, LinkedInIcon, XIcon } from "./icons";
import { motion } from "framer-motion";
import useDarkTheme from "./hooks/useDarkTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
      <Link href={href} className={`${className} relative pb-2 group`}>
        {title}
        <span
          className={`h-[3px] inline-block  bg-dark absolute bottom-0  left-0 group-hover:w-full transition-[width] ease-in duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    toggle();
    const router = useRouter();

    const handleClick = () => {
      router.push(href);
    };

    return (
      <button
        href={href}
        className={`${className} relative pb-2 group`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[3px] inline-block  bg-dark absolute bottom-0  left-0 group-hover:w-full transition-[width] ease-in duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </button>
    );
  };

  const [mode, setMode] = useDarkTheme();

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className="w-full px-20 py-8 flex font-medium md:flex md:justify-evenly relative"
      id="Home"
    >
      <div className="w-full md:flex md:justify-between md:items-center hidden">
        <nav className="space-x-6 md:text-xl">
          <CustomLink href="./" title="Home" />
          <CustomLink href="./about" title="About" />
          <CustomLink href="./contact" title="Contact" />
          <CustomLink href="./projects" title="Projects" />
        </nav>
        <div className="md:flex md:items-center md:justify-center md:flex-wrap md:space-x-3">
          <motion.a
            href="https://twitter.com/saberyt18_yt"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <XIcon />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/akintobi-ayodeji-86a675236"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href="https://www.github.com/saber1Y"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            className="w-6"
          >
            <GithubIcon />
          </motion.a>

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

      <div className="md:hidden block ">
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          {" "}
          <span
            className={`bg-dark block transition-all duration-200 ease-in-out h-0.5 w-6 rounded-sm ${
              toggleMenu ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark block transition-all duration-200 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
              toggleMenu ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark block transition-all duration-200 ease-in-out h-0.5 w-6 rounded-sm ${
              toggleMenu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        {toggleMenu === true && (
          <nav className="md:text-xl flex flex-col space-y-4 mt-5 border border-black rounded-sm ">
            <CustomLink href="./" title="Home" />
            <CustomLink href="./about" title="About" />
            <CustomLink href="./contact" title="Contact" />
            <CustomLink href="./projects" title="Projects" />
          </nav>
        )}
      </div>
      <div className="absolute top-1 left-[40%] py-3  md:left-[62%] lg:left-[55%] md:top-4">
          <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
