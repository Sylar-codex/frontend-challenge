import React, { useState } from "react";
import Nav from "../nav/Nav";
import DisplayDashboard from "../body/DisplayDashboard";

function Main() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`${darkMode ? "bg-dark-grey" : "bg-backgroundColor"} ${
        darkMode ? "text-white" : "text-primaryTextColor"
      } h-full w-full flex lg:flex-row flex-col-reverse`}
    >
      <div className="lg:w-20 w-full">
        <div className="p-9 block lg:hidden"></div>
        <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
      <div className="w-full">
        <DisplayDashboard darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Main;
