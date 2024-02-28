import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GlobalLayout from "../../utils/hoc/globalLayout";

import { db } from "../../../firebase.js";
import { query, collection, onSnapshot } from "firebase/firestore";
import { parseISO, format } from "date-fns";

const MeetHistory = () => {
    const [meetings, setMeetings] = useState([]);
    const [docIDs, setDocIDs] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedMeeting, setSelectedMeeting] = useState(null);
    // const [datesOfMeet, setDatesOfMeet] = useState([])
    const currentDate = format(new Date(), "dd-MM-yyyy");
    // console.log(currentDate)
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
    }, [selectedDate]);

    console.log(selectedMeeting)
    // useEffect(() => {
    //     const fetchDates = async () => {
    //         try {
    //             const q = query(collection(db, "Meetings"));
    //             const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //                 const fetchedDocIDs = [];
    //                 querySnapshot.forEach((doc) => {
    //                     fetchedDocIDs.push(doc.id);
    //                 });
    //                 console.log("Dates ID", fetchedDocIDs)
    //                 setDatesOfMeet(fetchedDocIDs);
    //             });
    //             return () => {
    //                 // Cleanup the subscription when the component unmounts
    //                 unsubscribe();
    //             };
    //         } catch (error) {
    //             console.error("Error fetching Meeting:", error);
    //         }
    //     };

    //     fetchDates();
    // }, [datesOfMeet]); // Update data when selectedDate changes


    // console.log("dates", datesOfMeet);


    const handleTodayClick = () => {
        setSelectedDate(new Date());
        updateSelectedMeeting(new Date());
    };

    const handleTabClick = (date) => {
        console.log("Received date:", date);

        // Add additional checks for validity before formatting
        // if (isValidDate(date)) {
        // console.log("Formatted date:", format(date, "dd-MM-yyyy"));
        setSelectedDate(date);
        updateSelectedMeeting(date);

        // } else {
        console.error("Invalid date format:", date);

    }
    // };

    // const isValidDate = (date) => {
    //     return date instanceof Date && !isNaN(date);
    // };

    const updateSelectedMeeting = (date) => {

        const dateObject = meetings.find((meet) => {
            const [formattedDate, formattedTime] = meet.meetDateTime.split(",");
            console.log("unformattedDate", meet.meetDateTime)

            console.log("formattedDate", formattedDate)
            const anotherDate = format(date, "dd-MM-yyyy")
            console.log("Another Date", anotherDate)

            return formattedDate === anotherDate;
        });

        console.log("dateObject 1", dateObject)
        console.log("dateObject 2", format(date, "dd-MM-yyyy,hh:mma"))


        // if (dateObject && dateObject.meetDateTime.length > 0) {
        //     const firstMeeting = dateObject.meeting[0];
        //     setSelectedMeeting(firstMeeting);
        //     console.log("success ")
        // } else {
        //     setSelectedMeeting(null);
        // }
    };

    useEffect(() => {
        // Load details of the first meeting when the component mounts
        updateSelectedMeeting(selectedDate);
    }, [selectedDate, updateSelectedMeeting]); // Empty dependency array ensures it runs only once on mount


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
                                // onClick={() => handleTabClick(meet.meetDateTime)}
                                >
                                    {/* {console.log("UI Date", (format(parseISO(meet.meetDateTime, "dd-MM-yyyy,hh:mma", new Date()), "dd-MM-yyyy,hh:mma"))} */}
                                    {meet.meetDateTime}
                                </button>
                                {/* Meeting card */}
                                <div className="flex flex-col mt-3">
                                    <div

                                        className={`text-lg font-semibold p-3 text-center cursor-pointer border-1 my-2 ${selectedMeeting === meet
                                            ? "bg-[#f1f5f9] shadow-sm border-blue-600"
                                            : ""
                                            }`}
                                        onClick={() => setSelectedMeeting(meet)}
                                    >
                                        <p className="text-left text-gray-800">{meet.meetDateTime}</p>
                                        <p className="text-xs text-right mt-2 text-gray-600">
                                            Duration:{meet.duration}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* {datesOfMeet.map((date) => (<>
                        <li>{date}</li>
                    </>))} */}



                    {/* {docIDs && (
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
                    )} */}

                </div>
                {/* ************************ DISPLAY *********************************** */}
                {selectedMeeting && (
                    <div className="w-3/4 p-4 m-2 shadow-sm border bg-slate-50 border-blue-600">
                        <div className="flex justify-between">
                            <p><span className="font-semibold uppercase"> Date:</span> {selectedDate.toLocaleDateString()}</p>
                            <p><span className="font-semibold uppercase">Duration of the Meeting:</span> 4 Hours 30 Mins.</p>
                        </div>
                        <div className="flex justify-between my-2">
                            <p className=""><span className="font-semibold uppercase">Meet Code: </span>{selectedMeeting.meetCode}</p>
                            <p><span className="font-semibold uppercase">Meeting held at: </span> {selectedMeeting.location}</p>
                        </div>
                        <h2 className="text-2xl text-blue-950 font-bold my-4">
                            {selectedMeeting && ` ${selectedMeeting.meetDateTime}`}{" "}
                        </h2>
                        <div className="flex justify-between">
                            <div className="chairing mb-2 w-1/3">
                                <p><span className="font-semibold uppercase ">Chairing By:</span></p>
                                <div className="flex ">

                                    <span className="border-1 bg-pink-100 border-pink-600 p-2 m-1 shadow-sm shadow-pink-700">
                                        {selectedMeeting.chaired}
                                    </span>

                                </div>
                            </div>
                            <div className="attendees">
                                <p className="font-semibold uppercase">Attendees:</p>
                                <div className="flex flex-wrap">
                                    {selectedMeeting.attendees.map((attend, index) => (
                                        <span className="border-1 bg-blue-200 border-blue-900 p-2 m-1 shadow-sm shadow-blue-900" key={index}>
                                            {attend.attendeeName}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* **************** TASKS ****************** */}
                        {selectedMeeting &&
                            selectedMeeting.tasks.map((task) => (
                                <>

                                    <section className="w-full mt-4">
                                        <details className="w-full bg-white border-1 border-opacity-5 rounded-xl shadow-md group mx-auto overflow-hidden max-h-full open:!max-h-[400px] transition-[max-height] duration-500">
                                            <summary className="flex items-center bg-gray-50 text-lg px-2 py-2 outline-none cursor-pointer focus:text-indigo-800 font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:left-3 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
                                                <p className="ml-6">UID: {task.taskUID}</p>{" "}
                                                <p className="ml-auto">AGENDA: {task.agenda}</p>
                                                <div className="actionBy mb-1 ml-auto flex items-center">
                                                    <p>ACTION BY: </p>

                                                    <span className="border-1 text-base font-normal bg-pink-100 border-pink-600 p-2 m-1 shadow-sm shadow-pink-700">
                                                        {selectedMeeting.actionBy}
                                                    </span>

                                                </div>
                                            </summary>

                                            <hr className="" />

                                            <div className="p-3">
                                                <div className="flex justify-between">
                                                    <p className="start"><span className="font-semibold uppercase">Start Date:  </span>{task.startDate.seconds}</p>
                                                    <p className="start"><span className="font-semibold uppercase">Target Date: </span>{task.targetDate.seconds}</p>
                                                </div>
                                                <div className="supporter my-2 ml-auto flex items-center">
                                                    <p><span className="font-semibold uppercase">Supporter: </span></p>
                                                    {task.supporters.map((supporter) => (
                                                        <span className="border-1 bg-blue-200 border-blue-900 p-2 m-1 shadow-sm shadow-blue-900">
                                                            {supporter}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="Description my-2">
                                                    <p className="font-semibold uppercase">Description:</p>
                                                    <p>{task.description}</p>
                                                </div>
                                                <p className="font-semibold mt-4 mb-1 uppercase">Subtask:</p>
                                                {task.subTasks.map((subtask, index) => (
                                                    <ol>
                                                        <li key={index}>{subtask}</li>
                                                    </ol>
                                                ))}
                                            </div>
                                        </details>
                                        {/* <React.Fragment key={index}>
                    <li className="mb-2"></li>
                    <li className="mb-2">{task.description}</li>
                  </React.Fragment> */}
                                    </section>

                                </>
                            ))}
                    </div>
                )}
            </div>
        </GlobalLayout>
    );
};

export default MeetHistory;
