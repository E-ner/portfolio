import React from "react";

const SKills = () => {
  return (
    <div className="mt-40 text-center">
      <div className="mt-16 text-center">
        <h1 className="font-poppins text-6xl font-bold text-zinc-800">
          Skills
        </h1>
        <p className="text-zinc-700 mt-5">My technical level</p>
      </div>
      <div className="mb-10 flex md:flex-row mt-10 gap-5 md:ml-44 flex-col mx-5">
        <div className="mt-10 bg-white border rounded-xl py-5 px-7">
          <h2 className="text-zinc-900 text-center">Frontend Development</h2>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Tailwind Css</p>
              </span>
              <p className="text-xs text-zinc-600">Intermediate</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Html</p>
              </span>
              <p className="text-xs text-zinc-600">Advanced</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Css</p>
              </span>
              <p className="text-xs text-zinc-600">Intermediate</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">React js</p>
              </span>
              <p className="text-xs text-zinc-600">Advanced</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800 text-sm">Framer Motion</p>
              </span>
              <p className="text-xs text-zinc-600">Intermediate</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Javascript</p>
              </span>
              <p className="text-xs text-zinc-600">Intermediate</p>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white border rounded-xl py-5 px-14">
          <h2 className="text-zinc-900 text-center">Backend Development</h2>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="text-center">
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Linux shell</p>
              </span>
              <p className="text-xs text-zinc-600">Beginner</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Mysql</p>
              </span>
              <p className="text-xs text-zinc-600">Intermediate</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Php</p>
              </span>
              <p className="text-xs text-zinc-600">Advanced</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Laravel</p>
              </span>
              <p className="text-xs text-zinc-600">Intermediate</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Nest js</p>
              </span>
              <p className="text-xs text-zinc-600">Intermediate</p>
            </div>
            <div>
              <span className="flex flex-row items-center">
                <i className="bx bx-badge-check"></i>
                <p className="text-zinc-800">Node js</p>
              </span>
              <p className="text-xs text-zinc-600">Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SKills;
