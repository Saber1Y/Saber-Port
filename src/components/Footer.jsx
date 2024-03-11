import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-solid border-dark font-medium text-lg my-3">
      <div className="flex-col md:flex md:flex-row md:items-center md:justify-between md:m-2 my-3">
        <span className="cursor-pointer">
          {new Date().getFullYear()} &copy; All Rights Reserved.{" "}
        </span>
        <div className="flex flex-col">
          <div>
            <span>Send Donations</span>:
            <span className="underline decorate-blue-500 cursor-pointer">
              {" "}
              0x11f7eaC93C9DD552DFD657BE52007A25E200f356
            </span>
          </div>
          <Link
            href="https://www.buymeacoffee.com/saber1y"
            className="underline decoration-pink-500"
          >
            Buy me Coffee ☕️
          </Link>
        </div>
        <p className="cursor-pointer blocks">
          Built By Saber{" "}
          <span className="text-2xl cursor-pointer">&#9825;</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
