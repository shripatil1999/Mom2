import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Status", "Tasks Status in Percentage"],
  ["Not Started", 2],
  ["Overdue", 2],
  ["On Going", 1],
  ["Completed", 3],
];

export const options = {
  pieSliceText: "label",
  width: 800,
  height: 400,
  pieStartAngle: 100,
  legend: { position: "none" },
  animation: {
    startup: true,
    easing: "linear",
    duration: 1000,
  },
};

const TaskPieChart = () => {

  return (
    <div >

        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"100%"}
        />
    
    </div>
  );
};

export default TaskPieChart;

