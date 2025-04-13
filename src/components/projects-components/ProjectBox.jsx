import React from "react";

function ProjectBox(props) {
  return (
    <div className="flex flex-col items-start h-[28rem] w-82 text-white  bg-zinc-800/50 border border-transparent hover:border-white hover:bg-black transition-colors duration-300 p-5 rounded-2xl gap-6">
      <img
        className="rounded-3xl h-2/3 w-full object-cover"
        src={props.image}
        alt="projectImage"
      />
      <h1>{props.name}</h1>
      <div className="flex w-full gap-2">
        <a
          target="_blank"
          className="border text-blue-600 border-blue-600 h-10 w-25 center rounded-lg transition-colors duration-300 hover:bg-white hover:text-black cursor-pointer"
          href={props.github}
        >
          GitHub
        </a>
        <a
          target="_blank"
          className="border text-black bg-blue-600 h-10 w-25 center rounded-lg transition-colors duration-300 hover:bg-white hover:text-black cursor-pointer"
          href={props.live}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
