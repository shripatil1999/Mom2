import React from 'react'
import { Chart } from "react-google-charts";
const Username = "Mr. XYZ";
// const Year = "2024";
export const data = [
  [
    "Element",
    "Score",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },

  ],
  [`${Username}`, 6.5, "#4169E1", "👤",], // Add null as the fifth element
  ["User 1",9.1 , "#4169E1", "👤",],
  ["User 2", 8.7, "#4169E1", "👤",],
  ["User 3", 8.2, "#4169E1", "👤",],
];

export const options = {
  title: "",
  width: 600,
  height: 400,
  bar: { groupWidth: "65%" },
  legend: { position: "none" },
  annotations: {
    textStyle: {
      fontSize: 20, // Adjust the font size as needed
    },
  },
};

const UserPerformance = () => {
  return (
    <div>
      <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
    </div>
  )
}

export default UserPerformance
