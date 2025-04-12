import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="bg-black">
      <ToastContainer />
      <Nav />
      <Hero />
      <Aboutme />
      <Experience />
      <Stats />
      <ContactMe />

      <div className="h-100">this is temp</div>
    </div>
  );
}

export default App;
