import React from "react";
import CardHalfLayout from "./card/CardHalfLayout";
import CardHalfLayoutContent from "./card/CardHalfLayoutContent";
import CardHeader from "./card/CardHeader";

const Graphs = () => {
  return (
    <CardHalfLayout position="right">
      <CardHeader>Graphs Example 2</CardHeader>
      <CardHalfLayoutContent>
        <div>This is an example of a graph</div>
      </CardHalfLayoutContent>
    </CardHalfLayout>
  );
};

export default Graphs;
