import React from "react";
import Card from "../utility-component/Card";
import boxTick from "../../assets/icons/bulk/box-tick.svg";
import rotate from "../../assets/icons/bulk/3d-rotate.svg";
import shoppingCart from "../../assets/icons/bulk/shopping-cart.svg";
import coin from "../../assets/icons/bulk/coin.svg";

function SalesReport({ darkMode }) {
  return (
    <div className="grid lg:gap-x-5 lg:gap-y-5 gap-x-2 gap-y-5 grid-cols-2 w-full h-[25.8rem]">
      <Card
        title={"Total Order"}
        success={true}
        number={"350"}
        icon={boxTick}
        darkMode={darkMode}
      />
      <Card
        title={"Total Refund"}
        success={false}
        number={"270"}
        icon={rotate}
        darkMode={darkMode}
      />
      <Card
        title={"Average Sales"}
        success={false}
        number={"1567"}
        icon={shoppingCart}
        darkMode={darkMode}
      />
      <Card
        title={"Total Income"}
        success={true}
        number={"$350.000"}
        icon={coin}
        darkMode={darkMode}
      />
    </div>
  );
}

export default SalesReport;
