import React from "react";
import LeetcodeStats from "./stats-components/LeetcodeStats";

function Stats() {
  return (
    <section className="w-full flex flex-col mt-20 p-10">
      <div className="heading flex flex-col items-center justify-center">
        <h5 className="text-sm font-semibold text-zinc-400">Platforms I use</h5>
        <h1 className="text-3xl font-semibold text-blue-600 pt-4 mb-10">
          My Stats
        </h1>
      </div>

      {/* stats */}

      <div className="w-full flex flex-wrap items-center justify-center gap-5 ">
        <LeetcodeStats />
      </div>
    </section>
  );
}

export default Stats;
