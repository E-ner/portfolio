import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <button className="hover:bg-zinc-300 rounded-full p-2 md:hidden hover:drop-shadow-lg text-3xl">
          <i class="bx bx-menu-alt-left"></i>
        </button>
      </div>
      <div className="md:flex flex-row mx-auto text-zinc-800 hidden">
        <span>
          <p className="text-lg">N.Eric</p>
        </span>
        <nav className="font-sans ml-auto flex gap-10 text-lg">
          <a className="cursor-pointer">Home</a>
          <a>About</a>
          <a>Skills</a>
          <a>Services</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
