import React from "react";
import LeetcodeStats from "./stats-components/LeetcodeStats";
import OtherStats from "./stats-components/GitHubStat";
import Heading from "./universal-components/Heading";
import GfgStats from "./stats-components/GfgStats";
import GitHubStat from "./stats-components/GitHubStat";

function Stats() {
  return (
    <section id="stats" className="w-full flex flex-col mt-20 p-10">
      <Heading subheading="Platforms I Use" heading="My Stats" />

      {/* stats */}

      <div className="w-full h-fit flex flex-wrap items-center justify-center gap-5 lg:gap-10 ">
        <LeetcodeStats />
        <GfgStats />
        <GitHubStat />
      </div>
    </section>
  );
}

export default Stats;
