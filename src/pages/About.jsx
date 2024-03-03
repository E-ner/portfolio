import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-40 text-center">
      <div className="mt-16 text-center">
        <h1 className="font-poppins text-6xl font-bold text-zinc-800">
          About me
        </h1>
        <p className="text-zinc-700 mt-5">My introduction</p>
      </div>
      <div className="mb-10">
        <div className="flex md:flex-row flex-col mt-20 items-center">
          <img
            src="./profile.jpg"
            className="w-auto rounded-xl grayscale h-80"
          />
          <div className="w-full md:pl-20 px-6">
            <span>
              <div className="flex flex-row gap-5 md:mt-auto mt-20">
                <div className="container w-60 h-40 bg-white border-2 rounded-lg text-center py-5 px-3 gap-2 flex flex-col">
                  <i className="bx bx-bulb text-4xl text-zinc-800"></i>
                  <h1 className="font-poppins text-zinc-700"> Experience</h1>
                  <p className="font-poppins text-zinc-500 text-sm">
                    2 + Years
                  </p>
                </div>
                <div className="container w-60 h-40 bg-white border-2 rounded-lg text-center py-5 px-3 gap-2 flex flex-col">
                  <i className="bx bxs-shopping-bag bx-flip-horizontal text-4xl text-zinc-800"></i>
                  <h1 className="font-poppins text-zinc-700"> Completed</h1>
                  <p className="font-poppins text-zinc-500 text-sm">
                    10 + Projects
                  </p>
                </div>
              </div>
              <p className="text-zinc-500 mt-6 md:w-96 w-60">
                Specializing in crafting responsive and user-friendly front-end
                applications using frameworks such as Nest.js, Next.js, and
                React.js
              </p>
            </span>
            <button className="flex flex-row items-center bg-zinc-800 p-4 px-6 rounded-xl mt-3 text-zinc-100 drop-shadow-md text-lg text-center h-16 hover:opacity-90">
              Dowload cv
              <i className="bx bx-file ml-3 text-2xl text-center" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
