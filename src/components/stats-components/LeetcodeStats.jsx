import React, { useEffect, useState } from "react";
import leetcodeLogo from "../../assets/leetcode.webp";
import CircularProgress from "./mini-comps/CircularProgress";
import getLeetcodeStats from "../../API/LeetcodeStatsApi";
import StatProgressBar from "./mini-comps/StatProgressBar";
import StatBoxHead from "./mini-comps/StatBoxHead";

function LeetcodeStats() {
  const [problemSolvingStats, setProblemSolvingStats] = useState({});
  const [rank, setRank] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLeetcodeStats("prakash___ydv");
      setProblemSolvingStats(data.problemSolvingStats);
      setRank(data.ranking);
    };

    fetchData();
  }, []);

  const totalQuestions = 3511;
  const totalEasy = 871;
  const totalMedium = 1821;
  const totalHard = 819;

  const solved = problemSolvingStats?.all || 0;
  const solvedEasy = problemSolvingStats?.easy || 0;
  const solvedMedium = problemSolvingStats?.medium || 0;
  const solvedHard = problemSolvingStats?.hard || 0;

  const stats = { easy: solvedEasy, medium: solvedMedium, hard: solvedHard };

  const percentage = Number(((solved / totalQuestions) * 100).toFixed(2));

  return (
    <div className="flex flex-wrap w-[22rem] items-center rounded-b-3xl bg-zinc-800/50 border border-blue-600 hover:border-white hover:bg-black transition-colors duration-300 overflow-hidden">
      
      <StatBoxHead logo={leetcodeLogo} heading="LeetCode Stats" bg="blue" />

      {/* main stats */}

      <div className="w-full h-[30rem] flex flex-col items-center mt-10 mb-5 p-5 lg:p-10">
        {problemSolvingStats?.all && (
          <CircularProgress percentage={percentage ? percentage : 0} />
        )}

        {/* rank */}
        <div className="w-full flex items-center justify-between mt-5">
          <span className="flex gap-2 text-white text-lg">
            Solved
            <h5 className="text-emerald-300">
              {problemSolvingStats.all ? problemSolvingStats.all : 0}
            </h5>
          </span>
          <span className="flex gap-2 text-white text-lg">
            Rank <h5 className="text-yellow-300">{rank ? rank : 0}</h5>
          </span>
        </div>

        {/* progress graph */}
        <div className="w-full flex flex-col items-center mt-5">
          {/* easy */}
          <StatProgressBar
            level="easy"
            problemSolvingStats={stats}
            totalProblems={totalEasy}
            percentage={(stats.easy / totalEasy) * 100}
            bgColor="#052e15"
            fillColor="#0bc953"
            bg="green"
          />

          {/* medium */}
          <StatProgressBar
            level="medium"
            problemSolvingStats={stats}
            totalProblems={totalMedium}
            percentage={(stats.medium / totalMedium) * 100}
            bgColor="#443202"
            fillColor="#ebac00"
            bg="yellow"
          />

          {/* hard */}
          <StatProgressBar
            level="hard"
            problemSolvingStats={stats}
            totalProblems={totalHard}
            percentage={(stats.hard / totalHard) * 100}
            bgColor="#380a0a"
            fillColor="#df2828"
            bg="red"
          />
        </div>
      </div>
    </div>
  );
}

export default LeetcodeStats;
