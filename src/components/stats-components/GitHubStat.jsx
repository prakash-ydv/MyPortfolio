import React, { useEffect, useState } from "react";
import StatBoxHead from "./mini-comps/StatBoxHead";
import GitHubStreakCard from "./mini-comps/GitHubStreakCard";
import GitHubStatCard from "./mini-comps/GitHubStatCard";
import GitHubLangCard from "./mini-comps/GitHubLangCard";

function GitHubStat() {
  return (
    <div className="flex flex-wrap w-[22rem] items-center rounded-b-3xl bg-zinc-800/50 border border-purple-600 hover:border-white hover:bg-black transition-colors duration-300 overflow-hidden">
      <StatBoxHead
        logo="https://pngimg.com/uploads/github/github_PNG80.png"
        heading="GitHub Stats"
        bg="purple"
      />

      {/* main stats */}

      <div className="w-full h-[30rem] flex flex-col items-center mt-10 mb-5 p-5">
        <div className="grid grid-cols-1 h-full w-full max-w-6xl">
          {/* streak card */}
          <GitHubStreakCard />

          {/* stats card */}
          <GitHubStatCard />
          
          {/* lang card */}
          <GitHubLangCard />
          

          
        </div>

        <div className="w-full max-w-6xl mt-6"></div>
      </div>
    </div>
  );
}

export default GitHubStat;
