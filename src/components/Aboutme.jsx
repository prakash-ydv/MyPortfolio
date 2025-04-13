import React from "react";
import Box from "./about-components/Box";
import { RiMedalFill } from "react-icons/ri";
import { FaCode, FaStar } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import Heading from "./universal-components/Heading";
import AboutMePara from "./about-components/AboutMePara";

function Aboutme() {
  return (
    <section
      id="about"
      className="text-white mt-28 px-6 sm:px-10 center flex-col "
    >
      <Heading subheading="Get to Know" heading="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 w-full max-w-6xl items-center">
        {/* Image section */}
        <div className="h-[400px] w-[300px] lg:h-[400px] lg:w-[400px] center rounded-3xl text-sm text-zinc-300 mx-auto lg:mx-0 my-img"></div>

        {/* Boxes and text section */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Boxes in a row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full justify-items-center">
            <Box title="Academics" detail="Good" logo={<RiMedalFill />} />
            <Box title="Projects" detail="4+ Projects" logo={<IoRocket />} />
            <Box title="Codeability" detail="10K+ LOC" logo={<FaCode />} />
            <Box title="Client Rating" detail="10/10 ( 1 )" logo={<FaStar />} />
          </div>

          {/* Paragraph */}
          <AboutMePara />

          {/* button */}
          <a href="#contact" className="center h-10 w-26 bg-blue-600 rounded-md mt-5 text-black">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
