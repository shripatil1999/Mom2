import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GlobalLayout from "../../utils/hoc/globalLayout";

import { db } from "../../../firebase.js";
import { query, collection, getDocs, onSnapshot } from "firebase/firestore";
import { format } from "date-fns";

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
        setSelectedDate(date);
    };

    return (
        <GlobalLayout>
            <div className="Meetings">


                <button
                    className="bg-blue-500 h-fit px-2 py-1 text-white rounded"
                    onClick={handleTodayClick}
                >
                    Today
                </button>

                <DatePicker
                    className="border-1 border-black w-2/3 h-fit"
                    showIcon
                    selected={selectedDate}
                    onChange={(date) => handleTabClick(date)}
                    dateFormat="dd-MM-yyyy"
                />
                {docIDs && (
                    docIDs.map((id, index) => (
                        <li key={index}>{id}</li>
                    ))
                )}
                
            </div>
        </GlobalLayout>
    );
};

export default MeetHistory;
