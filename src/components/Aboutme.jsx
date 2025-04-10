import React from "react";
import Box from "./about-components/Box";
import { RiMedalFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";

function Aboutme() {
  return (
    <section className="text-white pt-36 px-6 sm:px-10 flex flex-col items-center justify-center">
      <h5 className="text-zinc-400 text-sm font-semibold">Get to know</h5>
      <h1 className="text-3xl pt-4 text-blue-600 font-semibold">About Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 w-full max-w-6xl items-center">
        {/* Image section */}
        <div className="h-[400px] w-[300px] lg:h-[400px] lg:w-[400px]  flex items-center justify-center rounded-3xl text-sm text-zinc-300 mx-auto lg:mx-0 my-img">
        </div>

        {/* Boxes and text section */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Boxes in a row */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-items-center">
            <Box title="Academics" logo={<RiMedalFill />} />
            <Box title="Projects" logo={<IoRocket />} />
            <Box title="Codeability" logo={<FaCode />} />
          </div>

          {/* Paragraph */}
          <p className="mt-6 text-center lg:text-left text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            doloremque eaque eius libero voluptates dolorem odit, animi
            voluptatem fugit nesciunt magnam delectus repudiandae soluta.
          </p>
          <button className="h-12 w-22 bg-blue-600 rounded-md mt-5 text-black">Lets Talk</button>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
