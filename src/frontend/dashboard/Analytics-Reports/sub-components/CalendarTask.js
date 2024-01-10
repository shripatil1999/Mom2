import React, { useState } from "react";
import {
    format,
    addDays,
    startOfWeek,
    endOfWeek,
    isSameDay,
    addWeeks,
    subWeeks,
} from "date-fns";

const WeeklyDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [taskDetails, setTaskDetails] = useState({

        "2024-01-01": ["Task details 1", "Task details 2"],
        "2024-01-10": "Task details will be shown here.",
        "2024-01-11": "Task details",
        "2024-01-13": "Task details",
        "2024-01-08": "Task details",
        "2024-01-14": "Task details",

    });

    console.log(setTaskDetails);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handlePrevWeek = () => {
        setSelectedDate(subWeeks(selectedDate, 1));
    };

    const handleNextWeek = () => {
        setSelectedDate(addWeeks(selectedDate, 1));
    };

    const generateDays = () => {
        const start = startOfWeek(selectedDate);
        const end = endOfWeek(selectedDate);

        const days = [];
        let currentDate = start;

        while (currentDate <= end) {
            days.push(currentDate);
            currentDate = addDays(currentDate, 1);
        }

        return days;
    };

    return (
        <>
            <div className="p-2 mt-5 w-fit">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">
                        {format(selectedDate, "MMMM yyyy")}
                    </h2>
                    <div>
                        <button
                            className="px-2 py-1 bg-blue-500 text-white rounded-full mr-2"
                            onClick={handlePrevWeek}
                        >
                            <i className="bi bi-arrow-left-short text-`xl`"></i>
                        </button>
                        <button
                            className="px-2 py-1 rounded-full bg-blue-500 text-white ml-2"
                            onClick={handleNextWeek}
                        >
                            <i className="bi bi-bold bi-arrow-right-short text-xl"></i>
                        </button>
                    </div>
                </div>
                <div className="flex">
                    {generateDays().map((day) => (
                        <div key={day.getTime()}>
                            <div
                                className={`day p-4 border border-black m-0.5 ${isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : ""
                                    }`}
                                onClick={() => handleDateChange(day)}
                            >
                                <div className="font-bold">{format(day, "EEE")}</div>
                                <div>{format(day, "d")}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-bottom border-black mt-4"></div>
                <div className="tasks mt-4 border border-black rounded-md b p-3 ">
                    <h3 className="text-xl font-bold mb-2">Task Details</h3>
                    {taskDetails[format(selectedDate, "yyyy-MM-dd")] ? (
                        <p>{taskDetails[format(selectedDate, "yyyy-MM-dd")]}</p>
                    ) : (
                        <p>No tasks for this date.</p>
                    )}
                </div>
                <div className="tasks mt-4 border border-black rounded-md b p-3 ">
                    <h3 className="text-xl font-bold mb-2">Task Details</h3>
                    {taskDetails[format(selectedDate, "yyyy-MM-dd")] ? (
                        <p>{taskDetails[format(selectedDate, "yyyy-MM-dd")]}</p>
                    ) : (
                        <p>No tasks for this date.</p>
                    )}
                </div>
                <div className="ImprovementAreas mt-4 border border-black rounded-md b p-3 ">
                        <p>Key areas to Improve based on Task.</p>
                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                            <li>Point 4</li>
                        </ul>
                </div>
            </div>

        </>
    );
};

export default WeeklyDatePicker;
