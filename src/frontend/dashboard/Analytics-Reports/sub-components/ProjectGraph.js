import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import Dropdown from '../../../utils/elements/dropdown';

export const data = [
  ["Project", "Tasks Status in Numbers"],
  ["Task Count", 3],

];

export const options = {
  pieSliceText: "label",
  title: "Project",
  pieStartAngle: 100,
  colors: ['#FB8B24', '#4f7eff', '#bdbdbd'],
};

const ProjectGraph= () => {

    const [showColumn, setShowColumn] = useState(true);

  useEffect(() => {
    // Set a timeout to wait for 1 second (1000 milliseconds)
    const timeoutId = setTimeout(() => {
      // After 1 second, set showColumn to true to display the column
      setShowColumn(true);
      console.log('object')
    }, 1000);

    // Clean up the timeout if the component unmounts or the effect is re-run
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs only once on mount


  return (
    <div>
      <div className="drop flex justify-end p-3 pt-5">
      <Dropdown project1="Project Number 1" project2="Project Number 2" project3="Project Number 3" />
      </div>
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
     data-aos-anchor-placement="center-center"  className="column flex justify-between m-5">
        <div className="">
          <p className="font-extrabold text-lg mb-2">PROJECT</p>
          <p className="font-bold">Project Name</p>
        </div>
        <div className="text-center">
          <p className="font-extrabold text-lg mb-2">COUNT</p>
          <p>3</p>

        </div>
      </div>
            )}
    </div>
  );
};

export default ProjectGraph;
