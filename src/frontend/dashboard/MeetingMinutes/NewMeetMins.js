import React from 'react'
import GlobalLayout from '../../utils/hoc/globalLayout'
import Dropdown from '../../utils/elements/dropdown'
import { useEffect, useState } from 'react';
import moment from 'moment';
import SearchFilter from '../../utils/elements/SearchFilter';
import './NewMeetMins.css'

const NewMeetMins = () => {
    const [sessionStartTime] = useState(moment());
    const [activeSessionTime, setActiveSessionTime] = useState(moment.duration(0));

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = moment();
            const duration = moment.duration(currentTime.diff(sessionStartTime));
            setActiveSessionTime(duration);
        }, 1000);

        return () => clearInterval(interval);
    }, [sessionStartTime]);

    const formatTime = (value) => {
        return value < 10 ? `0${value}` : value;
    };
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // Update the current date and time every second
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount


    // Format the date and time
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDateTime = new Intl.DateTimeFormat('en-GB', options).format(currentDateTime);


    // New Line inputs for First Table

    const [rows, setRows] = useState([
        { attendeeName: '', email: '', minutes: '' },
    ]);

    const handleInputChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Enter') {
            // Check if the Enter key is pressed in the last "Minutes" input
            if (index === rows.length - 1) {
                // Add a new empty row
                setRows([...rows, { attendeeName: '', email: '', minutes: '' }]);
            }
        }
    };


    // New Line inputs for First Table
    const [table2Rows, setTable2Rows] = useState([
        { uid: '', agenda: '', discussionPoints: '', actionBy: '', supporter: '', targetDate: '' },
    ]);

    const handleInputChangeTable2 = (index, field, value) => {
        const newRows = [...table2Rows];
        newRows[index][field] = value;
        setTable2Rows(newRows);
    };

    const handleKeyDownTable2 = (event, index) => {
        if (event.key === 'Enter') {
            // Check if the Enter key is pressed in the last "TARGET DATE" input
            if (index === table2Rows.length - 1) {
                // Add a new empty row
                setTable2Rows([
                    ...table2Rows,
                    { uid: '', agenda: '', discussionPoints: '', actionBy: '', supporter: '', targetDate: '' },
                ]);
            }
        }
    };

    // Render the formatted time
    return (
        <GlobalLayout>
            <div className="p-4">
                <div className="mt-3 TopFeatures flex flex-row flex-wrap justify-between">
                    <p className='font-bold text-lg'>Meeting Minutes</p>
                    <Dropdown project1="Project Number 1" project2="Project Number 2" project3="Project Number 3" />
                    <p className='font-semibold'>Active Session Time: {formatTime(activeSessionTime.hours())}:
                        {formatTime(activeSessionTime.minutes())}:
                        {formatTime(activeSessionTime.seconds())}</p>
                    <SearchFilter />
                </div>
                <main className='MeetTable mt-3 border-gray-900 mr-6'>
                    <div className="TableTop flex flex-wrap justify-between font-semibold bg-slate-200 border  p-2 mt-4">
                        <p>Minutes Code: Auto Code</p>
                        <div className="meetLocation flex">
                            <p>Review Meeting Held at:</p>
                            <input className='border-b bg-slate-100 border-b-slate-600 focus:outline-none' type="text" name="MeetLocation" id="MeetLocation" />
                        </div>
                        <p className='font-bold mr-10'>Date:{formattedDateTime}</p>
                    </div>
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr className='FirstTH'>
                                <th width={"10%"}>Sl. No.</th>
                                <th>Attendee Name</th>
                                <th>Email-ID</th>
                                <th>Minutes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <input
                                            className='border-b border-b-slate-950 focus:outline-none'
                                            type='text'
                                            value={row.attendeeName}
                                            onChange={(e) => handleInputChange(index, 'attendeeName', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='border-b border-b-slate-950 focus:outline-none'
                                            type='text'
                                            value={row.email}
                                            onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='border-b border-b-slate-950 focus:outline-none'
                                            type='text'
                                            value={row.minutes}
                                            onChange={(e) => handleInputChange(index, 'minutes', e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    {/* Second Table */}

                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr className='border border-gray-900 bg-slate-200 '>
                                <th style={{width:'8%', padding:'1%'}}>U. ID</th>
                                <th>AGENDA</th>
                                <th>DISCUSSION POINTS</th>
                                <th>ACTION BY</th>
                                <th>SUPPORTER</th>
                                <th>TARGET DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table2Rows.map((row, index) => (
                                <tr key={index}>
                                    <td><p className='text-sm'>PAPL512230{index + 1}</p></td>
                                    <td>
                                        <input
                                            className='border-b border-gray-900 p-2 focus:outline-none'
                                            type='text'
                                            value={row.agenda}
                                            placeholder='Task Name'
                                            onChange={(e) => handleInputChangeTable2(index, 'agenda', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='border-b border-gray-900 p-2 focus:outline-none'
                                            type='text'
                                            value={row.discussionPoints}
                                            onChange={(e) => handleInputChangeTable2(index, 'discussionPoints', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='border-b border-gray-900 p-2 focus:outline-none'
                                            type='text'
                                            value={row.actionBy}
                                            onChange={(e) => handleInputChangeTable2(index, 'actionBy', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='border-b border-gray-900 p-2 focus:outline-none'
                                            type='text'
                                            value={row.supporter}
                                            onChange={(e) => handleInputChangeTable2(index, 'supporter', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className='border-b border-gray-900 p-2 focus:outline-none'
                                            type='text'
                                            value={row.targetDate}
                                            onChange={(e) => handleInputChangeTable2(index, 'targetDate', e.target.value)}
                                            onKeyDown={(e) => handleKeyDownTable2(e, index)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>

        </GlobalLayout>
    )
}

export default NewMeetMins
