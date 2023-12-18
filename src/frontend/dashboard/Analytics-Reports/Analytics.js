import React, { useState } from "react";
import GlobalLayout from "../../utils/hoc/globalLayout";
import Dropdown from "../../utils/elements/dropdown";
import { Chart } from "react-google-charts";
import { CircularProgressbar as CircularProgress } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Analytics = () => {
  // State for selected project, month, and week
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedWeek, setSelectedWeek] = useState(1); // Default to Week 1

  const percentage = 80;
  const TotalScore = 5.5;
  // Function to update the data based on selected project, month, and week
  const updateChartData = () => {
    // Update your data here based on selectedProject, selectedMonth, and selectedWeek
    // You may fetch data from an API or use some logic to generate dynamic data
    // Example: Update data based on the selectedWeek
    const weekData = getWeekData(selectedWeek);
    // Use weekData to update the chart data
    return weekData;
  };

  // Function to get example data for a specific week (replace with your data logic)
  const getWeekData = (weekNumber) => {
    // Example: Assuming each week has the same data structure
    return [
      ["Element", "Tasks", { role: "style" }, { sourceColumn: 0, role: "annotation", type: "string", calc: "stringify" }],
      ["Monday", 8.94 + weekNumber, "#4169E1", null],
      ["Tuesday", 10.49 + weekNumber, "#4169E1", null],
      ["Wednesday", 19.3 + weekNumber, "#4169E1", null],
      ["Thursday", 21.45 + weekNumber, "#4169E1", null],
      ["Friday", 21.45 + weekNumber, "#4169E1", null],
      ["Saturday", 21.45 + weekNumber, "#4169E1", null],
    ];
  };

  // Event handlers for dropdowns and buttons
  const handleProjectChange = (project) => {
    setSelectedProject(project);
    updateChartData();
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    updateChartData();
  };

  const handleWeekChange = (increment) => {
    setSelectedWeek((prevWeek) => prevWeek + increment);
    updateChartData();
  };

  // Placeholder data (replace with your dynamic data)
  const data = updateChartData();

  const options = {
    width: 800,
    height: 400,
    bar: { groupWidth: "40%" },
    legend: "bottom",
  };
  let TotalTaskToday = "4";
  let TotalTaskCompletionPercentage = "70%";
  let score = "6.8";
  let username = "Mr. XYZ";

  return (
    <GlobalLayout>
      {/* Header */}
      <div className="header flex mt-4 p-2">
        {/* User information */}
        <div className=" flex flex-col items-center text-center w-fit ms-2">
          <img className="w-28" src="/images/icons/user.png" alt="" />
          <div className="user-name w-full bg-slate-200 text-black rounded-sm px-1 m-2">
            <p className="font-bold text-sm">{"User Name"}</p>
          </div>
        </div>
        {/* User message */}
        <div className="message px-4">
          <p>
            Hii, <strong> {username} </strong>
          </p>
          <p>
            Today, you have achieved a score of <strong>{score}</strong>. You
            are tasked with completing <strong> {TotalTaskToday}</strong> tasks,
            and your progress stands at{" "}
            <strong> {TotalTaskCompletionPercentage}</strong>. <br /> Your
            performance can be described as <strong> {Performance}</strong>.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="main">
        {/* Project dropdown */}
        <div className="dropdown flex justify-end me-5">
          {/* Pass event handlers and selected values to the dropdown component */}
          <Dropdown
            project={selectedProject}
            month={selectedMonth}
            week={selectedWeek}
            onProjectChange={handleProjectChange}
            onMonthChange={handleMonthChange}
            onWeekChange={handleWeekChange}
          />
        </div>

        {/* Analytical Parameters */}
        <div className="analyticalParameters flex flex-nowrap sm:flex-nowrap md:flex-nowrap lg:md:flex-nowrap">
          {/* Weekly Graph */}
          <div className="WeeklyGraph ">
            <div className="flex items-center">
              <p>Activity tracker for the Month of </p>
              <select
                id="months"
                className="border border-black rounded-md bg-gray-50 text-black px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white block w-fit mx-2"
              >
                <option defaultValue="None">Choose a Month</option>
                <option value="a">January</option>
                <option value="a">February</option>
                <option value="a">March</option>
                <option value="a">April</option>
                <option value="a">May</option>
                <option value="a">June</option>
                <option value="a">July</option>
                <option value="a">August</option>
                <option value="a">September</option>
                <option value="a">October</option>
                <option value="a">November</option>
                <option value="a">December</option>
              </select>
            </div>

            {/* Daily Task Graph */}
            <div className="dailyTaskGraph border p-2 mt-3">
              <div className="flex items-center">
              <p>Activity - Task Completed each Day &nbsp;</p>
                <button
                  onClick={() => handleWeekChange(-1)}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-fit px-1 border border-gray-600 rounded-full hover:shadow"
                >
                  <i className="bi bi-caret-left-fill"></i>
                </button>
                <p>&nbsp; Week {selectedWeek} &nbsp;</p>
                <button
                  onClick={() => handleWeekChange(1)}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-fit px-1 border border-gray-600 rounded-full hover:shadow"
                >
                  <i className="bi bi-caret-right-fill"></i>
                </button>
              </div>
              <div className="w-1/2">
                <Chart
                  chartType="ColumnChart"
                  width="80%"  // Adjusted width
                  height="100%"  // Adjusted height
                  data={data}
                  options={options}
                />
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="Progress border w-fit border-black rounded-3xl p-3 m-2 ">
            <p className="font-bold">Progress</p>
            <div style={{ width: '100%',  marginTop:'50%',}}>
              <CircularProgress value={percentage} text={`${percentage}%`} />
            </div>
          </div>

          {/* Total Score */}
          <div className="Score Progress border w-fit border-black rounded-3xl px-4 py-2 m-2 ">
            <p className="font-bold">Your Total Score</p>
            <div style={{ width: '100%', marginTop:'50%',}}>
              <CircularProgress
                maxValue={10}
                value={TotalScore}
                text={`${TotalScore}/10`}
              />
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default Analytics;
