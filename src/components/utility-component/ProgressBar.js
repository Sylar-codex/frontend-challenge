import React from "react";
import { Line } from "rc-progress";

function ProgressBar({ title, percentage, color, money, rate, darkMode }) {
  return (
    <div>
      <h3 className={`${darkMode ? "text-white" : "text-[#22242C]"}`}>
        {title}
      </h3>
      <div className="my-2">
        <Line
          percent={percentage}
          strokeWidth={1.7}
          trailWidth={1.7}
          strokeLinecap="round"
          strokeColor={color}
        />
      </div>
      <div className="flex justify-between text-neutral-500 text-sm">
        <p>{money}</p>
        <p>{rate}</p>
      </div>
    </div>
  );
}

export default ProgressBar;
