import React from "react";
import Link from "next/link";
import { GithubIcon } from "./icons";
import Image from "next/image";
import { BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const Project = ({ title, img, link, github, summary, stack }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-4xl p-6 relative cursor-pointer">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden ronded-lg"
      >
        <Image src={img} alt="image" className="w-auto h-auto" />
      </Link>

      <div className="w-full flex-col items-start justify-between pl-5 my-5">
        <h2 className="text-2xl font-semibold uppercase cursor-pointer hover:underline">
          {title}
        </h2>
        <p className="capitalize">{summary}</p>
        <div>Built with :
            {stack}
        </div>
        <div className="flex space-x-3 items-center">
          <motion.div whileHover={{ y: -2 }}>
            <GithubIcon className="w-10 h-10" />
          </motion.div>
          <motion.div whileHover={{ y: -2 }}>
            <BiCodeAlt className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default Project;
