import React from "react";
import devImg from "../assets/dev.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <div className="w-full bg-black text-white">
      <div className="w-full flex flex-col items-center justify-center pt-30 gap-4">
        <h5 className="text-sm">Hello I'm</h5>
        <h1 className="font-semibold text-4xl">Prakash Kumar</h1>
        <h5 className="text-zinc-400 text-sm font-semibold">
          Software Engineer
        </h5>
        {/* buttons */}
        <div className="w-full flex gap-4 pt-10 items-center justify-center">
          <button className="border border-blue-700 rounded-md h-13 w-34 text-blue-600 cursor-pointer hover:bg-blue-100  hover:text-zinc-900 transition-colors duration-500 ">
            Download CV
          </button>
          <button className="bg-blue-600 rounded-md h-13 w-34 cursor-pointer text-black hover:bg-blue-100 hover:text-zinc-900 transition-colors duration-500">
            Let's Talk
          </button>
        </div>

        {/* hero img */}
        <div className="flex w-82 h-146 mt-10 binaryBG overflow-none rounded-full relative">
          <img
            className="absolute w-78 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={devImg}
            alt="dev"
          />
        </div>

        {/* icons */}
        <div className="hidden sm:flex flex-col gap-6 items-center absolute left-16 bottom-5 text-blue-600 ">
          <FaLinkedin className="cursor-pointer hover:text-zinc-300 transition-colors duration-500" />
          <FaGithub className="cursor-pointer hover:text-zinc-300 transition-colors duration-500" />
          <SiLeetcode className="cursor-pointer hover:text-zinc-300 transition-colors duration-500" />
        </div>

        <a
          className="hidden sm:block rotate-90 text-sm absolute right-16 bottom-12 text-blue-600 hover:text-zinc-300 transition-colors duration-500"
          href="#"
        >
          Scroll Down
        </a>
      </div>
    </div>
  );
}

export default Hero;
