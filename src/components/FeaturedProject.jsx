import React from "react";
import Link from "next/link";
import { GithubIcon } from "./icons";
import Image from "next/image";
import { BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const FeaturedProject = ({ summary, title, img, github, link, stack }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-4xl p-10 cursor-pointer relative">
      {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" /> */}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden ronded-lg hover-underline"
      >
        <Image src={img} alt="image" className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex-col items-start justify-between pl-5">
        <h2 className="text-3xl font-bold uppercase cursor-pointer hover:underline">
          {title}
        </h2>
        <p className="capitalize">{summary}</p>
        <div>
          Built with :
          {/* <ul>
            {stack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
        </div>

        <div className="flex space-x-3 items-center">
          <Link href={github} target="_blank">
            <motion.div whileHover={{ y: -2 }}>
              <GithubIcon className="w-12 h-12" />
            </motion.div>
          </Link>

          <Link href={link} target="_blank">
            <motion.div whileHover={{ y: -2 }}>
              <BiCodeAlt className="w-11 h-11" />
            </motion.div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
