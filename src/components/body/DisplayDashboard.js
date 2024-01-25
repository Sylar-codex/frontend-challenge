import React from "react";
import Header from "../layout/Header";
import SalesTrends from "./SalesTrends";
import Orders from "./Orders";
import SalesReport from "./SalesReport";
import TopPlatform from "./TopPlatform";

function DisplayDashboard({ darkMode }) {
  return (
    <div>
      <Header darkMode={darkMode} />
      <div className="flex flex-col lg:flex-row px-2 py-5">
        <div className="lg:w-3/5 w-full">
          <SalesTrends darkMode={darkMode} />
          <Orders darkMode={darkMode} />
        </div>
        <div className="lg:w-2/5 lg:ml-5 lg:mt-0 mt-7 w-full">
          <SalesReport darkMode={darkMode} />
          <TopPlatform darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default DisplayDashboard;
