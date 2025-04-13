import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import GitHubStat from "./components/stats-components/GitHubStat";

function App() {
  return (
    <div className="bg-black ">

      <div className="mainbody">

      <ToastContainer />
      <Nav />
      <Hero />
      <Aboutme />
      <Experience />
      <Stats />
      <Projects />
      <ContactMe />
      </div>

      <div className="h-25"></div>
    </div>
  );
}

export default App;
