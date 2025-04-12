import React, { useEffect, useState } from "react";
import { GrAchievement } from "react-icons/gr";
import OtherLinks from "../other-components/OtherLinks";
import urls from "./utils";

function OtherStats() {
  return (
    <div className="flex flex-wrap w-[22rem] h-max items-center rounded-b-3xl bg-zinc-800/50 border border-blue-600 hover:border-white hover:bg-black transition-colors duration-300 overflow-hidden">

      <div className="w-full h-24 flex items-center justify-center bg-blue-600 rounded-b-3xl gap-5">
        <GrAchievement size={22} />
        <h1 className="font-medium text-lg">Other Stats</h1>
      </div>

      {/* main stats */}

      <div className="w-full h-full flex flex-col gap-6 lg:gap-7 p-5 md:p-10 text-white">

      {urls.map((element , index)=>(<OtherLinks key={index} link={element.link} text={element.text}/>))}
        

      </div>
    </div>
  );
}

export default OtherStats;
