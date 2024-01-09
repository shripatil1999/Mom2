import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Element",
    "Density",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Top Priority", 3, "red", null],
  ["High", 5, "#FB8B24", null],
  ["Medium", 2, "#4f7eff", null],
  ["Low", 7, "#bdbdbd", null],
];

export const options = {
  title: "Priority wise Tasks",
  width: 500,
  height: 400,
  bar: { groupWidth: "65%" },
  legend: { position: "none" },
};

export default function  Prioritybarchart() {
  return (
    <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
    />
  );
}
