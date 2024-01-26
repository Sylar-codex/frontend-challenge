import React, { useState } from "react";
import Chart from "../utility-component/Chart";
import arrowDown from "../../assets/icons/Arrow - Down 2.svg";
import arrowDownDark from "../../assets/icons/dark-mode/Arrow - Down 2_dark.svg";

function SalesTrends({ darkMode }) {
  const [dropDown, setDropDown] = useState(false);
  const [sortBy, setSortBy] = useState("Weekly");
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
          <div className="relative z-10">
            <div
              onClick={() => {
                setDropDown((prev) => !prev);
              }}
              className="flex lg:text-base text-sm hover:cursor-pointer items-center space-x-2 rounded-full border-2 h-9 border-headerStroke p-2"
            >
              <p className={`${darkMode ? "text-white" : "text-[#3A3F51]"} `}>
                {sortBy}
              </p>
              <img
                className="w-4 h-4"
                src={darkMode ? arrowDownDark : arrowDown}
                alt=""
              />
            </div>
            {dropDown && (
              <DropDownComponent
                setDropDown={setDropDown}
                setSortBy={setSortBy}
                darkMode={darkMode}
              />
            )}
          </div>
        </div>
      </div>
      <Chart darkMode={darkMode} />
    </div>
  );
}

export default SalesTrends;

function DropDownComponent({ setDropDown, setSortBy, darkMode }) {
  return (
    <div
      className={`absolute top-10 right-1 rounded-xl border-headerStroke lg:text-base text-sm shadow-lg w-40 ${
        darkMode ? "bg-lighter-grey" : "bg-white"
      } z-10`}
    >
      <div className="p-3 mt-3 text-gray-80 space-y-3">
        <div
          onClick={() => {
            setSortBy("Weekly");
            setDropDown(false);
          }}
          className="hover:cursor-pointer"
        >
          <p>Weekly</p>
        </div>
        <div
          onClick={() => {
            setSortBy("Monthly");
            setDropDown(false);
          }}
          className="hover:cursor-pointer"
        >
          <p>Monthly</p>
        </div>
        <div
          onClick={() => {
            setSortBy("Yearly");
            setDropDown(false);
          }}
          className="hover:cursor-pointer"
        >
          <p>Yearly</p>
        </div>
      </div>
    </div>
  );
}
