import React from "react";
import search from "../../assets/icons/Icon - Search.svg";
import calendar from "../../assets/icons/solar_calendar-linear.svg";
import bell from "../../assets/icons/solar_bell-outline.svg";
import arrrowDown from "../../assets/icons/Arrow - Down 2.svg";
import headerProfilePic from "../../assets/images/headerProfile.svg";
import calendarDark from "../../assets/icons/dark-mode/solar_calendar-linear_dark.svg";
import bellDark from "../../assets/icons/dark-mode/solar_bell-outline_dark.svg";
import arrowDownDark from "../../assets/icons/dark-mode/Arrow - Down 2_dark.svg";

function Header({ darkMode }) {
  const today = new Date();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <div
      className={`flex justify-between items-center border-b-2 border-headerStroke py-3 px-5 ${
        darkMode ? "text-white" : "text-primaryTextColor"
      }`}
    >
      <div>
        <h2 className="text-xl font-medium">Dashboard</h2>
      </div>

      <div className="flex items-center space-x-6">
        {/* input field div */}
        <div
          className={`p-3 rounded-full w-80 h-12 flex items-center space-x-2 ${
            darkMode ? "bg-lighter-grey" : "bg-white"
          } border-solid border-2 border-headerStroke`}
        >
          <img className="w-4 h-4" src={search} alt="search" />
          <input
            className={`w-full ${
              darkMode ? "bg-lighter-grey" : "bg-white"
            } h-full outline-none ${darkMode ? "placeholder:text-white" : ""}`}
            type="text"
            placeholder="Search..."
          />
        </div>
        {/* calender div */}
        <div className="flex space-x-1">
          <img src={darkMode ? calendarDark : calendar} alt="calendar" />
          <p>{today.toLocaleDateString("en-GB", options)}</p>
        </div>
        <div className="w-8 h-8 rounded-full border-headerStroke border-2 border-solid p-1 flex justify-center items-center">
          <img className="w-full" src={darkMode ? bellDark : bell} alt="" />
        </div>
        {/* profile info div */}
        <div className="flex p-2 w-64 h-14 rounded-full border-2 border-solid border-headerStroke justify-between items-center">
          <div className="rounded-full w-12 h-12">
            <img className="w-full h-full" src={headerProfilePic} alt="" />
          </div>
          <div>
            <h2>Justin Bergson</h2>
            <p className="text-sm text-[#787486]">Justin@gmail.com</p>
          </div>
          <div>
            <img
              className="w-5 h-5 hover:cursor-pointer"
              src={darkMode ? arrowDownDark : arrrowDown}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
