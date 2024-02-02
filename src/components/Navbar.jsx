import Link from "next/link";
import React, { useState } from "react";
import { Logo, CustomLink } from "../index";
import { GithubIcon, LinkedInIcon, XIcon } from "./icons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header
      className="w-full px-20 py-8 font-medium md:flex md:items-center md:justify-between"
      id="Home"
    >
      <nav className="space-x-6 md:text-xl md:block hidden">
        <CustomLink href="./" title="Home" />
        <CustomLink href="./about" title="About" />
        <CustomLink href="./" title="Contact" />
        <CustomLink href="./" title="Projects" />
      </nav>
      <div className="md:flex md:items-center md:justify-center md:flex-wrap md:space-x-3 hidden">
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
      <div className="absolute left-[50%] md:left-[62%]  lg:left-[55%] top-2 md:top-4 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
