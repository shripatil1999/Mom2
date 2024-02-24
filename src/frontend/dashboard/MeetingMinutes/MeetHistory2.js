import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GlobalLayout from "../../utils/hoc/globalLayout";

import { db } from "../../../firebase.js";
import { query, collection, getDocs, onSnapshot } from "firebase/firestore";
import { parse, format } from "date-fns";

const MeetHistory = () => {
    const [meetings, setMeetings] = useState([]);
    const [docIDs, setDocIDs] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, "Meetings", format(selectedDate, "dd-MM-yyyy"), "Meet"));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const fetchedMeetings = [];
                    const fetchedDocIDs = [];

                    querySnapshot.forEach((doc) => {
                        fetchedMeetings.push(doc.data());
                        fetchedDocIDs.push(doc.id);
                    });

                    setMeetings(fetchedMeetings);
                    setDocIDs(fetchedDocIDs);
                });

                return () => {
                    // Cleanup the subscription when the component unmounts
                    unsubscribe();
                };
            } catch (error) {
                console.error("Error fetching Meeting:", error);
            }
        };

        fetchData();
    }, [selectedDate]); // Update data when selectedDate changes

    const handleTodayClick = () => {
        setSelectedDate(new Date());
    };

    const handleTabClick = (date) => {
        console.log("Received date:", date);

        // Add additional checks for validity before formatting
        if (isValidDate(date)) {
            console.log("Formatted date:", format(date, "dd-MM-yyyy"));
            setSelectedDate(date);
        } else {
            console.error("Invalid date format:", date);

        }
    };

    const isValidDate = (date) => {
        return date instanceof Date && !isNaN(date);
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
                            dateFormat="dd-MM-yyyy"
                        />

                        <button
                            className="bg-blue-500 h-fit px-2 py-1 text-white rounded"
                            onClick={handleTodayClick}
                        >
                            Today
                        </button>
                    </div>
                    {/* ************************ Sidebar *********************************** */}
                    {meetings.map((meet, index) => (
                        <div key={index} className="space-y-2 mt-4 overflow-y-auto max-h-[calc(100vh)]">
                            <div className="bg-slate-50 mb-3 p-1">
                                <button
                                    key={index}
                                    className={`w-full text-left px-4 py-2 ${selectedDate === meet.meetDateTime ? "bg-gray-100" : ""}`}
                                    onClick={() => handleTabClick(format(parse(meet.meetDateTime, "dd-MM-yyyy,hh:mma", new Date()), "dd-MM-yyyy"))}
                                >
                                    {console.log("UI Date", format(parse(meet.meetDateTime, "dd-MM-yyyy,hh:mma", new Date()), "dd-MM-yyyy"))}
                                    {meet.meetDateTime}
                                </button>

                                {/* Meeting card */}
                                <div className="flex flex-col mt-3">
                                    {date.meetings.map((meeting, index) => (
                                        <div
                                            key={index}
                                            className={`text-lg font-semibold p-3 text-center cursor-pointer border-1 my-2 ${selectedMeeting === meeting
                                                ? "bg-[#f1f5f9] shadow-sm border-blue-600"
                                                : ""
                                                }`}
                                            onClick={() => setSelectedMeeting(meeting)}
                                        >
                                            <p className="text-left text-gray-800">{meeting.name}</p>
                                            <p className="text-xs text-right mt-2 text-gray-600">
                                                4.00 PM to 6.00 PM
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}

                    {docIDs && (
                        docIDs.map((id, index) => (
                            <div key={index}>
                                <li>{index + 1}: {id}</li>
                                {meetings.map((meet, index) => (
                                    meet.meetCode === id && (
                                        <li key={index}>
                                            Department: {meet.department}
                                        </li>)))}
                            </div>
                        ))
                    )}
                    {/* <div className="space-y-2 mt-4 overflow-y-auto max-h-[calc(100vh)]">
                        {meetings.map((date) => (
                            <div className="bg-slate-50 mb-3 p-1" key={date.date}>
                                <button
                                    className={`w-full text-left px-4 py-2 ${selectedDate.toISOString().split("T")[0] === date.date
                                        ? "bg-gray-100"
                                        : ""
                                        }`}
                                    onClick={() => handleTabClick(new Date(date.date))}
                                >
                                    {date.date}
                                </button>

                                {/* Meeting card */}
                    {/* <div className="flex flex-col mt-3">
                                    {date.meetings.map((meeting, index) => (
                                        <div
                                            key={index}
                                            className={`text-lg font-semibold p-3 text-center cursor-pointer border-1 my-2 ${selectedMeeting === meeting
                                                ? "bg-[#f1f5f9] shadow-sm border-blue-600"
                                                : ""
                                                }`}
                                            onClick={() => setSelectedMeeting(meeting)}
                                        >
                                            <p className="text-left text-gray-800">{meeting.name}</p>
                                            <p className="text-xs text-right mt-2 text-gray-600">
                                                4.00 PM to 6.00 PM
                                            </p>
                                        </div>
                                    ))}
                                </div> */}
                    {/* </div>
                        ))}
                    </div>  */}
                </div>

                {/* ************************ DISPLAY *********************************** */}







            </div>


        </GlobalLayout >
    );
};

export default MeetHistory;
