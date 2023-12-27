import React from 'react'
import { Chart } from "react-google-charts";
const Username = "Mr. XYZ";
const Year = "2024";
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
  [`${Username}`, 8.94, "#4169E1", "👤",], // Add null as the fifth element
  ["User 1", 10.49, "#4169E1", "👤",],
  ["User 2", 19.3, "#4169E1", "👤",],
  ["User 3", 21.45, "#4169E1", "👤",],
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
