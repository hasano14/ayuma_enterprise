import React from "react";

const CardHalfLayout = ({ children, position, style }) => {
  return (
    <div
      className={`flex flex-col w-full md:w-1/2 bg-white border rounded-md shadow-lg px-2 py-2 my-5 ${style} ${
        position === "left" ? "mr-1" : "ml-1"
      }`}
    >
      {children}
    </div>
  );
};

export default CardHalfLayout;
