import React, { useState } from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Body = ({showState}) => {
  const [showSidebar, setShowSidebar] = useState(showState);
  const genericHamburgerLine =
    "h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300";

  return (
    <aside
      className={`${
        showSidebar ? "w-1/2 md:w-1/6 translate-x-0" : "w-12"
      } bg-white border-r-2 min-h-screen fixed border-gray-300 ease-in-out transition duration-300`}
    >
      <button
        className="left-2 top-0 mt-2 flex flex-col h-12 w-12 rounded justify-center items-center group my-10"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <div className="z-50">
          <div
            className={`${genericHamburgerLine} 
          ${
            showSidebar
              ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
          ></div>
          <div
            className={`${genericHamburgerLine} ${
              showSidebar ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          ></div>
          <div
            className={`${genericHamburgerLine} ${
              showSidebar
                ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          ></div>
        </div>
      </button>
      <div className="flex flex-col items-left overflow-hidden py-auto px-2 bg-gray-50 rounded h-full">
        <div className="flex flex-row group my-5">
          <ReceiptLongIcon
            className="w-12 h-12 text-gray-400 group-hover:text-gray-900 transition-colors group-hover:cursor-pointer"
            sx={{ fontSize: 28 }}
          />
          <ul className={`${showSidebar ? "block" : "hidden"} text-gray-400 group-hover:text-gray-900 group-hover:cursor-pointer transition-colors px-2`}>
            Invoices
          </ul>
        </div>
        <div className="flex flex-row group">
          <AccountBalanceIcon
            className="w-12 h-12 text-gray-400 group-hover:text-gray-900 transition-colors group-hover:cursor-pointer"
            sx={{ fontSize: 28 }}
          />
          <ul className={`${showSidebar ? "block" : "hidden"} text-gray-400 group-hover:text-gray-900 group-hover:cursor-pointer transition-colors px-2`}>
            Billings
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Body;
