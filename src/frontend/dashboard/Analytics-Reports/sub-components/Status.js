import React, { useEffect, useState } from 'react';
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
  title: "Status",
  pieStartAngle: 100,
};

const Status = () => {

  const [showColumn, setShowColumn] = useState(true);

  useEffect(() => {
    // Set a timeout to wait for 1 second (1000 milliseconds)
    const timeoutId = setTimeout(() => {
      // After 1 second, set showColumn to true to display the column
      setShowColumn(true);
    }, 1000);

    // Clean up the timeout if the component unmounts or the effect is re-run
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs only once on mount



  return (
    <div>
      <div data-aos="fade-up"
      className="statusGraph border-2 m-5">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      {showColumn && (
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="column flex justify-between m-5">
        <div className="">
          <p className="font-extrabold text-lg mb-2">STATUS</p>
          <p className="font-bold">Ongoing</p>
          <p className="font-bold">Overdue</p>
          <p className="font-bold">Completed</p>
          <p className="font-bold">Not Started</p>
        </div>
        <div className="text-center">
          <p className="font-extrabold text-lg mb-2">COUNT</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
          <p>2</p>
        </div>
      </div>
            )}
    </div>
  );
};

export default Status;
