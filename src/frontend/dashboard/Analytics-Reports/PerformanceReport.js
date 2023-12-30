import { React } from "react";
import GlobalLayout from "../../utils/hoc/globalLayout";
import GaugeComponent from 'react-gauge-component'
import UserPerformance from "./sub-components/UserPerformance";
import WeeklyDatePicker from "./sub-components/CalendarTask";

const PerformanceReport = () => {
  const Username = "Mr. XYZ";
  const Year = "2024";
  // const [currentPercent, setCurrentPercent] = useState();
  // const [arcs, setArcs] = useState([0.5, 0.3, 0.2])

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
  //     setCurrentPercent(Math.random());
  //     setArcs([0.1, 0.5, 0.4])
	// 	}, 3000);

	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, []);

	// const chartStyle = {
	// 	height: 250,
	// }

  return (

    <GlobalLayout>
      <div className="title mt-4">
        <p className="text-2xl">
          Performance Metrics – Current Ongoing Performance of the{" "}
          <strong>{Username}</strong> for the year <strong>{Year}</strong>
        </p>
      </div>
      <div className="flex">
        <div className="MainNMetrics flex flex-col flex-wrap">
          <div className="UserPerfromance">
            <UserPerformance />
          </div>
          <div className="PerformanceMeter flex justify-center w-full h-fit">
            <GaugeComponent
              value={50}
              type="radial"
              width="500px"
              labels={{
                color:"#ffff",
                tickLabels: {
                  type: "inner",
                  ticks: [
                    { value: 20 },
                    { value: 40 },
                    { value: 60 },
                    { value: 80 },
                    { value: 100 }
                  ]
                }
              }}
              arc={{
                colorArray: ['#70e000', '#EA4228'],
                subArcs: [{ limit: 20 }, { limit: 40 }, {limit: 60}, {limit: 80}, {limit: 100}],
                padding: 0.02,
                width: 0.3
              }}
              pointer={{
                elastic: true,
                animationDelay: 0
              }}
            />

          </div>
        </div>
        <WeeklyDatePicker />
      </div>
    </GlobalLayout>
  );
};

export default PerformanceReport;
