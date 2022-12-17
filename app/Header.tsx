import Link from "next/link";
import React from "react";
import "../styles/globals.css";

function Header() {
  return (
    <header className="p-5">
      <Link className="p-2" href={"/"}>
        Blog
      </Link>
      <Link className="p-2" href={"/about"}>
        About
      </Link>
    </header>
  );
}

export default Header;
