import React from "react";
import Link from "next/link";

const CustomLink = ({ href, title, className="" }) => {
    return (
        <Link href={href} className={`${className}`}>
            {title}
        </Link>
    )
}

export default CustomLink;