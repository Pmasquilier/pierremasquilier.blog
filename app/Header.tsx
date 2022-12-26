import Link from "next/link";
import React from "react";
import "../styles/globals.css";

function Header() {
  return (
    <header className="p-5 flex justify-between">
      <Link className="text-lg font-bold text-gray-700" href={"/"}>
        Blog
      </Link>
      <Link className="text-gray-500" href={"/about"}>
        Qui-suis-je
      </Link>
    </header>
  );
}

export default Header;
