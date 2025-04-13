import React from "react";
import ExpBox from "./experience-components/ExpBox";
import skills from "./experience-components/utils";
import Heading from "./universal-components/Heading";
const {frontendList, backendList, othersList} = skills;

function Experience() {
  return (
    <section id="experience" className="mt-28 flex flex-col items-center text-white">

      <Heading subheading="Skills I Have" heading="My Experience" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 px-10 sm:px-30 md:px-40">
      <ExpBox heading="Frontend" list={frontendList} />
      <ExpBox heading="Backend/Middleware" list={backendList}/>
      <ExpBox heading="Others" list={othersList} />
      </div>
    </section>
  );
}

export default Experience;
