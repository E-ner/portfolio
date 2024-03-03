import React from "react";
import "boxicons";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="md:mt-40" id="Home">
      <div className="flex md:flex-row mt-20 items-center flex-col justify-between gap-20 sm:mx-auto ml-5 mx-0">
        <div className="flex md:hidden flex-row items-center gap-6">
          <div className="flex flex-col text-zinc-800 gap-3">
            <a
              href=""
              className="text-xl hover:bg-zinc-200 p-1 rounded-full text-center hover:drop-shadow-xl"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href=""
              className="text-xl p-1 hover:bg-zinc-200 rounded-full text-center hover:drop-shadow-xl"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href=""
              className="text-xl p-1 hover:bg-zinc-200 rounded-full text-center hover:drop-shadow-xl"
            >
              <i className="bx bxl-gmail"></i>
            </a>
            <a
              href=""
              className="text-xl p-1 hover:bg-zinc-200 rounded-full text-center hover:drop-shadow-xl"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
          <div className="blob bg-[url('/profile.jpg')] md:hidden grayscale" />
        </div>

        <div className="md:flex hidden flex-col text-zinc-500 gap-3">
          <a
            href=""
            className="text-2xl hover:bg-zinc-200 hover:text-zinc-800 p-2 rounded-full text-center hover:drop-shadow-xl"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href=""
            className="text-2xl hover:bg-zinc-200 hover:text-zinc-800 p-2 rounded-full text-center hover:drop-shadow-xl"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href=""
            className="text-2xl hover:bg-zinc-200 hover:text-zinc-800 p-2 rounded-full text-center hover:drop-shadow-xl"
          >
            <i className="bx bxl-gmail"></i>
          </a>
          <a
            href=""
            className="text-2xl hover:bg-zinc-200 hover:text-zinc-800 p-2 rounded-full text-center hover:drop-shadow-xl"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-[86vh] md:mb-auto mb-20">
            <span>
              <div className="flex flex-row gap-10">
                <h1 className="font-poppins text-7xl font-bold text-zinc-800">
                  N Eric
                </h1>
                <img src="./hand.svg" className="w-10" />
              </div>
              <span className="flex flex-row items-center gap-7 font-poppins mt-5">
                <span className="bg-zinc-400 w-20 h-0.5 rounded-full"> </span>
                <p className="text-zinc-700">Full Stack Developer</p>
              </span>
              <p className="text-zinc-500 mt-6 md:w-96 w-60">
                Enthusiastic and adaptable Full Stack Developer with a passion
                for web development and creating REST APIs.
              </p>
            </span>
            <button className="flex flex-row items-center bg-zinc-800 p-4 px-6 rounded-xl mt-10 text-zinc-100 drop-shadow-md text-lg text-center h-16 hover:opacity-90">
              Say Hello
              <i className="bx bxs-navigation ml-3 text-2xl text-center" />
            </button>
          </div>
          <div className="blob bg-[url('/profile.jpg')] grayscale hidden md:block" />
        </div>
      </div>

      <motion.a
      href="#Home"
        className="w-44 md:flex hidden text-sm gap-1 flex-row text-zinc-700 py-4 px-4 rounded-xl items-center hover:drop-shadow-xl hover:bg-zinc-200 mt-14 dark:hover:bg-zinc-950 md:ml-48 ml-auto mr-auto"
        initial={{
          translateY: 0,
        }}
        animate={{
          translateY: 10,
        }}
        exit={{
          translateY: 0,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        <i className="bx bx-mouse text-3xl" />
        Scroll Down
        <i className="bx bx-chevron-down text-2xl"></i>
      </motion.a>
    </div>
  );
};

export default Home;
