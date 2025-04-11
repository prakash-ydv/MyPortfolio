import React from "react";
import ExpBox from "./experience-components/ExpBox";
import skills from "./experience-components/utils";
const {frontendList, backendList, othersList} = skills;

function Experience() {
  return (
    <section className="mt-36 flex flex-col items-center text-white">
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-sm text-zinc-400 font-semibold">Skills I Have</h5>
        <h1 className="text-3xl text-blue-600 font-semibold pt-4 mb-10">
          My Experience
        </h1>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 px-10 sm:px-30 md:px-40">
      <ExpBox heading="Frontend" list={frontendList} />
      <ExpBox heading="Backend/Middleware" list={backendList}/>
      <ExpBox heading="Others" list={othersList} />
      </div>
    </section>
  );
}

export default Experience;
