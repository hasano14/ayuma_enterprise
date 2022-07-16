import React from "react";
import Homepage from "./components/Home.js";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div class="bg-offwhite transition-all">
      <Sidebar />
      <Homepage />
    </div>
  );
};

export default App;
