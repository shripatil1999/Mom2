// };
import React from "react";
import GlobalLayout from "../../utils/hoc/globalLayout";
import Dropdown from "../../utils/elements/dropdown";
import { useEffect, useState, Fragment } from "react";
import SearchFilter from "../../utils/elements/SearchFilter";
import "./NewMeetMins.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { format } from 'date-fns';
import AutoInput from "../../utils/elements/AutoInput";
import { db } from "../../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
// import { getFirestore, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

const Department = [
  { name: 'Software Development' },
  { name: 'Hardware Development' },
  { name: 'Information Technology' },
  { name: 'Administration' },
  { name: 'Marketing & Public Relation' },
  { name: 'Human resource' },
  { name: 'Corporate Communication' },
  { name: 'Procurement' },
  { name: 'Project Execution' },
  { name: 'Accounts & CS' },
]



const NewMeetMins = () => {

  const [selected, setSelected] = useState(Department[0])
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  // state to store time
  const [time, setTime] = useState(0);
  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);
  // Hours calculation
  const hours = Math.floor(time / 360000);
  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);
  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [show, setShow] = useState(false)
  const [chaired, setChaired] = useState("")

  var fromChild = (locationFromChild) => {
    return locationFromChild; // or set the data to a state
  }

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(format(new Date(), 'dd/MM/yyyy, hh:mm a'));
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount


  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);



  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    alert("This Meeting was " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds long");
    setTime(0);
  };


  // New Line inputs for First Table

  const [rows, setRows] = useState([
    { attendeeName: "", email: "", Designation: "" },
  ]);

  const [turn, setTurn] = useState(false)
  useEffect(() => {
    // Fetch the list of users from Firestore
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, "Users");
        const snapshot = await getDocs(usersRef);
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserList(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);





  const handleInputChange = (index, field, value) => {

    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
    setShow(true);
  };


  const handleUserSelect = (index, selectedUserId) => {

    const selectedUser = userList.find((user) => user.id === selectedUserId);
    setRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[index].attendeeName = selectedUser.name;
      newRows[index].email = selectedUser.email;
      newRows[index].designation = selectedUser.designation;
      return newRows;
    });
    setSelectedUser(selectedUser);
    setShow(false);
  };


  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      if (index === rows.length - 1) {
        setRows((prevRows) => [
          ...prevRows,
          { attendeeName: "", email: "", designation: "" },
        ]);
        setShow(false);
      }
    }
  };
  const handleAddRow = () => {
    setRows((prevRows) => {
      const lastRow = prevRows[prevRows.length - 1];
  
      // Check if the last row is already an empty row
      // console.log("row : "+firstRow)
      if (
        lastRow &&
        lastRow.attendeeName === "" &&
        prevRows.length!==1
        // lastRow.email === "" &&
        // lastRow.designation === ""
      ) {
        // Remove the last row
        setTurn(true)
        return prevRows.slice(0, -1);

      } else {
        // Add a new empty row
        return [
          ...prevRows,
          { attendeeName: "", email: "", designation: "" },
        ];
      }
    });
    setShow(false);
  };

  //Chairing the meeting
  const handleChairmenSelect = (selectedUserId) => {
    const selectedUser = userList.find((user) => user.id === selectedUserId);
    setChaired(selectedUser.name || ""); // Set the name of the selected user
    setSelectedUser(selectedUser);
  };


  // New Line inputs for second Table
  const defaultDate = new Date(); // Set your default date here
  const [table2Rows, setTable2Rows] = useState([
    {
      agenda: "",
      discussionPoints: "",
      actionBy: "",
      supporter: "",
      startDate: defaultDate,
      targetDate: defaultDate,
      subTasks: [""],
    },
  ]);

  const handleInputChangeTable2 = (index, field, value) => {
    const newRows = [...table2Rows];
    newRows[index][field] = value;
    setTable2Rows(newRows);
  };

  const handleKeyDownTable2 = (event, index) => {
    if (event.key === "Enter") {
      if (index === table2Rows.length - 1) {
        setTable2Rows((prevRows) => [
          ...prevRows,
          {
            agenda: "",
            discussionPoints: "",
            actionBy: "",
            supporter: "",
            startDate: defaultDate,
            targetDate: defaultDate,
            subTasks: [""],
          },
        ]);
      }
    }
  };

  const handleAddRow2 = () => {
    setTable2Rows((prevRows) => [
      ...prevRows,
      {
        agenda: "",
        discussionPoints: "",
        actionBy: "",
        supporter: "",
        startDate: defaultDate,
        targetDate: defaultDate,
        subTasks: [""],
      },
    ]);
  };

  // Subtask New Line Creation
  const [subtasks, setSubtasks] = useState([]);

  const addSubtask = (index) => {
    const updatedSubtasks = [...table2Rows];

    const ROW_DATA = [...table2Rows][index];
    const TEMP_DATA = { ...ROW_DATA, subTasks: [...ROW_DATA?.subTasks, ""] };
    updatedSubtasks[index] = TEMP_DATA;
    setTable2Rows(updatedSubtasks);

    console.log(TEMP_DATA);
  };

  const handleSubtaskChange = (index, subIndex, value) => {
    const updatedSubtasks = [...table2Rows];
    var PARTICULAR_OBJECT = updatedSubtasks[index];
    PARTICULAR_OBJECT.subTasks[subIndex] = value;
    updatedSubtasks[index] = PARTICULAR_OBJECT;
    setSubtasks(updatedSubtasks);
    console.log(subtasks);
  };

  return (
    <GlobalLayout>
      <div className="p-4">
        <div className="mt-3 TopFeatures flex flex-row flex-wrap justify-between">
          <p className="font-bold text-lg">Meeting Minutes</p>
          <Dropdown
            project1="Project Number 1"
            project2="Project Number 2"
            project3="Project Number 3"
          />

          <div className="stopwatch-container flex items-center font-semibold">
            <p className="stopwatch-time">
              Active session Time :
              {hours}:{minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </p>
            <div className="stopwatch-buttons mx-2">
              <button className={`stopwatch-button px-2 py-1 rounded ${isRunning ? 'bg-red-700' : 'bg-green-700'
                } text-white`} onClick={startAndStop}>
                {isRunning ? "Stop" : "Start"}
              </button>
            </div>
          </div>
          <SearchFilter />

        </div>
        <main className="MeetTable mt-3 border-gray-900 mr-6">
          <div className="TableTop flex flex-wrap justify-between  items-center  font-semibold bg-slate-200 border  p-2 mt-4">
            <p>Minutes Code: Auto Code</p>
            <div className="meetLocation flex items-center gap-3">
              <p>Review Meeting Held at:</p>
              <AutoInput setter={fromChild} />
            </div>
            <p className="font-bold mr-10">Date: {currentDateTime.toLocaleString()}</p>
          </div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr className="FirstTH">
                <th width={"10%"}>Sl. No.</th>
                <th>Attendee Name</th>
                <th>Email-ID</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      className="border-b-2 bg-gray-100 border-gray-300 focus:outline-none"
                      type="text"
                      value={row.attendeeName || ""}  /* Ensure a default empty string value */
                      onChange={(e) => handleInputChange(index, "attendeeName", e.target.value)}
                    />
                    {show ? <ul className="absolute z-[99] bg-white p-1 shadow-md  hidden last:block">
                      {userList
                        .filter((user) => user.name.toLowerCase().includes(row.attendeeName.toLowerCase()))
                        .map((user) => (
                          <li className="cursor-pointer p-2 hover:bg-gray-100 " key={user.id} onClick={() => {handleUserSelect(index, user.id); setShow(false)}}>
                            {user.name.length === null ? "Not Found" : user.name}
                          </li>
                        ))}
                    </ul> : ""}
                  </td>
                  <td>
                    <input
                      className="border-b-2 bg-gray-100 border-gray-300 focus:outline-none"
                      type="text"
                      value={row.email}
                      readOnly
                      onChange={(e) => handleInputChange(index, "email", e.target.value)}
                    />
                  </td>
                  <td className="relative">
                    <input
                      className="border-b-2 bg-gray-100 border-gray-300 focus:outline-none"
                      type="text"
                      value={row.designation}
                      readOnly
                      onChange={(e) => handleInputChange(index, "designation", e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                    <button
                      className="absolute bottom-3 -right-3 px-1 bg-slate-200 border border-gray-900 rounded-full flex items-center"
                      onClick={handleAddRow}
                    >
                      {turn?<i className="bi bi-plus-lg"></i>:"X"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Second Table */}
          <div className="p-2 bg-slate-200 flex relative">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative h-fit w-1/5">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="z-[97] absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {Department.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-slate-200 text-slate-900' : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            <input
              type="text"
              placeholder="Chairing the Meeting"
              className="w-full md:w-80 px-2 mx-4 rounded-lg border border-gray-100 shadow-md focus:outline-none focus:border-black"
              value={chaired}
              onChange={(e) => {setChaired(e.target.value);setShow(true);}}
            />
            {show ? <ul className="absolute top-[100%] right-[50%] z-[99] bg-white p-1 shadow-md  hidden last:block">
              {userList
                .filter((user) => user.name.toLowerCase().includes(chaired.toLowerCase()))
                .map((user) => (
                  <li className="cursor-pointer p-2 hover:bg-gray-100 " key={user.id} onClick={() =>{ handleChairmenSelect(user.id); setShow(false)}}>
                    {user.name.length === null ? "Not Found" : user.name}
                  </li>
                ))}
            </ul> : ""}


          </div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr className="border border-gray-900 bg-slate-200 ">
                <th style={{ width: "10%", padding: "1%" }}>U. ID</th>
                <th style={{ width: "20%", padding: "1%" }}>AGENDA</th>
                <th style={{ width: "27%", padding: "1%" }}>
                  DISCUSSION POINTS
                </th>
                <th style={{ width: "15%", padding: "1%" }}>ACTION BY</th>
                <th style={{ width: "15%", padding: "1%" }}>SUPPORTER</th>
                <th style={{ width: "5%", padding: "1%" }}>START DATE</th>
                <th style={{ width: "5%", padding: "1%" }}>TARGET DATE</th>
              </tr>
            </thead>
            <tbody>
              {table2Rows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <p className="text-sm">PAPL512230{index + 1}</p>
                  </td>
                  <td>
                    <textarea
                      rows="4"
                      className="border-b-2 bg-gray-100 border-gray-300 p-2 focus:outline-none"
                      type="text"
                      value={row.agenda}
                      placeholder="Task Name"
                      onChange={(e) =>
                        handleInputChangeTable2(index, "agenda", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <p>Description:</p>
                    <textarea
                      className=" w-full border-b-2 bg-gray-100 border-gray-300 p-2 focus:outline-none"
                      type="text"
                      value={row.discussionPoints}
                      onChange={(e) =>
                        handleInputChangeTable2(
                          index,
                          "discussionPoints",
                          e.target.value
                        )
                      }
                    />
                    <div className="border-b my-4 border-blue-800 relative ">
                      <button
                        onClick={() => addSubtask(index)}
                        className="absolute top-0 right-0 border rounded -mt-4 border-slate-900 bg-gray-100 px-3 py-1 text-sm font-bold"
                      >
                        Subtasks +
                      </button>
                    </div>
                    <ol>
                      {/* <li key={index}>
                          <input
                            className="border-b border-gray-900 p-2 focus:outline-none"
                            type="text"
                            placeholder="Enter Subtask here"
                          />
                        </li> */}
                      {row?.subTasks.map((subtask, subIndex) => (
                        <li key={subIndex}>
                          {subIndex + 1}
                          <input
                            className="border-b-2 bg-gray-100 border-gray-300 p-2 mb-3 focus:outline-none"
                            type="text"
                            placeholder="Enter Subtask here"
                            value={subtask}
                            onChange={(e) =>
                              handleSubtaskChange(
                                index,
                                subIndex,
                                e.target.value
                              )
                            }
                          />
                        </li>
                      ))}
                    </ol>
                  </td>
                  <td>
                    <input
                      className="border-b-2 bg-gray-100 border-gray-300 p-2 focus:outline-none"
                      type="text"
                      value={row.actionBy|| ""}
                      onChange={(e) =>
                        handleInputChangeTable2(
                          index,
                          "actionBy",
                          e.target.value
                        )
                      }
                    />
                    {show ?<><ul className="absolute z-[99] bg-white p-1 shadow-md  hidden last:block">
                      {userList
                        .filter((user) => user.name.toLowerCase().includes(row.actionBy.toLowerCase()))
                        .map((user) => (
                          <li className="cursor-pointer p-2 hover:bg-gray-100 " key={user.id} onClick={() => {handleUserSelect(index, user.id); setShow(false)}}>
                            {user.name.length === null ? "Not Found" : user.name}
                          </li>
                        ))}
                    </ul></>:""}
                  </td>
                  <td>
                    <input
                      className="border-b-2 bg-gray-100 border-gray-300 p-2 focus:outline-none"
                      type="text"
                      value={row.supporter}
                      onChange={(e) =>
                        handleInputChangeTable2(
                          index,
                          "supporter",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td className="pr-6 relative -z-1">
                    <DatePicker
                      className="datepicker -z-1"
                      showIcon
                      selected={row.startDate}
                      startDate={row.startDate}
                      endDate={row.targetDate}
                      onChange={(date) =>
                        handleInputChangeTable2(index, "startDate", date)
                      }
                    />

                  </td>
                  <td className="pr-6 relative -z-1">
                    <DatePicker
                      className="datepicker -z-1"
                      showIcon
                      selected={row.targetDate}
                      selectsEnd
                      startDate={row.startDate}
                      endDate={row.targetDate}
                      minDate={row.startDate}
                      onSelect={(date) =>
                        handleInputChangeTable2(index, "targetDate", date)
                      }
                      onKeyDown={(e) => handleKeyDownTable2(e, index)}
                      onChange={(date) =>
                        handleInputChangeTable2(index, "targetDate", date)
                      }
                    />
                    {/* <div className="flex w-full"> */}
                    <button
                      className="absolute -z-3 bottom-3 -right-3 px-1 bg-slate-200 border border-gray-900 rounded-full flex items-center"

                      onClick={handleAddRow2}
                    >
                      <i className="bi bi-plus-lg"></i>

                    </button>
                    {/* </div> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="save-meet flex justify-end">
            <button onClick={reset} className="mt-3 rounded bg-[#252c48] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#252c48ce]">Save Meeting</button>

          </div>
        </main>
      </div>
    </GlobalLayout>
  );
};

export default NewMeetMins;
