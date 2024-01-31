import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GlobalLayout from "../../utils/hoc/globalLayout";

const tasksData = [
  {
    date: "2024-01-31",
    tasks: [{ TaskName: "abc1" }, { TaskDetails: "xyz1" }],
  },
  {
    date: "2024-02-01",
    tasks: [{ TaskName: "abc2" }, { TaskDetails: "xyz2" }],
  },
  {
    date: "2024-02-02",
    tasks: [{ TaskName: "abc3" }, { TaskDetails: "xyz3" }],
  },
  // Add more data as needed
];
const MeetHistory = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTabClick = (date) => {
    setSelectedDate(date);
  };

  const handleTodayClick = () => {
    setSelectedDate(new Date());
  };

  return (
    <GlobalLayout>
      <div className="flex">
        <div>
          <div className="flex">
            <DatePicker
              className="border-1 border-black w-2/3 h-fit"
              showIcon
              selected={selectedDate}
              onChange={(date) => handleTabClick(date)}
              showYearDropdown
              dateFormat="dd-MM-yyyy"
            />
            <button
              className=" bg-blue-500 h-fit px-2 py-1 text-white rounded"
              onClick={handleTodayClick}
            >
              Today
            </button>
          </div>

          <div className="space-y-2 mt-4">
            {tasksData.map((task) => (
              <div key={task.date}>
                <button
                  className={`w-full text-left px-4 py-2 ${
                    selectedDate.toISOString().split("T")[0] === task.date
                      ? "bg-gray-300"
                      : ""
                  }`}
                  onClick={() => handleTabClick(new Date(task.date))}
                >
                  {task.date}
                </button>
                {task.tasks.map((taskItem, index) => (
                  <p key={index}>{taskItem.TaskName}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ****************************** */}
        <div className="w-3/4">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">
              Tasks for {selectedDate.toLocaleDateString()}
            </h2>
            <ul>
              {tasksData
                .find(
                  (task) =>
                    task.date === selectedDate.toISOString().split("T")[0]
                )
                ?.tasks?.map((task, index) => (
                  <>
                    <li key={index} className="mb-2">
                      {task.TaskName}
                    </li>
                    <li key={index} className="mb-2">
                      {task.TaskDetails}
                    </li>
                  </>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default MeetHistory;
