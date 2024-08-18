import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // TODO: To create a header inside of the right view
  return (
    <div className="p-2 flex justify-between items-center select-none">
      <h3 className="text-sm md:text-xl roboto-slab pl-4" id="title"></h3>
      <nav className="flex rounded-bl-lg border-white spartan overflow-y-scroll">
        <Link
          id="index"
          className={"px-2 text-gray-500 underlined cursor-pointer"}
          to="/"
        >
          Home
        </Link>
        <Link
          id="about"
          className={"px-2 text-gray-500 underlined cursor-pointer"}
          to="/about"
        >
          About
        </Link>
        <Link
          id="experiences"
          className="px-2 text-gray-500 underlined cursor-pointer"
          to="/experience"
        >
          Experiences
        </Link>
        <Link
          id="projects"
          className="px-2 text-gray-500 underlined cursor-pointer"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          id="contacts"
          className="px-2 text-gray-500 underlined cursor-pointer"
          to="/contacts"
        >
          Contacts
        </Link>
      </nav>
    </div>
  );
};

export default Header;
