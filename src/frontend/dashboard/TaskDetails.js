import React, { useState, Fragment, useEffect } from "react";
import GlobalLayout from "../utils/hoc/globalLayout";
import { Menu, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SearchFilter from "../utils/elements/SearchFilter";
import DatePicker from "react-datepicker";
import { Tab } from "@headlessui/react";
import "react-datepicker/dist/react-datepicker.css";
import Attachment from "../utils/elements/Attachment";
import SubtaskForm from "../utils/elements/SubtaskForm";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import { storage, auth } from "../../firebase.js"; // Import your Firebase storage instance
import { onSnapshot } from "firebase/firestore";
import { db } from "../../firebase.js";
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const TaskDetails = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const currentUser = auth.currentUser;
  // Function to add a new comment to the list
  const addComment = () => {
    // Check if the comment is not empty
    if (comment.trim() !== "") {
      // Update the comments state with the new comment
      setComments((prevComments) => [
        ...prevComments,
        { text: comment, timestamp: new Date().toLocaleString() },
      ]);

      // Clear the current comment input
      setComment("");
    }
  };
  const taskData = [
    {
      taskName: "Task Name 1",
      subtasks: ["Subtask 1", "Subtask 2", "Subtask 3"],
    },
    {
      taskName: "Task Name 2",
      subtasks: ["Subtask 1", "Subtask 2", "Subtask 3"],
    },
    {
      taskName: "Task Name 3",
      subtasks: ["Subtask 1", "Subtask 2", "Subtask 3"],
    },
  ];

  // Function to clear the current comment input
  const clearComment = () => {
    setComment("");
  };
  // console.log(currentUser.displayName);
  // console.log(currentUser);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    // Handle the uploaded files (e.g., display them, send them to the server, etc.)
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const files = event.dataTransfer.files;
    // Handle the dropped files (e.g., display them, send them to the server, etc.)
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleUpload = async () => {
    setUploading(true);

    setUploadedFiles([]);
  };


  const fetchTasks = async () => {
    try {
      const user = currentUser.displayName; // Assuming displayName is the user identifier

      // Reference the "Tasks" collection and a specific document ID
      const taskDocumentRef = doc(db, "Tasks", "020324051");

      // Fetch the specific task document
      const taskDoc = await getDoc(taskDocumentRef);

      // Check if the document exists by verifying if data() returns a non-null value
      if (taskDoc && taskDoc.data() !== null) {
        const taskData = { id: taskDoc.id, ...taskDoc.data() };
        console.log(taskData); // Log or use the task data as needed
        return [taskData]; // Return as an array for consistency with the previous structure
      } else {
        console.log("Task document not found");
        return [];
      }
    } catch (error) {
      console.error("Error fetching task:", error);
      throw error; // Rethrow the error to handle it in the calling code if needed
    }
  };

  // Call the fetchTasks function
  fetchTasks();





  useEffect(() => {
    const fetchData = async () => {
      try {


        const unsubscribe = onSnapshot(doc(db, "Tasks"), (doc) => {

          setTasks(doc.data());

        });

        // const q = query(collection(db, "Tasks"));
        // const unsubscribe = onSnapshot(q, (querySnapshot) => {
        //   const fetchedMeetings = [];


        //   querySnapshot.forEach((doc) => {
        //     fetchedMeetings.push(doc.data());

        //   });
        // });

        return () => {
          // Cleanup the subscription when the component unmounts
          unsubscribe();
        };
      } catch (error) {
        console.error("Error fetching Tasks:", error);
      }
    };
    fetchData();
  }, []);
  console.log("tasks", tasks)
  return (
    <GlobalLayout>
      <div className="flex border-transparent rounded shadow-lg p-3">
        <div className="sidebar border w-1/5">
          <div className="side-header border-b p-2.5 w-full">
            <Menu as="div" className="relative inline-block text-left w-full">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Status
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          All
                        </p>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Ongoing
                        </p>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Overdue
                        </p>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Completed
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <div className="side-list h-fit p-2 flex flex-col gap-4">
            {/* Your vertical tabs */}
            <Tab.Group
              defaultIndex={selectedTab}
              onChange={(index) => setSelectedTab(index)}
            >
              {taskData.map((task, index) => (
                <Tab className="" key={index}>
                  {({ selected }) => (
                    <div
                      className={
                        "" +
                        (selected
                          ? " bg-light-900 text-blue-900 border-2 border-blue-600 bg-sky-100 shadow "
                          : "text-[#252c48] border-2 border-gray-100  hover:bg-white/[2] hover:text-[#252c48]")
                      }
                    >
                      <p className="font-bold m-1">{task.taskName}</p>
                      <ul>
                        {task.subtasks.map((subtask, index) => (
                          <li className="m-1" key={index}>
                            {subtask}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.Group>
          </div>
        </div>
        <div className="main w-4/5 border-y border-r">
          {selectedTab >= 0 && (
            <>
              <div className="main-title flex justify-between border-b p-2 ">
                <p className="text-lg font-bold">
                  {taskData[selectedTab].taskName}
                </p>
                <SearchFilter />
              </div>
              {/* Render content based on selected tab */}

              <div className="main-body p-2 ">
                <div className="tasks">
                  {/* {taskData[selectedTab].subtasks.map((subtask, index) => (
                  <p key={index}>{subtask}</p>
                ))} */}

                  <div className="first-strip shadow-sm  flex items-center justify-between p-2 border px-4 ">
                    <div className="dropdown">
                      <select
                        id="status"
                        name="status"
                        className="w-fit h-10 border-transparency focus:outline-none bg-white focus:border-black text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                      >
                        <option value="All" defaultValue="0">
                          All
                        </option>
                        <option value="">Ongoing</option>
                        <option value="">Overdue</option>
                        <option value="">Completed</option>
                      </select>
                    </div>
                    <p>Subtask ({taskData[selectedTab].subtasks.length})</p>
                    <div className="supporter">
                      <p>
                        Supporter <i className="bi bi-person-circle"></i>
                      </p>
                    </div>
                  </div>

                  <div className="second-strip shadow-sm flex items-center p-2 border px-4 mt-3">
                    <p className="font-bold">Description:</p> &nbsp;&nbsp;
                    <p>Description We'll be shown here. </p>
                  </div>

                  <div className="third-strip shadow-sm flex flex-col gap-2.5 first-letter: p-2 border px-4 mt-3">
                    <p className="font-bold ">Task Information</p>
                    <p>User : &nbsp;&nbsp;&nbsp;{"Mr. XYZ"}</p>
                    <div className="flex gap-3">
                      <p>Priority : </p>
                      <select
                        id="priority"
                        name="priority"
                        className="w-fit focus:outline-none bg-white focus:border-black text-black rounded p-2 md:px-3 py-0 md:py-1 tracking-wider"
                      >
                        <option value="All" defaultValue="0">
                          Low
                        </option>
                        <option value="">Medium</option>
                        <option value="">High</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-3">
                      <p>Start Date : </p>
                      <DatePicker
                        showIcon
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        icon="bi bi-calendar-date-fill"
                      />

                      <p className="ml-auto">Due Date : </p>
                      <div className="mr-auto">
                        <DatePicker
                          showIcon
                          dateFormat="dd/MM/yyyy"
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                          icon="bi bi-calendar-date-fill"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <p>Reminder :</p>
                      <select
                        id="priority"
                        name="priority"
                        className="w-fit focus:outline-none bg-white focus:border-black text-black rounded p-2 md:px-3 py-0 md:py-1 tracking-wider"
                      >
                        <option value="All" defaultValue="0">
                          None
                        </option>
                        <option value="">Yes</option>
                        <option value="">Later</option>
                      </select>
                    </div>
                  </div>

                  <div className="fourth-strip mt-4 ">
                    <Tab.Group>
                      <Tab.List className="flex space-x-1  rounded-xl bg-light-900 p-1">
                        <Tab
                          as={Fragment}
                          className="w-1/6 py-2.5 text-sm font-medium leading-5 "
                        >
                          {({ selected }) => (
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
                              className={
                                selected
                                  ? "bg-light-900 text-blue-900 border-b-2 border-x-2 shadow-sm "
                                  : "text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]"
                              }
                            >
                              Comments
                            </button>
                          )}
                        </Tab>
                        <Tab
                          as={Fragment}
                          className="w-1/6 py-2.5 text-sm font-medium leading-5 "
                        >
                          {({ selected }) => (
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
                              className={
                                selected
                                  ? "bg-light-900 text-blue-900 border-b-2 border-x-2 shadow-sm "
                                  : "text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]"
                              }
                            >
                              Subtasks
                            </button>
                          )}
                        </Tab>
                        <Tab
                          as={Fragment}
                          className="w-1/6 py-2.5 text-sm font-medium leading-5 "
                        >
                          {({ selected }) => (
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
                              className={
                                selected
                                  ? "bg-light-900 text-blue-900 border-b-2 border-x-2 shadow-sm "
                                  : "text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]"
                              }
                            >
                              Documents
                            </button>
                          )}
                        </Tab>
                      </Tab.List>
                      <Tab.Panels className="border shadow m-1 ">
                        <Tab.Panel className="p-3 overflow-y-auto">
                          {/* Display existing chat messages */}
                          {comments.map((c, index) => (
                            <div key={index} className="flex items-center">
                              {/* Display user info */}
                              <div className="flex-none flex flex-col items-center space-y-1 mr-4">
                                <img
                                  className="rounded-full w-10 h-10"
                                  src="/images/icons/user.png"
                                  alt="user"
                                />
                                <a
                                  href=" "
                                  className="block text-xs hover:underline"
                                >
                                  Username
                                </a>
                              </div>
                              {/* Display chat message */}
                              <div className="flex-1 w-3/4 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
                                <p className="text-base">{c.text}</p>
                                <p className="text-sm text-end">
                                  {c.timestamp}
                                </p>
                              </div>
                            </div>
                          ))}

                          {/* Textarea for typing new comments */}
                          <div className="p-4 pb-0">
                            <div className="overflow-hidden">
                              <textarea
                                id="OrderNotes"
                                className="w-full resize-none border-x-0 border-t-0 border-gray-200 bg-gray-100 p-2 align-top sm:text-sm"
                                rows="6"
                                placeholder="Type Comments here..........👇🏻👇🏻"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                              ></textarea>

                              {/* Buttons for clearing and adding comments */}
                              <div className="flex items-center justify-end gap-2 py-3 border-t-2 border-gray-400">
                                <Attachment />
                                <button
                                  type="button"
                                  className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                                  onClick={clearComment}
                                >
                                  Clear Comment
                                </button>

                                <button
                                  type="button"
                                  className="rounded bg-[#252c48] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#252c48ce]"
                                  onClick={addComment}
                                >
                                  Add Comment
                                </button>
                              </div>
                            </div>
                          </div>
                        </Tab.Panel>
                        <Tab.Panel className="p-3">
                          <div className=" flex flex-col gap-2 p-2.5 m-3 border-b-2 bg-gray-100 border-gray-400">
                            <Popover className="relative">
                              <Popover.Button className="bg-white p-1.5 shadow-sm">
                                {"Subtask 1"}
                              </Popover.Button>
                              <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                              ></Transition>
                              <Popover.Panel className="absolute z-10 bg-white p-3 card shadow">
                                <div className="cardTitle flex flex-col gap-3">
                                  <div className="flex">
                                    <p className="font-semibold">
                                      Task name: &nbsp;
                                    </p>
                                    <p> {" Task Name"}</p>
                                  </div>
                                  <div className="flex">
                                    <p className="font-semibold">
                                      Target Date: &nbsp;
                                    </p>
                                    <p> {" Target Date"} </p>
                                  </div>
                                  <div className="">
                                    <p className="font-semibold ">
                                      Description:{" "}
                                    </p>
                                    <p>
                                      {
                                        "Small Description about the task will be appeared here..."
                                      }
                                    </p>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Popover>
                            <Popover className="relative">
                              <Popover.Button className="bg-white p-1.5 shadow-sm">
                                {"Subtask 2"}
                              </Popover.Button>
                              <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                              ></Transition>
                              <Popover.Panel className="absolute z-10 bg-white p-3 card shadow">
                                <div className="cardTitle flex flex-col gap-3">
                                  <div className="flex">
                                    <p className="font-semibold">
                                      Task name: &nbsp;
                                    </p>
                                    <p> {" Task Name"}</p>
                                  </div>
                                  <div className="flex">
                                    <p className="font-semibold">
                                      Target Date: &nbsp;
                                    </p>
                                    <p> {" Target Date"} </p>
                                  </div>
                                  <div className="">
                                    <p className="font-semibold ">
                                      Description:{" "}
                                    </p>
                                    <p>
                                      {
                                        "Small Description about the task will be appeared here..."
                                      }
                                    </p>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Popover>
                            <Popover className="relative">
                              <Popover.Button className="bg-white p-1.5 shadow-sm">
                                {"Subtask 3  "}
                              </Popover.Button>
                              <Transition
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                              ></Transition>
                              <Popover.Panel className="absolute z-10 bg-white p-3 card shadow">
                                <div className="cardTitle flex flex-col gap-3">
                                  <div className="flex">
                                    <p className="font-semibold">
                                      Task name: &nbsp;
                                    </p>
                                    <p> {" Task Name"}</p>
                                  </div>
                                  <div className="flex">
                                    <p className="font-semibold">
                                      Target Date: &nbsp;
                                    </p>
                                    <p> {" Target Date"} </p>
                                  </div>
                                  <div className="">
                                    <p className="font-semibold ">
                                      Description:{" "}
                                    </p>
                                    <p>
                                      {
                                        "Small Description about the task will be appeared here..."
                                      }
                                    </p>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Popover>
                          </div>
                          <div className="addTask flex w-full h-full my-10 justify-center items-center">
                            <button
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              className="border-1 px-3 py-2 rounded bg-[#252c48] text-white"
                            >
                              Add Subtask
                            </button>
                            {/* <!-- Modal --> */}
                            <div
                              className="modal fade"
                              id="staticBackdrop"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabindex="-1"
                              aria-labelledby="staticBackdropLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h1
                                      className="modal-title font-bold text-lg fs-5"
                                      id="staticBackdropLabel"
                                    >
                                      Add Subtask
                                    </h1>
                                    <button
                                      type="button"
                                      className="btn-close text-black "
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <i class="bi bi-x-circle"></i>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <SubtaskForm />
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-danger bg-red-500"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn bg-[#252c48] text-white hover:bg-[#3b4670]"
                                    >
                                      Add Subtask
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Panel>
                        <Tab.Panel className="flex flex-col justify-center items-center">
                          <div className="DisplayFiles my-2">
                            <p>Uploaded Files will be shown here.</p>
                            <div className="FilesView w-full flex justify-start gap-3 mt-2">
                              {/* Display the uploaded files */}
                              {uploadedFiles.map((file, index) => (
                                <img
                                  key={index}
                                  src={`/images/icons/${file.type === "application/pdf"
                                    ? "pdf"
                                    : "word"
                                    }.png`}
                                  alt=""
                                />
                              ))}
                            </div>
                          </div>
                          <div
                            style={{ border: "dashed 1px gray" }}
                            className="m-4 w-1/2 flex justify-center rounded-lg border-gray-900/25 px-6 py-10"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                          >
                            <div className="text-center ">
                              <FolderArrowDownIcon
                                className="mx-auto h-12 w-12 text-gray-300"
                                aria-hidden="true"
                              />
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={handleFileUpload}
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs leading-5 text-gray-600">
                                Image, File, PDF up to 10MB
                              </p>
                            </div>
                          </div>
                          <div className="text-center my-2">
                            <button
                              onClick={handleUpload}
                              disabled={uploading || uploadedFiles.length === 0}
                              className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md focus:outline-none"
                            >
                              {uploading ? "Uploading..." : "Upload"}
                            </button>
                          </div>
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </GlobalLayout>
  );
};

export default TaskDetails;

// import React from "react";
// import GlobalLayout from "../utils/hoc/globalLayout";
// import { Fragment, useState } from "react";
// import { Menu, Transition, Popover } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import SearchFilter from "../utils/elements/SearchFilter";
// import DatePicker from "react-datepicker";
// import { Tab } from "@headlessui/react";
// import "react-datepicker/dist/react-datepicker.css";
// import Attachment from "../utils/elements/Attachment";
// import SubtaskForm from "../utils/elements/SubtaskForm";
// import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

// // const TaskInfo={
// //   task1:{

// //   }
// // }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
// const TaskDetails = () => {
//   const [startDate, setStartDate] = useState(new Date("2024/02/01"));
//   const [endDate, setEndDate] = useState(new Date("2024/02/02"));
//   // State to manage the list of comments and the current comment input
//   const [comments, setComments] = useState([]);
//   const [comment, setComment] = useState('');

//   // Function to add a new comment to the list
//   const addComment = () => {
//     // Check if the comment is not empty
//     if (comment.trim() !== '') {
//       // Update the comments state with the new comment
//       setComments((prevComments) => [
//         ...prevComments,
//         { text: comment, timestamp: new Date().toLocaleString() },
//       ]);

//       // Clear the current comment input
//       setComment('');
//     }
//   };

//   // Function to clear the current comment input
//   const clearComment = () => {
//     setComment('');
//   };

//   return (
//     <GlobalLayout>
//       <div className="flex border-transparent rounded shadow-lg p-3">
//         <div className="sidebar border w-1/5">
//           <div className="side-header border-b p-2.5 w-full">
//             <Menu as="div" className="relative inline-block text-left w-full">
//               <div>
//                 <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//                   Status
//                   <ChevronDownIcon
//                     className="-mr-1 h-5 w-5 text-gray-400"
//                     aria-hidden="true"
//                   />
//                 </Menu.Button>
//               </div>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <div className="py-1">
//                     <Menu.Item>
//                       {({ active }) => (
//                         <p
//                           className={classNames(
//                             active
//                               ? "bg-gray-100 text-gray-900"
//                               : "text-gray-700",
//                             "block px-4 py-2 text-sm"
//                           )}
//                         >
//                           All
//                         </p>
//                       )}
//                     </Menu.Item>
//                     <Menu.Item>
//                       {({ active }) => (
//                         <p
//                           className={classNames(
//                             active
//                               ? "bg-gray-100 text-gray-900"
//                               : "text-gray-700",
//                             "block px-4 py-2 text-sm"
//                           )}
//                         >
//                           Ongoing
//                         </p>
//                       )}
//                     </Menu.Item>
//                     <Menu.Item>
//                       {({ active }) => (
//                         <p
//                           className={classNames(
//                             active
//                               ? "bg-gray-100 text-gray-900"
//                               : "text-gray-700",
//                             "block px-4 py-2 text-sm"
//                           )}
//                         >
//                           Overdue
//                         </p>
//                       )}
//                     </Menu.Item>
//                     <Menu.Item>
//                       {({ active }) => (
//                         <p
//                           className={classNames(
//                             active
//                               ? "bg-gray-100 text-gray-900"
//                               : "text-gray-700",
//                             "block px-4 py-2 text-sm"
//                           )}
//                         >
//                           Completed
//                         </p>
//                       )}
//                     </Menu.Item>
//                   </div>
//                 </Menu.Items>
//               </Transition>
//             </Menu>
//           </div>

//           <div className="side-list  h-fit p-2 flex flex-col gap-4">
//             <div className="tasks shadow p-3">
//               <p className=" text-lg font-bold ">Task Name 1</p>
//               <p>Subtask 1</p>
//               <p>Subtask 2</p>
//               <p>Subtask 3</p>
//             </div>

//             <div className="divider border-b"></div>

//             <div className="tasks shadow p-3">
//               <p className=" text-lg font-bold ">Task Name 2</p>
//               <p>Subtask 1</p>
//               <p>Subtask 2</p>
//               <p>Subtask 3</p>
//             </div>

//             <div className="divider border-b"></div>

//             <div className="tasks shadow p-3">
//               <p className=" text-lg font-bold ">Task Name 3</p>
//               <p>Subtask 1</p>
//               <p>Subtask 2</p>
//               <p>Subtask 3</p>
//             </div>
//           </div>
//         </div>

//         <div className="main w-4/5 border-y border-r">
//           <div className="main-title flex justify-between border-b p-2 ">
//             <p className="text-lg font-bold">Task Name </p>
//             <SearchFilter />
//           </div>

//           <div className="main-body p-2 ">
//             <div className="first-strip shadow-sm  flex items-center justify-between p-2 border px-4 ">
//               <div className="dropdown">
//                 <select
//                   id="status"
//                   name="status"
//                   className="w-fit h-10 border-transparency focus:outline-none bg-white focus:border-black text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
//                 >
//                   <option value="All" defaultValue="0">
//                     All
//                   </option>
//                   <option value="">Ongoing</option>
//                   <option value="">Overdue</option>
//                   <option value="">Completed</option>
//                 </select>
//               </div>
//               <p>Subtask ({3})</p>
//               <div className="supporter">
//                 <p>
//                   Supporter <i className="bi bi-person-circle"></i>
//                 </p>
//               </div>
//             </div>

//             <div className="second-strip shadow-sm flex items-center p-2 border px-4 mt-3">
//               <p className="font-bold">Description:</p> &nbsp;&nbsp;
//               <p>Description We'll be shown here. </p>
//             </div>

//             <div className="third-strip shadow-sm flex flex-col gap-2.5 first-letter: p-2 border px-4 mt-3">
//               <p className="font-bold ">Task Information</p>
//               <p>User : &nbsp;&nbsp;&nbsp;{"Mr. XYZ"}</p>
//               <div className="flex gap-3">
//                 <p>Priority : </p>
//                 <select
//                   id="priority"
//                   name="priority"
//                   className="w-fit focus:outline-none bg-white focus:border-black text-black rounded p-2 md:px-3 py-0 md:py-1 tracking-wider"
//                 >
//                   <option value="All" defaultValue="0">
//                     Low
//                   </option>
//                   <option value="">Medium</option>
//                   <option value="">High</option>
//                 </select>

//               </div>

//               <div className="flex items-center gap-3">
//                 <p>Start Date : </p>
//                 <DatePicker
//                   showIcon
//                   dateFormat="dd/MM/yyyy"
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   selectsStart
//                   startDate={startDate}
//                   endDate={endDate}
//                   icon="bi bi-calendar-date-fill"
//                 />

//                 <p className="ml-auto">Due Date : </p>
//                 <div className="mr-auto">
//                   <DatePicker
//                     showIcon
//                     dateFormat="dd/MM/yyyy"
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     selectsEnd
//                     startDate={startDate}
//                     endDate={endDate}
//                     minDate={startDate}
//                     icon="bi bi-calendar-date-fill"
//                   />
//                 </div>
//               </div>
//               <div className="flex">
//                 <p>Reminder :</p>
//                 <select
//                   id="priority"
//                   name="priority"
//                   className="w-fit focus:outline-none bg-white focus:border-black text-black rounded p-2 md:px-3 py-0 md:py-1 tracking-wider"
//                 >
//                   <option value="All" defaultValue="0">
//                     None
//                   </option>
//                   <option value="">Yes</option>
//                   <option value="">Later</option>
//                 </select>
//               </div>
//             </div>

//             <div className="fourth-strip mt-4 ">
//               <Tab.Group>
//                 <Tab.List className="flex space-x-1  rounded-xl bg-light-900 p-1">
//                   <Tab
//                     as={Fragment}
//                     className="w-1/6 py-2.5 text-sm font-medium leading-5 "
//                   >
//                     {({ selected }) => (
//                       /* Use the `selected` state to conditionally style the selected tab. */
//                       <button
//                         className={
//                           selected
//                             ? "bg-light-900 text-blue-900 border-b-2 border-x-2 shadow-sm "
//                             : "text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]"
//                         }
//                       >
//                         Comments
//                       </button>
//                     )}
//                   </Tab>
//                   <Tab
//                     as={Fragment}
//                     className="w-1/6 py-2.5 text-sm font-medium leading-5 "
//                   >
//                     {({ selected }) => (
//                       /* Use the `selected` state to conditionally style the selected tab. */
//                       <button
//                         className={
//                           selected
//                             ? "bg-light-900 text-blue-900 border-b-2 border-x-2 shadow-sm "
//                             : "text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]"
//                         }
//                       >
//                         Subtasks
//                       </button>
//                     )}
//                   </Tab>
//                   <Tab
//                     as={Fragment}
//                     className="w-1/6 py-2.5 text-sm font-medium leading-5 "
//                   >
//                     {({ selected }) => (
//                       /* Use the `selected` state to conditionally style the selected tab. */
//                       <button
//                         className={
//                           selected
//                             ? "bg-light-900 text-blue-900 border-b-2 border-x-2 shadow-sm "
//                             : "text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]"
//                         }
//                       >
//                         Documents
//                       </button>
//                     )}
//                   </Tab>
//                 </Tab.List>
//                 <Tab.Panels className="border shadow m-1 ">
//                   <Tab.Panel className="p-3 overflow-y-auto">

//                     {/* Display existing chat messages */}
//                     {comments.map((c, index) => (
//                       <div key={index} className="flex items-center">
//                         {/* Display user info */}
//                         <div className="flex-none flex flex-col items-center space-y-1 mr-4">
//                           <img
//                             className="rounded-full w-10 h-10"
//                             src="/images/icons/user.png"
//                             alt="user"
//                           />
//                           <a href=" " className="block text-xs hover:underline">
//                             Username
//                           </a>
//                         </div>
//                         {/* Display chat message */}
//                         <div className="flex-1 w-3/4 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
//                           <p className="text-base">{c.text}</p>
//                           <p className="text-sm text-end">{c.timestamp}</p>
//                         </div>
//                       </div>
//                     ))}

//                     {/* Textarea for typing new comments */}
//                     <div className="p-4 pb-0">
//                       <div className="overflow-hidden">
//                         <textarea
//                           id="OrderNotes"
//                           className="w-full resize-none border-x-0 border-t-0 border-gray-200 bg-gray-100 p-2 align-top sm:text-sm"
//                           rows="6"
//                           placeholder="Type Comments here..........👇🏻👇🏻"
//                           value={comment}
//                           onChange={(e) => setComment(e.target.value)}
//                         ></textarea>

//                         {/* Buttons for clearing and adding comments */}
//                         <div className="flex items-center justify-end gap-2 py-3 border-t-2 border-gray-400">
//                           <Attachment />
//                           <button
//                             type="button"
//                             className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
//                             onClick={clearComment}
//                           >
//                             Clear Comment
//                           </button>

//                           <button
//                             type="button"
//                             className="rounded bg-[#252c48] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#252c48ce]"
//                             onClick={addComment}
//                           >
//                             Add Comment
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                   </Tab.Panel>
//                   <Tab.Panel className="p-3">
//                     <div className=" flex flex-col gap-2 p-2.5 m-3 border-b-2 bg-gray-100 border-gray-400">
//                       <Popover className="relative">
//                         <Popover.Button className="bg-white p-1.5 shadow-sm">{"Subtask 1"}</Popover.Button>
//                         <Transition
//                           enter="transition duration-100 ease-out"
//                           enterFrom="transform scale-95 opacity-0"
//                           enterTo="transform scale-100 opacity-100"
//                           leave="transition duration-75 ease-out"
//                           leaveFrom="transform scale-100 opacity-100"
//                           leaveTo="transform scale-95 opacity-0"
//                         ></Transition>
//                         <Popover.Panel className="absolute z-10 bg-white p-3 card shadow">
//                           <div className="cardTitle flex flex-col gap-3">
//                             <div className="flex">
//                               <p className="font-semibold">Task name: &nbsp;</p>
//                               <p> {" Task Name"}</p>
//                             </div>
//                             <div className="flex">
//                               <p className="font-semibold">Target Date: &nbsp;</p>
//                               <p> {" Target Date"} </p>
//                             </div>
//                             <div className="">
//                               <p className="font-semibold ">Description: </p>
//                               <p>{"Small Description about the task will be appeared here..."}</p>
//                             </div>
//                           </div>

//                         </Popover.Panel>
//                       </Popover>
//                       <Popover className="relative">
//                         <Popover.Button className="bg-white p-1.5 shadow-sm">{"Subtask 2"}</Popover.Button>
//                         <Transition
//                           enter="transition duration-100 ease-out"
//                           enterFrom="transform scale-95 opacity-0"
//                           enterTo="transform scale-100 opacity-100"
//                           leave="transition duration-75 ease-out"
//                           leaveFrom="transform scale-100 opacity-100"
//                           leaveTo="transform scale-95 opacity-0"
//                         ></Transition>
//                         <Popover.Panel className="absolute z-10 bg-white p-3 card shadow">
//                           <div className="cardTitle flex flex-col gap-3">
//                             <div className="flex">
//                               <p className="font-semibold">Task name: &nbsp;</p>
//                               <p> {" Task Name"}</p>
//                             </div>
//                             <div className="flex">
//                               <p className="font-semibold">Target Date: &nbsp;</p>
//                               <p> {" Target Date"} </p>
//                             </div>
//                             <div className="">
//                               <p className="font-semibold ">Description: </p>
//                               <p>{"Small Description about the task will be appeared here..."}</p>
//                             </div>
//                           </div>

//                         </Popover.Panel>
//                       </Popover>
//                       <Popover className="relative">
//                         <Popover.Button className="bg-white p-1.5 shadow-sm" >{"Subtask 3  "}</Popover.Button>
//                         <Transition
//                           enter="transition duration-100 ease-out"
//                           enterFrom="transform scale-95 opacity-0"
//                           enterTo="transform scale-100 opacity-100"
//                           leave="transition duration-75 ease-out"
//                           leaveFrom="transform scale-100 opacity-100"
//                           leaveTo="transform scale-95 opacity-0"
//                         ></Transition>
//                         <Popover.Panel className="absolute z-10 bg-white p-3 card shadow">
//                           <div className="cardTitle flex flex-col gap-3">
//                             <div className="flex">
//                               <p className="font-semibold">Task name: &nbsp;</p>
//                               <p> {" Task Name"}</p>
//                             </div>
//                             <div className="flex">
//                               <p className="font-semibold">Target Date: &nbsp;</p>
//                               <p> {" Target Date"} </p>
//                             </div>
//                             <div className="">
//                               <p className="font-semibold ">Description: </p>
//                               <p>{"Small Description about the task will be appeared here..."}</p>
//                             </div>
//                           </div>

//                         </Popover.Panel>
//                       </Popover>
//                     </div>
//                     <div className="addTask flex w-full h-full my-10 justify-center items-center">
//                       <button
//                         type="button"
//                         data-bs-toggle="modal"
//                         data-bs-target="#staticBackdrop"
//                         className="border-1 px-3 py-2 rounded bg-[#252c48] text-white"
//                       >
//                         Add Subtask
//                       </button>
//                       {/* <!-- Modal --> */}
//                       <div
//                         className="modal fade"
//                         id="staticBackdrop"
//                         data-bs-backdrop="static"
//                         data-bs-keyboard="false"
//                         tabindex="-1"
//                         aria-labelledby="staticBackdropLabel"
//                         aria-hidden="true"
//                       >
//                         <div className="modal-dialog">
//                           <div className="modal-content">
//                             <div className="modal-header">
//                               <h1
//                                 className="modal-title font-bold text-lg fs-5"
//                                 id="staticBackdropLabel"
//                               >
//                                 Add Subtask
//                               </h1>
//                               <button
//                                 type="button"
//                                 className="btn-close text-black "
//                                 data-bs-dismiss="modal"
//                                 aria-label="Close"
//                               >
//                                 <i class="bi bi-x-circle"></i>
//                               </button>
//                             </div>
//                             <div className="modal-body">
//                               <SubtaskForm />
//                             </div>
//                             <div className="modal-footer">
//                               <button
//                                 type="button"
//                                 className="btn btn-danger bg-red-500"
//                                 data-bs-dismiss="modal"
//                               >
//                                 Close
//                               </button>
//                               <button
//                                 type="button"
//                                 className="btn bg-[#252c48] text-white hover:bg-[#3b4670]"
//                               >
//                                 Add Subtask
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Tab.Panel>
//                   <Tab.Panel className="flex flex-col justify-center items-center">
//                     <div className="DisplayFIles my-2">
//                       <p>Uploaded Files will be shown here.</p>
//                       <div className="FilesView w-full flex justify-start gap-3 mt-2">
//                         <img src="/images/icons/word.png" alt="" />
//                         <img src="/images/icons/pdf.png" alt="" />
//                       </div>
//                     </div>
//                     <div
//                       style={{ border: "dashed 1px gray" }}
//                       className="m-4  w-1/2 flex justify-center rounded-lg border-gray-900/25 px-6 py-10"
//                     >
//                       <div className="text-center ">
//                         <FolderArrowDownIcon
//                           className="mx-auto h-12 w-12 text-gray-300"
//                           aria-hidden="true"
//                         />
//                         <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                           <label
//                             htmlFor="file-upload"
//                             className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                           >
//                             <span>Upload a file</span>
//                             <input
//                               id="file-upload"
//                               name="file-upload"
//                               type="file"
//                               className="sr-only"
//                             />
//                           </label>
//                           <p className="pl-1">or drag and drop</p>
//                         </div>
//                         <p className="text-xs leading-5 text-gray-600">
//                           Image, File, PDF up to 10MB
//                         </p>
//                       </div>
//                     </div>
//                   </Tab.Panel>
//                 </Tab.Panels>
//               </Tab.Group>
//             </div>
//           </div>
//         </div>
//       </div>
//     </GlobalLayout>
//   );
// };

// export default TaskDetails;
