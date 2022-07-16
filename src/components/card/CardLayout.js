import React from "react";

const CardLayout = ({ children }) => {
  return <div className="my-5 rounded-md shadow-lg px-2 flex flex-col bg-white border py-2">{children}</div>;
};

export default CardLayout;

