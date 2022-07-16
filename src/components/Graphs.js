import React from "react";
import {
  PieChart,
  Pie,
  LabelList,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import CardHalfLayout from "./card/CardHalfLayout";
import CardHalfLayoutContent from "./card/CardHalfLayoutContent";
import CardHeader from "./card/CardHeader";

const Graphs = () => {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <CardHalfLayout position="left">
      <CardHeader>Sales</CardHeader>
      <CardHalfLayoutContent>
        <PieChart width={300} height={300}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            nameKey="name"
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </CardHalfLayoutContent>
    </CardHalfLayout>
  );
};

export default Graphs;
