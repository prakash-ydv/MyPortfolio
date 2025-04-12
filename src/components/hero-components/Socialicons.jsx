import React from "react";

function Socialicons(props) {
  return (
    <a target="_blank" href={props.url}>
      <span className="cursor-pointer hover:text-zinc-300 transition-colors duration-500">
        {props.icon}
      </span>
    </a>
  );
}

export default Socialicons;
