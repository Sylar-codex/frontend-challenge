import React from "react";
import { orders } from "../../dummy-data/data";
import document from "../../assets/icons/outline/document-download.svg";
import documentDark from "../../assets/icons/dark-mode/document-download_dark.svg";

function Orders({ darkMode }) {
  return (
    <div
      className={`${
        darkMode ? "bg-lighter-grey" : "bg-white"
      } lg:h-96 h-88 w-full rounded-lg shadow-sm mt-5 px-2 py-2 lg:px-8 lg:py-4`}
    >
      <div className="flex justify-between ">
        <h2
          className={`${
            darkMode ? "text-white" : "text-primaryTextColor"
          } text-lg`}
        >
          Last Orders
        </h2>
        <h2 className="text-primary text-lg">See All</h2>
      </div>
      <div className="w-full overflow-x-scroll">
        <div className="w-[145%] lg:w-full">
          <div className="flex w-full mt-6 text-[#9CA4AB]">
            <h3 className="lg:w-3/12 w-[40%]">Name</h3>
            <h3 className="lg:w-1/6 w-[30%]">Date</h3>
            <h3 className="lg:w-1/6 w-[25%]">Amount</h3>
            <h3 className="lg:w-1/6 w-[25%]">Status</h3>
            <h3 className="lg:w-1/6 w-[25%]">Invoice</h3>
          </div>
          <div className="text-sm">
            {orders.map((order) => (
              <div
                className="mt-2 border-t-2 border-headerStroke p-2 flex items-center w-full"
                key={order.id}
              >
                <div className="flex space-x-1 items-center lg:w-3/12 w-[40%]">
                  <div className="w-5 h-5 rounded-full">
                    <img
                      className="w-full h-full rounded-full object-contain"
                      src={order.image}
                      alt=""
                    />
                  </div>
                  <p>{order.name}</p>
                </div>

                <p className="lg:w-1/6 w-[30%] text-neutral-500">
                  {order.date}
                </p>
                <p
                  className={`lg:w-1/6 w-[25%] ${
                    darkMode ? "text-white" : "text-[#0D062D]"
                  }`}
                >
                  {order.amount}
                </p>
                <p
                  className={`lg:w-1/6 w-[25%] ${
                    order.paid ? "text-primary" : "text-error"
                  }`}
                >
                  {order.paid ? "Paid" : "Refund"}
                </p>
                <div className="lg:w-1/6 w-[25%] flex items-center space-x-0.5">
                  <img
                    className="w-4 h-4"
                    src={darkMode ? documentDark : document}
                    alt=""
                  />
                  <p
                    className={`${darkMode ? "text-white" : "text-[#0D062D]"}`}
                  >
                    View
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
