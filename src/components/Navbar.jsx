import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOn, setMenu] = useState(0);
  return (
    <div className="pt-10 md:fixed md:top-0 md:w-[76vw] z-10 md:bg-zinc-50 dark:bg-black">
      <div>
        <button
          className="hover:bg-zinc-300  rounded-full p-2 ml-3 md:hidden hover:drop-shadow-lg text-3xl "
          onClick={() => setMenu((previous) => !previous)}
        >
          <i className="bx bx-menu-alt-left text-zinc-800"></i>
        </button>
      </div>
      {isMenuOn == 1 ? (
        <div className="flex flex-col fixed bg-gradient-to-tl from-zinc-700 to-zinc-400 drop-shadow-lg font-sans rounded-lg mt-2 pt-5 z-10 text-white ml-5 opacity-96">
          <span className="flex flex-row items-center gap-3 px-5">
            <p className="text-2xl">N.Eric</p>{""}|
            <p className="text-[10px]"> Fullstack Developer</p>
          </span>
          <nav className="font-sans flex gap-3 text-sm flex-col mt-10">
            <a className="cursor-pointer hover:bg-zinc-400 pr-20 rounded-sm py-3 pl-5">Home</a>
            <a className="cursor-pointer hover:bg-zinc-400 pr-20 rounded-sm py-3 pl-5">About</a>
            <a className="cursor-pointer hover:bg-zinc-400 pr-20 rounded-sm py-3 pl-5">Skills</a>
            <a className="cursor-pointer hover:bg-zinc-400 pr-20 rounded-sm py-3 pl-5 rounded-bl-lg rounded-br-lg">Contact</a>
          </nav>
        </div>
      ): ""}
      <div className="md:flex flex-row mx-auto text-zinc-500 hidden">
        <span>
          <p className="text-lg">N.Eric</p>
        </span>
        <nav className="font-sans ml-auto flex gap-10 text-lg text-zinc-500">
          <a className="cursor-pointer">Home</a>
          <a className="cursor-pointer">About</a>
          <a className="cursor-pointer">Skills</a>
          <a className="cursor-pointer">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
