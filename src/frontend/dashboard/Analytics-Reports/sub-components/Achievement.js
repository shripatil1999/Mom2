import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

export const data = [
    ["Achievement Rate", "Tasks Status in Numbers"],
    ["Completed", 3],
    ["Pending", 1],


];

export const options = {
    pieSliceText: "label",
    title: "Achievement Rate",
    pieStartAngle: 100,
    colors: ['#FB8B24', '#4f7eff', '#bdbdbd'],
};

const Achievement = () => {

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
        </div>
          //  {/* {showColumn && ( */ }
               // // <div data-aos="fade-up"
                //     data-aos-anchor-placement="center-center" className="column flex justify-between m-5">
                //     <div className="">
                //         <p className="font-extrabold text-lg mb-2">PRIORITY</p>
                //         <p className="font-bold">High</p>
                //         <p className="font-bold">Medium</p>
                //         <p className="font-bold">Low</p>
                //     </div>
                //     <div className="text-center">
                //         <p className="font-extrabold text-lg mb-2">COUNT</p>
                //         <p>3</p>
                //         <p>3</p>
                //         <p>2</p>
                //     </div>
                // </div>
            //)}
        
    );
};

export default Achievement;
