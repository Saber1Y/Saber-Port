import React from "react";
import Link from "next/link";
import Copy from "./Copy";

const Footer = () => {
  return (
    <div className="w-full border-t-2 border-solid border-dark font-medium text-lg my-3">
      <div className="flex-col md:flex md:flex-row md:items-center md:justify-between md:m-2 my-3">
        <span className="cursor-pointer">
          {new Date().getFullYear()} &copy; All Rights Reserved.{" "}
        </span>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <span>Send Donations:</span>
            <span className="flex items-center ml-1">
              <span className="underline decorate-blue-500 cursor-pointer">
                0x11f7eaC93C9DD552DFD657BE52007A25E200f356
              </span>
              <Copy
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-4 ml-1 cursor-pointer"
                  >
                    <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                    <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                  </svg>
                }
                
              />
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
