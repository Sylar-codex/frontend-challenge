import React from "react";
import search from "../../assets/icons/Icon - Search.svg";
import calendar from "../../assets/icons/solar_calendar-linear.svg";
import bell from "../../assets/icons/solar_bell-outline.svg";
import arrrowDown from "../../assets/icons/Arrow - Down 2.svg";
import headerProfilePic from "../../assets/images/headerProfile.svg";
import calendarDark from "../../assets/icons/dark-mode/solar_calendar-linear_dark.svg";
import bellDark from "../../assets/icons/dark-mode/solar_bell-outline_dark.svg";
import arrowDownDark from "../../assets/icons/dark-mode/Arrow - Down 2_dark.svg";
import logo from "../../assets/icons/Logo.svg";

function Header({ darkMode }) {
  const today = new Date();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <div
      className={`flex lg:flex-row flex-col lg:justify-between lg:items-center border-b-2 border-headerStroke py-3 px-5 ${
        darkMode ? "text-white" : "text-primaryTextColor"
      }`}
    >
      <div className="flex items-center space-x-2">
        <img className="lg:hidden block w-8 h-8" src={logo} alt="" />
        <h2 className="text-xl font-medium">Dashboard</h2>
      </div>

      <div className="flex lg:flex-row flex-col-reverse lg:items-center lg:space-x-6 mt-2 lg:mt-0">
        {/* input field div */}
        <div
          className={`p-3 rounded-full w-full lg:w-80 h-12 flex items-center lg:mt-0 mt-3 space-x-2 ${
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
        <div className="flex items-center space-x-1 lg:mt-0 mt-4">
          <img
            className="w-5 h-5"
            src={darkMode ? calendarDark : calendar}
            alt="calendar"
          />
          <p className="lg:text-base text-lg">
            {today.toLocaleDateString("en-GB", options)}
          </p>
        </div>
        {/* profile info div */}

        <div className="flex lg:flex-row flex-row-reverse lg:justify-normal justify-between items-center lg:space-x-5 mt-2 lg:mt-0">
          <div className="lg:w-8 lg:h-8 w-9 h-9 rounded-full border-headerStroke border-2 border-solid p-1 flex justify-center items-center">
            <img className="w-full" src={darkMode ? bellDark : bell} alt="" />
          </div>
          <div className="flex p-2 lg:w-64 w-20 h-14 rounded-full space-x-2 lg:space-x-0 lg:border-2 lg:border-solid lg:border-headerStroke lg:justify-between justify-center items-center">
            <div className="rounded-full w-12 h-12">
              <img className="w-full h-full" src={headerProfilePic} alt="" />
            </div>
            <div className="hidden lg:block">
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
    </div>
  );
}

export default Header;
