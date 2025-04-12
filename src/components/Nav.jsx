import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdStats } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { LuBookMinus } from "react-icons/lu";

function Nav() {
  const [active, setActive] = useState("home");

  function clickHandler(id) {
    setActive(id);
  }

  const navItems = [
    {
      id: "home",
      icon: <AiOutlineHome className="text-lg" />,
      title: "Home",
      link: "#home",
    },
    {
      id: "about",
      icon: <CgProfile className="text-lg" />,
      title: "About",
      link: "#about",
    },
    {
      id: "experience",
      icon: <LuBookMinus className="text-lg" />,
      title: "Experience",
      link: "#experience",
    },
    {
      id: "stats",
      icon: <IoMdStats className="text-lg" />,
      title: "Stats",
      link: "#stats",
    },
    {
      id: "projects",
      icon: <IoCodeSlash className="text-lg" />,
      title: "Projects",
      link: "#projects",
    },
    {
      id: "contact",
      icon: <FiMessageSquare className="text-lg" />,
      title: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className="fixed flex flex-col items-center text-zinc-300/90 bottom-5 w-full z-50">
      <div className="flex items-center justify-between px-5 w-92 h-16 backdrop-blur-lg rounded-full bg-black/20">
        {navItems.map((item) => (
          <a
            href={item.link}
            key={item.id}
            title={item.title}
            onClick={() => clickHandler(item.id)}
            className={`flex items-center justify-center h-12 w-12 rounded-full transition-colors duration-300 cursor-pointer
              ${
                active === item.id
                  ? "bg-zinc-500/60 text-zinc-300"
                  : "hover:bg-zinc-500/40 hover:text-zinc-300"
              }`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
