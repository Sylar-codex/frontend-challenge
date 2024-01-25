import React from "react";
import Chart from "../utility-component/Chart";
import arrowDown from "../../assets/icons/Arrow - Down 2.svg";
import arrowDownDark from "../../assets/icons/dark-mode/Arrow - Down 2_dark.svg";

function SalesTrends({ darkMode }) {
  return (
    <div
      className={`${
        darkMode ? "bg-lighter-grey" : "bg-white"
      } lg:h-[26rem] h-72 w-full rounded-lg shadow-sm`}
    >
      <div className="flex justify-between items-center px-5 pt-4">
        <h2
          className={`lg:text-lg text-base ${
            darkMode ? "text-white" : "text-primaryTextColor"
          }`}
        >
          Sales Trends
        </h2>
        <div className="flex space-x-2 items-center">
          <h3
            className={`${
              darkMode ? "text-white" : "text-[#3A3F51]"
            } lg:font-normal`}
          >
            Sorted by:
          </h3>
          <div className="flex items-center space-x-2 rounded-full border-2 h-9 w-24 border-headerStroke p-2">
            <p className={`${darkMode ? "text-white" : "text-[#3A3F51]"}`}>
              Weekly
            </p>
            <img
              className="w-4 h-4"
              src={darkMode ? arrowDownDark : arrowDown}
              alt=""
            />
          </div>
        </div>
      </div>
      <Chart darkMode={darkMode} />
    </div>
  );
}

export default SalesTrends;
