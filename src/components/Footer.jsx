import React from "react";

const Footer = () => {
  return (
    <div className="mt-40 mb-20">
      <h1 className="text-center text-zinc-700 text-4xl">N Eric</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-14 mt-10 items-center text-zinc-600">
          <p>Home</p>
          <p>Projects</p>
          <p>About</p>
        </div>
        <div className="flex flex-row gap-3 mt-10">
          <a
            href=""
            className="bg-zinc-700 px-2 rounded-xl text-zinc-100 drop-shadow-md text-lg text-center py-2"
          >
            <i className="bx bxl-facebook text-2xl text-center text-zinc-100"></i>
          </a>
          <a
            href=""
            className="bg-zinc-700 px-2 rounded-xl text-zinc-100 drop-shadow-md text-lg text-center py-2"
          >
            <i className="bx bxl-twitter text-2xl text-center text-zinc-100"></i>
          </a>
          <a
            href=""
            className="bg-zinc-700 px-2 rounded-xl text-zinc-100 drop-shadow-md text-lg text-center py-2"
          >
            <i className="bx bxl-instagram text-2xl text-center text-zinc-100"></i>
          </a>{" "}
        </div>
      </div>
      <p className="text-center mt-20 text-zinc-600">
        @N eric developer
      </p>
    </div>
  );
};

export default Footer;
