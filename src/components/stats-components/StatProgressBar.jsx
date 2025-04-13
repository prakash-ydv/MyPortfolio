import React from "react";
import HorizontalProgressBar from "./HorizontalProgressBar";

function StatProgressBar({
  level,
  problemSolvingStats,
  totalProblems,
  percentage,
  bgColor,
  fillColor,
  bg
}) {
  return (
    <>
      <div className="m-5 mt-8 flex w-full text-white items-center justify-between">
        <h1 className={`uppercase px-3 py-1 rounded-xl bg-${bg}-600 text-black font-semibold`}>
          {level}
        </h1>
        <h5>
          {problemSolvingStats && problemSolvingStats[level]
            ? `${problemSolvingStats[level]}/${totalProblems}`
            : `0/${totalProblems}`}
        </h5>
      </div>
      <HorizontalProgressBar
        percentage={percentage}
        bgColor={bgColor}
        fillColor={fillColor}
      />
    </>
  );
}

export default StatProgressBar;
