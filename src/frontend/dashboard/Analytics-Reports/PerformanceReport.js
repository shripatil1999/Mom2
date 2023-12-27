import { React } from "react";
import GlobalLayout from "../../utils/hoc/globalLayout";

import UserPerformance from "./sub-components/UserPerformance";

const PerformanceReport = () => {
  const Username = "Mr. XYZ";
  const Year = "2024";

  return (
    
    <GlobalLayout>
      <div className="title mt-4">
        <p className="text-2xl">
          Performance Metrics – Current Ongoing Performance of the{" "}
          <strong>{Username}</strong> for the year <strong>{Year}</strong>
        </p>
      </div>
      <div className="MainNMetrics flex">
        <div className="UserPerfromance">
          <UserPerformance/>
        </div>
        <div className="PerformanceMeter"></div>
      </div>
    </GlobalLayout>
  );
};

export default PerformanceReport;
