import React from "react";
import Link from "next/link";
import { GithubIcon } from "./icons";
import Image from "next/image";

const FeaturedProject = ({ summary, title, img, github, link }) => {
  return (
    <article className="w-full">
      <Link href={link}>
        <Image src={img} alt="image" className="w-auto h-auto" />
      </Link>

      <div>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target="_blank">
            {" "}
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank"></Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
