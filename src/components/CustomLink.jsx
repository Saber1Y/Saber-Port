import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

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

export default CustomLink;
