import React, { useState, Fragment, useEffect } from "react";
import GlobalLayout from "../../utils/hoc/globalLayout.js";
import { Menu, Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SearchFilter from "../../utils/elements/SearchFilter.js";
import DatePicker from "react-datepicker";
import { Tab } from "@headlessui/react";
import "react-datepicker/dist/react-datepicker.css";
import Attachment from "../../utils/elements/Attachment.js";
import { auth, db } from "../../../firebase.js";

import {
    doc,
    // onSnapshot,
    getDoc,
    collection,
    getDocs,

} from "firebase/firestore";

// import { format } from "date-fns";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const CompletedTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [documentIds, setDocumentIds] = useState([]);
    const currentUser = auth.currentUser;
    const user = currentUser.displayName;
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

    // Function to clear the current comment input
    const clearComment = () => {
        setComment("");
    };


    useEffect(() => {
        const fetchTaskDocumentIds = async () => {
            try {
                const tasksCollectionRef = collection(db, "Tasks");
                // Fetch all documents from the "Tasks" collection
                const tasksSnapshot = await getDocs(tasksCollectionRef);
                // Extract document IDs from the snapshot
                const ids = tasksSnapshot.docs.map((doc) => doc.id);
                // Set the document IDs in the state
                setDocumentIds(ids);
            } catch (error) {
                console.error("Error fetching document IDs:", error);
            }
        };
        // Call the function to fetch document IDs
        fetchTaskDocumentIds();
    }, []);

    // console.log(documentIds)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const fetchedTasks = [];

                // Loop through each document ID
                for (const id of documentIds) {
                    // Reference the "Tasks" collection and a specific document ID
                    const taskDocumentRef = doc(db, "Tasks", id);

                    // Fetch the specific task document
                    const taskDoc = await getDoc(taskDocumentRef);

                    // Check if the document exists by verifying if data() returns a non-null value
                    if (taskDoc && taskDoc.data()) {
                        const taskData = { id: taskDoc.id, ...taskDoc.data() };

                        // Check if taskData is defined before processing tasks
                        // console.log("keys", Object.entries(taskData))
                        if (taskData && Object.keys(taskData).length > 0) {
                            // Extract tasks from the mappedTask structure
                            const tasks = Object.values(taskData);

                            // Filter tasks based on user
                            const matchingTasks = tasks.filter((task) => {
                                return (
                                    (task.status && task.status === "Completed") && (task.actionBy === user ||
                                        (task.supporters && task.supporters.includes(user))))
                            });
                            // console.log("matchingTasks", matchingTasks)
                            if (matchingTasks.length > 0) {
                                fetchedTasks.push(...matchingTasks);
                                console.log(`Matching tasks found for document ID: ${id}`);
                            } else {
                                console.log(`No matching tasks found for document ID: ${id}`);
                            }
                        } else {
                            console.log(`Task data is undefined or empty for document ID: ${id}`);
                        }
                    } else {
                        console.log(`Task document not found for document ID: ${id}`);
                    }
                }

                // Set the tasks in the state

                setTasks(fetchedTasks);

                console.log("tasks from Matching ", fetchedTasks);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        // Call the function to fetch tasks when documentIds changes
        if (documentIds.length > 0) {
            fetchTasks();
        }
    }, [documentIds, user]); // Trigger the effect when documentIds or user changes



    return (
        <GlobalLayout>
            <div className="bg-lime-500 w-[99%] text-blue-900 text-center text-base p-1">
                <p>Thank You for completing the Tasks🎉🥳👏</p>
            </div>
            <div className="flex border-transparent rounded shadow-lg p-1 mr-3">

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
                            {tasks.map((task, index) => (
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
                                            <p className="font-bold m-1">{task.agenda}</p>
                                            <ul>
                                                {/* {task.subtasks.map((subtask, index) => (
                          <li className="m-1" key={index}>
                            {subtask}
                          </li>
                        ))} */}
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
                                    Task ID:{tasks[selectedTab]?.taskUID}
                                </p>
                                <SearchFilter />
                            </div>
                            {/* Render content based on selected tab */}

                            <div className="main-body p-2 ">
                                <div className="tasks">

                                    <div className="first-strip shadow-sm  flex items-center justify-between p-2 border px-4 ">
                                        <div className="dropdown">
                                            <select
                                                id="status"
                                                name="status"
                                                defaultValue={tasks[selectedTab]?.status}

                                                className="w-fit h-10 border-transparency focus:outline-none bg-white focus:border-black text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                                            >
                                                {console.log("status from UI", tasks[selectedTab]?.status)}
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </div>
                                        <p>Subtask ({tasks[selectedTab]?.subTasks?.length || 0})</p>
                                        <div className="supporters mb-1 flex items-center">
                                            <p>Supporters: </p>

                                            {tasks[selectedTab]?.supporters.map((supports) => (
                                                <span className="border-1 text-base font-normal bg-pink-100 border-pink-600 p-2 m-1 shadow-sm shadow-pink-700">
                                                    {supports}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="second-strip shadow-sm flex items-center p-2 border px-4 mt-3">
                                        <p className="font-bold">Description:</p> &nbsp;&nbsp;
                                        <p>{tasks[selectedTab]?.description}</p>
                                    </div>

                                    <div className="third-strip shadow-sm flex flex-col gap-2.5 first-letter: p-2 border px-4 mt-3">
                                        <p className="font-bold ">Task Information</p>
                                        <p>
                                            Action By : &nbsp;&nbsp;&nbsp;
                                            {tasks[selectedTab]?.actionBy && (<span className="border-1 text-base font-normal bg-blue-100 border-blue-600 p-2 m-1 shadow-sm shadow-blue-700">
                                                {tasks[selectedTab]?.actionBy}
                                            </span>)
                                            }
                                        </p>
                                        <div className="flex gap-3">
                                            <p>Priority : </p>
                                            <select
                                                id="priority"
                                                // value={priority}
                                                name="priority"
                                                // onChange={(e) => setPriority(e.target.value)}
                                                className="w-fit focus:outline-none bg-white focus:border-black text-black rounded p-2 md:px-3 py-0 md:py-1 tracking-wider"
                                                defaultValue={tasks[selectedTab]?.priority || "Low"}
                                            >
                                                <option value="Low" >
                                                    Low
                                                </option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                            </select>
                                        </div>
                                        {
                                            console.log("priority", tasks[selectedTab]?.priority)
                                        }
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
                                                        {tasks[selectedTab]?.subTasks?.map((subtask) => (
                                                            <Popover className="relative">
                                                                <Popover.Button className="bg-white p-1.5 shadow-sm">
                                                                    {subtask === "" ? "No tasks" : subtask}
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
                                                        ))}
                                                    </div>

                                                </Tab.Panel>

                                            </Tab.Panels>
                                        </Tab.Group>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="updateBtn flex justify-center">
                                <button
                                    type="button"
                                    className="rounded bg-[#252c48] px-3 py-2 my-3 text-lg font-medium text-white hover:bg-[#252c48ce]"
                                    onClick={() =>
                                        updateTasks(
                                            tasks[selectedTab]?.meetCode,
                                            tasks[selectedTab]?.taskUID
                                        )
                                    }
                                >
                                    Update
                                </button>
                                {console.log(tasks[selectedTab]?.taskUID)}
                            </div> */}
                        </>
                    )}
                </div >
            </div >
        </GlobalLayout >
    );
};

export default CompletedTasks;
