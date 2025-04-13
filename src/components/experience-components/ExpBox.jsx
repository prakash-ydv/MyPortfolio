import React, { useState } from "react";
import { MdVerified } from "react-icons/md";

function ExpBox(props) {
  const [frontendList, setfrontendList] = useState(props.list);
  return (
    <div className="flex flex-col lg:h-full w-full lg:w-1/3 items-center p-10 rounded-3xl bg-zinc-800/50 border border-transparent hover:border-white hover:bg-black transition-colors duration-300">
      <h1 className="text-blue-600 text-xl mb-10 font-semibold">
        {props.heading}
      </h1>

      {frontendList.map((element, index) => (
        <div key={index} className="flex w-full gap-4 items-start mb-5">
          <MdVerified className="text-blue-600" />

          <div className="flex flex-col">
            <h1 className="leading-none font-semibold text-zinc-200">
              {element.title}
            </h1>
            <h5 className="text-zinc-500 text-sm mt-2 ">{element.level}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpBox;
