import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GlobalLayout from "../../utils/hoc/globalLayout";
import tasksData from "./tasksData.json";

const MeetHistory = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const handleTabClick = (selectedDate) => {
    // Find the corresponding date object in tasksData
    const dateObject = tasksData.dates.find((date) => {
      const formattedDate = new Date(date.date).toISOString().split("T")[0];
      return formattedDate === selectedDate.toISOString().split("T")[0];
    });

    if (dateObject && dateObject.meetings && dateObject.meetings.length > 0) {
      // Set selectedMeeting to the first meeting of the selected date
      const firstMeeting = dateObject.meetings[0];
      // console.log("First Meeting:", firstMeeting);
      setSelectedMeeting(firstMeeting);
    } else {
      // If there are no meetings, set selectedMeeting to null or handle it accordingly
      setSelectedMeeting(null);
    }
  };
  const handleTodayClick = () => {
    setSelectedDate(new Date());
    // Find the corresponding date object in tasksData
    const dateObject = tasksData.dates.find((date) => {
      const formattedDate = new Date(date.date).toISOString().split("T")[0];
      return formattedDate === selectedDate.toISOString().split("T")[0];
    });

    if (dateObject && dateObject.meetings && dateObject.meetings.length > 0) {
      // Set selectedMeeting to the first meeting of the selected date
      const firstMeeting = dateObject.meetings[0];
      // console.log("First Meeting:", firstMeeting);
      setSelectedMeeting(firstMeeting);
    } else {
      // If there are no meetings, set selectedMeeting to null or handle it accordingly
      setSelectedMeeting(null);
    }
  };

  return (
    <GlobalLayout>
      <div className="flex">
        <div>
          {/* ************************ calender *********************************** */}

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

          {/* ************************ Sidebar *********************************** */}

          <div className="space-y-2 mt-4 ">
            {tasksData.dates.map((date) => (
              <div key={date.date}>
                <button
                  className={`w-full text-left px-4 py-2 ${
                    selectedDate.toISOString().split("T")[0] === date.date
                      ? ""
                      : ""
                  }`}
                  onClick={() => handleTabClick(new Date(date.date))}
                >
                  {date.date}
                </button>

                {/* Meeting card */}
                <div className="flex flex-col mt-3">
                  {date.meetings.map((meeting, index) => (
                    <div
                      key={index}
                      className={`text-lg font-semibold p-3 text-center cursor-pointer border-1 my-2 ${
                        selectedMeeting === meeting
                          ? "bg-[#f1f5f9] shadow-sm"
                          : ""
                      }`}
                      onClick={() => setSelectedMeeting(meeting)}
                    >
                      <p className="text-left text-gray-800"> {meeting.name}</p>
                      <p className="text-xs text-right mt-2 text-gray-600">
                        4.00 PM to 6.00 PM
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ************************ DISPLAY *********************************** */}
        {selectedMeeting && (
          <div className="w-3/4 p-4">
            <div className="flex justify-between">
              <p>Date: {selectedDate.toLocaleDateString()}</p>
              <p>Duration of the Meeting: 4 Hours 30 Mins.</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="">Meet Code: {selectedMeeting.meetID}</p>
              <p>Meeting held at: {selectedMeeting.location}</p>
            </div>
            <h2 className="text-xl font-bold my-3">
              {selectedMeeting && ` ${selectedMeeting.name}`}{" "}
            </h2>
            <div className="flex justify-between">
              <div className="chairing">
                <p>Chairing By:</p>

                {selectedMeeting.chairing.map((chair, index) => (
                  <div className="flex">
                  <span key={index}>{chair}</span>
                  </div>
                ))}
                
              </div>
            </div>

            <ul>
              {selectedMeeting &&
                selectedMeeting.tasks.map((task, index) => (
                  <React.Fragment key={index}>
                    <li className="mb-2">{task.uid}</li>
                    <li className="mb-2">{task.description}</li>
                  </React.Fragment>
                ))}
            </ul>
          </div>
        )}
      </div>
    </GlobalLayout>
  );
};

export default MeetHistory;
