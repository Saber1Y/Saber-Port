import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Logo } from "../index";
import { GithubIcon, LinkedInIcon, XIcon } from "./icons";
import { motion } from "framer-motion";
import useDarkTheme from "./hooks/useDarkTheme";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {

    const CustomLink = ({ href, title, className = "" }) => {
        const router = useRouter();

        return (
            <Link href={href} className={`${className} relative pb-2 group`}>
                {title}
                <span
                    className={`h-[3px] inline-block  bg-dark absolute bottom-0  left-0 group-hover:w-full transition-[width] ease-in duration-300 ${router.asPath === href ? "w-full" : "w-0"
                        }`}
                >
                    &nbsp;
                </span>
            </Link>
        );
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <div className="sm:block">
                    <Logo />
                </div>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex items-center space-x-3">
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
                    </div>
                    <button
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-dark text-white md:text-dark md:space-x-8 rtl:space-x-reverse md:flex-row md:text-xl md:mt-0 md:border-0 md:bg-white lg:bg-transparent">
                        <CustomLink href="./" title="Home" />
                        <CustomLink href="./about" title="About" />
                        <CustomLink href="./contact" title="Contact" />
                        <CustomLink href="./projects" title="Projects" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
