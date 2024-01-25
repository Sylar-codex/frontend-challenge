import React from "react";
import upTrend from "../../assets/icons/trending-up.svg";
import downTrend from "../../assets/icons/trending-down.svg";
import successIcon from "../../assets/icons/success.svg";
import errorIcon from "../../assets/icons/error.svg";
import boxTick from "../../assets/icons/bulk/box-tick.svg";
import rotate from "../../assets/icons/bulk/3d-rotate.svg";
import shoppingCart from "../../assets/icons/bulk/shopping-cart.svg";

function Card({ success, icon, title, number, darkMode }) {
  return (
    <div
      className={`${
        darkMode ? "bg-lighter-grey" : "bg-white"
      } shadow-sm rounded-lg p-3`}
    >
      <div className="flex justify-between items-center">
        <div className="w-8 h-8 border rounded-full border-headerStroke p-1">
          <img className="w-full h-full" src={icon} alt="" />
        </div>
        <div>
          <img src={success ? successIcon : errorIcon} alt="" />
        </div>
      </div>
      <h3 className="mt-5 text-[#898989] text-lg capitalize">{title}</h3>
      <h2
        className={`mt-2 ${darkMode ? "text-white" : "text-[#3A3F51]"} text-xl`}
      >
        {number}
      </h2>
      <div className="flex items-center justify-between mt-5">
        <div
          className={`flex items-center py-1 px-2 space-x-1 ${
            success ? "bg-primary" : "bg-error"
          } bg-opacity-[12%] rounded-2xl`}
        >
          <img className="w-4 h-4" src={success ? upTrend : downTrend} alt="" />
          <p
            className={`${
              success ? "text-primary" : "text-error"
            } lg:text-sm text-xs`}
          >
            23.5%
          </p>
        </div>
        <p className="text-[#606060] lg:text-sm text-xs">vs.previous month</p>
      </div>
    </div>
  );
}

export default Card;
