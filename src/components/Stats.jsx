import React from "react";
import LeetcodeStats from "./stats-components/LeetcodeStats";
import OtherStats from "./stats-components/OtherStats";
import Heading from "./universal-components/Heading";

function Stats() {
  return (
    <section className="w-full flex flex-col mt-20 p-10">

      <Heading subheading ="Platforms I Use" heading="My Stats" />

      {/* stats */}

      <div className="w-full h-fit flex flex-wrap items-center justify-center gap-5 lg:gap-10 ">
        <LeetcodeStats />
        <OtherStats />
        <OtherStats />
      </div>
    </section>
  );
}

export default Stats;
