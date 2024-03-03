import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="mt-40 text-center">
        <h1 className="font-poppins text-6xl font-bold text-zinc-800">
          Contact Me
        </h1>
        <p className="text-zinc-700 mt-5">Get in touch</p>
      </div>
      <div className="flex md:flex-row flex-col gap-20 mt-16">
        <div className="md:ml-28 mx-5">
          <h1 className="font-sans text-xl text-center text-zinc-700">
            Talk to me
          </h1>
          <div className="flex flex-col gap-1 mt-10">
          <div className="flex flex-col border bg-white rounded-xl py-4 px-20 gap-2 mt-1">
              <i className="bx bxl-whatsapp text-4xl text-center text-zinc-800"></i>
              <p className="text-sm text-center text-zinc-700">Whatsapp</p>
              <p className="text-zinc-600 text-xs text-center">+25O7-9801-9397</p>
              <a href="" className="text-center text-xs items-center text-zinc-600 mt-5">
                <p>Write to me <i className="bx bx-right-arrow-alt"></i></p>
              </a>
            </div>
            <div className="flex flex-col border bg-white rounded-xl py-4 px-20 gap-2 mt-1">
              <i className="bx bxl-linkedin text-4xl text-center text-zinc-800"></i>
              <p className="text-sm text-center text-zinc-700">LinkedIn</p>
              <p className="text-zinc-600 text-xs text-center">Jonathan Louis</p>
              <a href="" className="text-center text-xs items-center text-zinc-600 mt-5">
                <p>Write to me <i className="bx bx-right-arrow-alt"></i></p>
              </a>
            </div>
            <div className="flex flex-col border bg-white rounded-xl py-4 px-20 gap-2 mt-1">
              <i className="bx bx-mail-send text-4xl text-center text-zinc-800"></i>
              <p className="text-sm text-center text-zinc-700">Gmail</p>
              <p className="text-zinc-600 text-xs text-center">nsengiyumva603@gmail.com</p>
              <a href="" className="text-center text-xs items-center text-zinc-600 mt-5">
                <p>Write to me <i className="bx bx-right-arrow-alt"></i></p>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-5">
          <form action="" className="flex flex-col gap-4">
            <h1 className="font-sans text-xl text-center text-zinc-700">
              Write Your Message
            </h1>
            <div class="relative bg-trasparent mt-10">
              <input
                type="email"
                id="useremail"
                name="email"
                class="peer bg-transparent h-14 w-76 pt-1 py-2 rounded-lg text-zinc-400 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Insert email address"
              />
              <label
                for="useremail"
                class="absolute cursor-text left-0 -top-3  text-gray-500 dark:bg-black bg-white mx-1 px-1 text-base"
              >
                Email address
              </label>
            </div>
            <div class="relative bg-trasparent ">
              <input
                type="text"
                id="username"
                name="username"
                class="peer bg-transparent h-14 w-76 pt-1 py-2 rounded-lg text-zinc-400 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Names"
              />
              <label
                for="username"
                class="absolute cursor-text left-0 -top-3  text-gray-500 dark:bg-black bg-white mx-1 px-1 text-base"
              >
                Your names
              </label>
            </div>
            <div class="relative bg-trasparent ">
              <textarea
                type="text"
                id="mesage"
                name="mesage"
                class="peer bg-transparent h-72 w-76 pt-5 rounded-lg text-zinc-400 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                placeholder="Names"
              />
              <label
                for="mesage"
                class="absolute cursor-text left-0 -top-3  text-gray-500 dark:bg-black bg-white mx-1 px-1 text-base"
              >
                Your Message
              </label>
            </div>
            <button
              className="flex flex-row items-center bg-zinc-800 w-44 px-6 rounded-xl text-zinc-100 drop-shadow-md text-lg text-center h-16 hover:opacity-90"
              type="submit"
            >
              Say Hello
              <i className="bx bxs-navigation ml-3 text-2xl text-center" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
