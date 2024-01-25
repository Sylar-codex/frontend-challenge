import React from "react";
import ProgressBar from "../utility-component/ProgressBar";

function TopPlatform({ darkMode }) {
  return (
    <div
      className={`${
        darkMode ? "bg-lighter-grey" : "bg-white"
      } rounded-lg mt-6 p-5`}
    >
      <div className="flex justify-between my-3">
        <h3
          className={`${
            darkMode ? "text-white" : "text-primaryTextColor"
          } font-semibold`}
        >
          Top Platform
        </h3>
        <h3 className="text-primary">See All</h3>
      </div>
      <div className="space-y-3">
        <ProgressBar
          title={"Book Bazar"}
          percentage={63.4}
          color={"#6160DC"}
          money={"$2,500,000"}
          rate={"+15%"}
          darkMode={darkMode}
        />
        <ProgressBar
          title={"Artsan Aisle"}
          percentage={52.4}
          color={"#54C5EB"}
          money={"$1,800,000"}
          rate={"+10%"}
          darkMode={darkMode}
        />
        <ProgressBar
          title={"Toy Troop"}
          percentage={42.5}
          color={"#FFB74A"}
          money={"$1,200,000"}
          rate={"+8%"}
          darkMode={darkMode}
        />
        <ProgressBar
          title={"Toy Troop"}
          percentage={31}
          color={"#FF4A55"}
          money={"$600,000"}
          rate={"+5%"}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default TopPlatform;
