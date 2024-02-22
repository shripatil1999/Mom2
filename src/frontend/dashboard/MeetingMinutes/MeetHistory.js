import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GlobalLayout from "../../utils/hoc/globalLayout";
import tasksData from "./tasksData.json";
import { db } from "../../../firebase.js";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import { format } from "date-fns";

const MeetHistory = () => {

  const [meetings, setMeetings] = useState("")
  const meetDate = format(new Date(), "dd-MM-yyyy");
  // console.log(meetDate)
  const fetchMeetings = async () => {
    try {
      const meetings = await onSnapshot(doc(db, "Meetings", meetDate), (doc) => {
        console.log("Current data: ", doc.data());
        setMeetings(meetings);
      });

    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };


  useEffect(() => {
    const fetchUsers2 = async () => {
      try {
        const usersRef = collection(db, "Meetings");
        const snapshot = await getDocs(usersRef);
        const meetings = snapshot.docs.map((doc) => (doc.data()
        ));
        setMeetings(meetings);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers2();
  }, []);



  console.log("nope" + meetings)

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const handleTabClick = (date) => {
    setSelectedDate(date);
    updateSelectedMeeting(date);
  };

  const handleTodayClick = () => {
    setSelectedDate(new Date());
    updateSelectedMeeting(new Date());
  };

  const updateSelectedMeeting = (date) => {
    const dateObject = tasksData.dates.find((d) => {
      const formattedDate = new Date(d.date).toISOString().split("T")[0];
      return formattedDate === date.toISOString().split("T")[0];
    });

    if (dateObject && dateObject.meetings && dateObject.meetings.length > 0) {
      const firstMeeting = dateObject.meetings[0];
      setSelectedMeeting(firstMeeting);
    } else {
      setSelectedMeeting(null);
    }
  };

  useEffect(() => {
    // Load details of the first meeting when the component mounts
    updateSelectedMeeting(selectedDate);
  }, [selectedDate]); // Empty dependency array ensures it runs only once on mount



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
              className="bg-blue-500 h-fit px-2 py-1 text-white rounded"
              onClick={fetchMeetings}
            >
              Today
            </button>
          </div>

          {/* ************************ Sidebar *********************************** */}

          <div className="space-y-2 mt-4 overflow-y-auto max-h-[calc(100vh)]">
            {tasksData.dates.map((date) => (
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
            ))}
          </div>
        </div>

        {/* ************************ DISPLAY *********************************** */}
        {/* {meetings.meetDate.Meet.map((muid) => (
          <>
            {muid.name}
          </>
        ))} */}




        {selectedMeeting && (
          <div className="w-3/4 p-4 m-2 shadow-sm border bg-slate-50 border-blue-600">
            <div className="flex justify-between">
              <p><span className="font-semibold uppercase"> Date:</span> {selectedDate.toLocaleDateString()}</p>
              <p><span className="font-semibold uppercase">Duration of the Meeting:</span> 4 Hours 30 Mins.</p>
            </div>
            <div className="flex justify-between my-2">
              <p className=""><span className="font-semibold uppercase">Meet Code: </span>{selectedMeeting.meetID}</p>
              <p><span className="font-semibold uppercase">Meeting held at: </span> {selectedMeeting.location}</p>
            </div>
            <h2 className="text-2xl text-blue-950 font-bold my-4">
              {selectedMeeting && ` ${selectedMeeting.name}`}{" "}
            </h2>
            <div className="flex justify-between">
              <div className="chairing mb-2 w-1/3">
                <p><span className="font-semibold uppercase ">Chairing By:</span></p>
                <div className="flex ">
                  {selectedMeeting.chairing.map((chair, index) => (
                    <span className="border-1 bg-pink-100 border-pink-600 p-2 m-1 shadow-sm shadow-pink-700" key={index}>
                      {chair}
                    </span>
                  ))}
                </div>
              </div>
              <div className="attendees">
                <p className="font-semibold uppercase">Attendees:</p>
                <div className="flex flex-wrap">
                  {selectedMeeting.attendees.map((attend, index) => (
                    <span className="border-1 bg-blue-200 border-blue-900 p-2 m-1 shadow-sm shadow-blue-900" key={index}>
                      {attend}
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
                        <p className="ml-6">UID: {task.uid}</p>{" "}
                        <p className="ml-auto">AGENDA: {task.agenda}</p>
                        <div className="actionBy mb-1 ml-auto flex items-center">
                          <p>ACTION BY: </p>
                          {task.actionBy.map((action) => (
                            <span className="border-1 text-base font-normal bg-pink-100 border-pink-600 p-2 m-1 shadow-sm shadow-pink-700">
                              {action}
                            </span>
                          ))}
                        </div>
                      </summary>

                      <hr className="" />

                      <div className="p-3">
                        <div className="flex justify-between">
                          <p className="start"><span className="font-semibold uppercase">Start Date:  </span>{task.startDate}</p>
                          <p className="start"><span className="font-semibold uppercase">Target Date: </span>{task.targetDate}</p>
                        </div>
                        <div className="supporter my-2 ml-auto flex items-center">
                          <p><span className="font-semibold uppercase">Supporter: </span></p>
                          {task.supporter.map((supporter) => (
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
                        {task.subtasks.map((subtask, index) => (
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



// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import GlobalLayout from "../../utils/hoc/globalLayout";
// import tasksData from "./tasksData.json";

// const MeetHistory = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedMeeting, setSelectedMeeting] = useState(null);

//   const handleTabClick = (date) => {
//     setSelectedDate(date);
//     updateSelectedMeeting(date);
//   };

//   const handleTodayClick = () => {
//     setSelectedDate(new Date());
//     updateSelectedMeeting(new Date());
//   };

//   const updateSelectedMeeting = (date) => {
//     const dateObject = tasksData.dates.find((d) => {
//       const formattedDate = new Date(d.date).toISOString().split("T")[0];
//       return formattedDate === date.toISOString().split("T")[0];
//     });

//     if (dateObject && dateObject.meetings && dateObject.meetings.length > 0) {
//       const firstMeeting = dateObject.meetings[0];
//       setSelectedMeeting(firstMeeting);
//     } else {
//       setSelectedMeeting(null);
//     }
//   };

//   useEffect(() => {
//     // Load details of the first meeting when the component mounts
//     updateSelectedMeeting(selectedDate);
//   }, [selectedDate]); // Empty dependency array ensures it runs only once on mount

//   return (
//     <GlobalLayout>
//       <div className="flex">
//         <div>
//           {/* ************************ calender *********************************** */}

//           <div className="flex">
//             <DatePicker
//               className="border-1 border-black w-2/3 h-fit"
//               showIcon
//               selected={selectedDate}
//               onChange={(date) => handleTabClick(date)}
//               showYearDropdown
//               dateFormat="dd-MM-yyyy"
//             />
//             <button
//               className="bg-blue-500 h-fit px-2 py-1 text-white rounded"
//               onClick={handleTodayClick}
//             >
//               Today
//             </button>
//           </div>

//           {/* ************************ Sidebar *********************************** */}

//           <div className="space-y-2 mt-4 overflow-y-auto max-h-[calc(100vh)]">
//             {tasksData.dates.map((date) => (
//               <div className="bg-slate-50 mb-3 p-1" key={date.date}>
//                 <button
//                   className={`w-full text-left px-4 py-2 ${selectedDate.toISOString().split("T")[0] === date.date
//                     ? "bg-gray-100"
//                     : ""
//                     }`}
//                   onClick={() => handleTabClick(new Date(date.date))}
//                 >
//                   {date.date}
//                 </button>

//                 {/* Meeting card */}
//                 <div className="flex flex-col mt-3">
//                   {date.meetings.map((meeting, index) => (
//                     <div
//                       key={index}
//                       className={`text-lg font-semibold p-3 text-center cursor-pointer border-1 my-2 ${selectedMeeting === meeting
//                         ? "bg-[#f1f5f9] shadow-sm border-blue-600"
//                         : ""
//                         }`}
//                       onClick={() => setSelectedMeeting(meeting)}
//                     >
//                       <p className="text-left text-gray-800">{meeting.name}</p>
//                       <p className="text-xs text-right mt-2 text-gray-600">
//                         4.00 PM to 6.00 PM
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ************************ DISPLAY *********************************** */}
//         {selectedMeeting && (
//           <div className="w-3/4 p-4 m-2 shadow-sm border bg-slate-50 border-blue-600">
//             <div className="flex justify-between">
//               <p><span className="font-semibold uppercase"> Date:</span> {selectedDate.toLocaleDateString()}</p>
//               <p><span className="font-semibold uppercase">Duration of the Meeting:</span> 4 Hours 30 Mins.</p>
//             </div>
//             <div className="flex justify-between my-2">
//               <p className=""><span className="font-semibold uppercase">Meet Code: </span>{selectedMeeting.meetID}</p>
//               <p><span className="font-semibold uppercase">Meeting held at: </span> {selectedMeeting.location}</p>
//             </div>
//             <h2 className="text-2xl text-blue-950 font-bold my-4">
//               {selectedMeeting && ` ${selectedMeeting.name}`}{" "}
//             </h2>
//             <div className="flex justify-between">
//               <div className="chairing mb-2 w-1/3">
//                 <p><span className="font-semibold uppercase ">Chairing By:</span></p>
//                 <div className="flex ">
//                   {selectedMeeting.chairing.map((chair, index) => (
//                     <span className="border-1 bg-pink-100 border-pink-600 p-2 m-1 shadow-sm shadow-pink-700" key={index}>
//                       {chair}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="attendees">
//                 <p className="font-semibold uppercase">Attendees:</p>
//                 <div className="flex flex-wrap">
//                   {selectedMeeting.attendees.map((attend, index) => (
//                     <span className="border-1 bg-blue-200 border-blue-900 p-2 m-1 shadow-sm shadow-blue-900" key={index}>
//                       {attend}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* **************** TASKS ****************** */}
//             {selectedMeeting &&
//               selectedMeeting.tasks.map((task) => (
//                 <>

//                   <section className="w-full mt-4">
//                     <details className="w-full bg-white border-1 border-opacity-5 rounded-xl shadow-md group mx-auto overflow-hidden max-h-full open:!max-h-[400px] transition-[max-height] duration-500">
//                       <summary className="flex items-center bg-gray-50 text-lg px-2 py-2 outline-none cursor-pointer focus:text-indigo-800 font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:left-3 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
//                         <p className="ml-6">UID: {task.uid}</p>{" "}
//                         <p className="ml-auto">AGENDA: {task.agenda}</p>
//                         <div className="actionBy mb-1 ml-auto flex items-center">
//                           <p>ACTION BY: </p>
//                           {task.actionBy.map((action) => (
//                             <span className="border-1 text-base font-normal bg-pink-100 border-pink-600 p-2 m-1 shadow-sm shadow-pink-700">
//                               {action}
//                             </span>
//                           ))}
//                         </div>
//                       </summary>

//                       <hr className="" />

//                       <div className="p-3">
//                         <div className="flex justify-between">
//                           <p className="start"><span className="font-semibold uppercase">Start Date:  </span>{task.startDate}</p>
//                           <p className="start"><span className="font-semibold uppercase">Target Date: </span>{task.targetDate}</p>
//                         </div>
//                         <div className="supporter my-2 ml-auto flex items-center">
//                           <p><span className="font-semibold uppercase">Supporter: </span></p>
//                           {task.supporter.map((supporter) => (
//                             <span className="border-1 bg-blue-200 border-blue-900 p-2 m-1 shadow-sm shadow-blue-900">
//                               {supporter}
//                             </span>
//                           ))}
//                         </div>
//                         <div className="Description my-2">
//                           <p className="font-semibold uppercase">Description:</p>
//                           <p>{task.description}</p>
//                         </div>
//                         <p className="font-semibold mt-4 mb-1 uppercase">Subtask:</p>
//                         {task.subtasks.map((subtask, index) => (
//                           <ol>
//                             <li key={index}>{subtask}</li>
//                           </ol>
//                         ))}
//                       </div>
//                     </details>
//                     {/* <React.Fragment key={index}>
//                     <li className="mb-2"></li>
//                     <li className="mb-2">{task.description}</li>
//                   </React.Fragment> */}
//                   </section>

//                 </>
//               ))}
//           </div>
//         )}
//       </div>
//     </GlobalLayout>
//   );
// };

// export default MeetHistory;
