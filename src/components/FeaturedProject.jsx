import React from "react";
import Link from "next/link";
import { GithubIcon } from "./icons";
import Image from "next/image";

const FeaturedProject = ({ summary, title, img, github, link }) => {
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
        <h2 className="text-3xl font-semibold uppercase cursor-pointer">
          {title}
        </h2>
        <p>{summary}</p>
        <div className="flex space-x-3 items-center">
          <Link href={github} target="_blank" className="w-10 h-10">
            {" "}
            <GithubIcon className="w-10 h-10" />
          </Link>
          <Link href={link} target="_blank">
            Live Link
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
