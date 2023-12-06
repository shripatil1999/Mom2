
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  
} from "recharts";

const data = [
  {
    name: "Top Priority",
    tasks: 5,
  },
  {
    name: "High Priority",
    tasks: 2,
  },
  {
    name: "Medium Priority",
    tasks: 2,
  },
  {
    name: "Low Priority",
    tasks: 3,
  },

];

export default function Prioritybarchart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="tasks" fill="#8884d8" />
    </BarChart>
  );
}
