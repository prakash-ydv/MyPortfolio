import React from "react";

function Box(props) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-42 w-42 sm:h-42 bg-zinc-800/50 rounded-lg p-5 cursor-pointer hover:bg-black border border-transparent hover:border-white transition-colors duration-300">
      <span className="text-blue-600 text-2xl mb-5">{props.logo}</span>
      <h1 className="text-lg">{props.title}</h1>
      <p className="text-xs text-zinc-500">{props.detail}</p>
    </div>
  );
}

export default Box;
