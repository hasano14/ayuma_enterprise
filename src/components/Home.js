import React from "react";
import Invoice from "./invoice-table/Body";
import Pending from "./pending-table/Table";
import Graphs from "./Graphs";
import Graphs2 from "./Graphs copy";
import Graphs3 from "./Graphs copy 2";

const Home = () => {
  return (
    <div className="container mx-3 my-auto flex flex-col md:mx-auto">
      <div className="flex flex-col md:flex-row md:gap-3">
        <div className="block w-full md:w-1/2">
          <div className="flex flex-row">
            <Graphs2 />
            <Graphs3 />
          </div>
          <div className="flex flex-row">
            <Graphs2 />
            <Graphs3 />
          </div>
          <div className="flex flex-row">
            <Graphs2 />
            <Graphs3 />
          </div>
        </div>
        <Graphs />
      </div>
      <Pending />
      <Invoice />
    </div>
  );
};

export default Home;
