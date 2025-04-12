import React, { useEffect, useState } from "react";
import leetcodeLogo from "./assets/leetcode.webp";
import CircularProgress from "./CircularProgress";
import HorizontalProgressBar from "./HorizontalProgressBar";
import getLeetcodeStats from "../../API/LeetcodeStatsApi";

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

  const percentage = Number(((solved / totalQuestions) * 100).toFixed(2));
  const percentageEasy = Number(((solvedEasy / totalEasy) * 100).toFixed(2));
  const percentageMedium = Number(((solvedMedium / totalMedium) * 100).toFixed(2));
  const percentageHard = Number(((solvedHard / totalHard) * 100).toFixed(2));


  return (
    <div className="flex flex-wrap w-[30rem] items-center rounded-b-3xl bg-zinc-800/50 border border-blue-600 hover:border-white hover:bg-black transition-colors duration-300 overflow-hidden">
      <div className="w-full h-24 flex items-center justify-center bg-blue-600 rounded-b-3xl gap-5">
        <img className="h-8" src={leetcodeLogo} />
        <h1 className="font-medium text-lg">LeetCode Stats</h1>
      </div>

      {/* main stats */}

      <div className="w-full flex flex-col items-center mt-10 mb-5 p-5 lg:p-10">
        {problemSolvingStats?.all && (
          <CircularProgress
            percentage={percentage ? percentage : 0 }
          />
        )}

        {/* rank */}
        <div className="w-full flex items-center justify-between mt-5">
          <span className="flex gap-2 text-white text-lg">
            Solved{" "}
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
          <div className="m-5 mt-8 flex w-full text-white items-center justify-between">
            <h1 className="px-3 py-1 rounded-xl bg-green-600 text-black font-semibold">
              EASY
            </h1>
            <h5>
              {problemSolvingStats.easy ? `${problemSolvingStats.easy}/871` : 0}
            </h5>
          </div>
          <HorizontalProgressBar
            percentage={percentageEasy}
            bgColor="#052e15"
            fillColor="#0bc953"
          />

          {/* medium */}
          <div className="m-5 mt-8 flex w-full text-white items-center justify-between">
            <h1 className="px-3 py-1 rounded-xl bg-yellow-600 text-black font-semibold">
              Medium
            </h1>
            <h5>
              {problemSolvingStats.medium
                ? `${problemSolvingStats.medium}/1821`
                : 0}
            </h5>
          </div>
          <HorizontalProgressBar
            percentage={percentageMedium}
            bgColor="#443202"
            fillColor="#ebac00"
          />

          {/* hard */}
          <div className="m-5 mt-8 flex w-full text-white items-center justify-between">
            <h1 className="px-3 py-1 rounded-xl bg-red-600 text-black font-semibold">
              HARD
            </h1>
            <h5>
              {problemSolvingStats.hard ? `${problemSolvingStats.hard}/819` : 0}
            </h5>
          </div>
          <HorizontalProgressBar
            percentage={percentageHard}
            bgColor="#380a0a"
            fillColor="#df2828"
          />
        </div>
      </div>
    </div>
  );
}

export default LeetcodeStats;
