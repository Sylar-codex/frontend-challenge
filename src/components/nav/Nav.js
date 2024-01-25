import React from "react";
import category from "../../assets/icons/bulk/category.svg";
import logo from "../../assets/icons/Logo.svg";
import arroweRight from "../../assets/icons/broken/arrow-right.svg";
import box from "../../assets/icons/broken/box.svg";
import discountShape from "../../assets/icons/broken/discount-shape.svg";
import infoCircle from "../../assets/icons/broken/info-circle.svg";
import profileUser from "../../assets/icons/broken/profile-2user.svg";
import setting from "../../assets/icons/broken/setting-2.svg";
import trend from "../../assets/icons/broken/trend-up.svg";
import moon from "../../assets/icons/moon_icon.svg";
import sunshine from "../../assets/icons/Frame4svg.svg";
import sunshineDark from "../../assets/icons/dark-mode/brightness_dark.svg";
import moonDark from "../../assets/icons/dark-mode/moon_dark.svg";
import logout from "../../assets/icons/broken/logout.svg";
import { toggleDarkMode } from "../../utility/toggleDarkMode";
import categoryDark from "../../assets/icons/category.svg";

function Nav({ setDarkMode, darkMode }) {
  return (
    <div className={`lg:static fixed bottom-0 w-full lg:h-full h-20`}>
      <div
        className={`p-5 lg:border-r-2 shadow-md lg:shadow-none border-headerStroke flex items-center space-x-3 lg:space-x-0 ${
          darkMode ? "lg:bg-dark-grey" : "lg:bg-backgroundColor"
        } lg:flex-col flex-row h-full overflow-scroll ${
          darkMode ? "bg-lighter-grey" : "bg-white"
        }`}
      >
        <div className="flex lg:flex-col flex-row space-x-5 lg:space-x-0 lg:space-y-5 justify-center items-center">
          <div className="w-9 h-9 hidden lg:block">
            <img className="w-full h-full" src={logo} alt="" />
          </div>
          <div className="w-7 h-7">
            <img
              className="w-full h-full"
              src={darkMode ? categoryDark : category}
              alt=""
            />
          </div>
          <div className="w-7 h-7">
            <img className="w-full h-full" src={trend} alt="" />
          </div>
          <div className="w-7 h-7">
            <img className="w-full h-full" src={profileUser} alt="" />
          </div>
          <div className="w-7 h-7">
            <img className="w-full h-full" src={box} alt="" />
          </div>
          <div className="w-7 h-7">
            <img className="w-full h-full" src={discountShape} alt="" />
          </div>
          <div className="w-7 h-7">
            <img className="w-full h-full" src={infoCircle} alt="" />
          </div>

          {/* div for moon light and sunshine icon */}
          <div
            className={`lg:space-y-4 lg:bg-white ${
              darkMode ? "bg-white" : "bg-lighter-grey"
            } rounded-full w-20 lg:h-20 lg:w-9 h-9 flex lg:flex-col flex-row lg:justify-center justify-between items-center p-2 lg:p-1`}
          >
            <div
              onClick={() => {
                toggleDarkMode(setDarkMode);
              }}
              className={`w-6 h-6 rounded-full ${
                darkMode ? "" : "bg-primary"
              } flex justify-center items-center p-1 hover:cursor-pointer`}
            >
              <img
                className="w-full h-full"
                src={darkMode ? sunshineDark : sunshine}
                alt=""
              />
            </div>
            <div
              onClick={() => {
                toggleDarkMode(setDarkMode);
              }}
              className={`w-6 h-6 hover:cursor-pointer rounded-full flex justify-center items-center ${
                darkMode ? "bg-secondary" : ""
              }`}
            >
              <img
                className="w-full h-full"
                src={darkMode ? moonDark : moon}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* for the remaining part of the menu */}
        <div className="flex lg:flex-col flex-row space-x-3 lg:space-x-0 lg:space-y-5 lg:mt-28">
          <div className="w-7 h-7">
            <img className="w-full h-full" src={arroweRight} alt="" />
          </div>
          <div className="w-7 h-7">
            <img className="w-full h-full" src={setting} alt="" />
          </div>
          <div className="w-7 h-7">
            <img className="w-full h-full" src={logout} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
