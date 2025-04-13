import React from "react";

const HorizontalProgressBar = ({ percentage = 65, height = 4, bgColor = "#e5e7eb", fillColor = "#3b82f6" }) => {
  return (
    <svg width="100%" height={height}>
      {/* Background Bar */}
      <rect
        x="0"
        y="0"
        width="100%"
        height={height}
        rx={height / 2}
        fill={bgColor}
      />
      {/* Progress Bar (uses percentage string) */}
      <rect
        x="0"
        y="0"
        width={`${percentage}%`}
        height={height}
        rx={height / 2}
        fill={fillColor}
      />
    </svg>
  );
};

export default HorizontalProgressBar;
