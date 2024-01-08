import React from "react";
import GlobalLayout from "../utils/hoc/globalLayout";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SearchFilter from "../utils/elements/SearchFilter";
import DatePicker from "react-datepicker";
import { Tab } from "@headlessui/react";
import "react-datepicker/dist/react-datepicker.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const TaskDetails = () => {
  const [startDate, setStartDate] = useState(new Date("2024/02/01"));
  const [endDate, setEndDate] = useState(new Date("2024/02/02"));

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

          <div className="side-list p-2 flex flex-col gap-2">
            <div className="">
              <p className=" text-lg font-bold ">Task Name 1</p>
              <p>Subtask 1</p>
              <p>Subtask 2</p>
              <p>Subtask 3</p>
            </div>

            <div className="divider border-b"></div>

            <div className="">
              <p className=" text-lg font-bold ">Task Name 1</p>
              <p>Subtask 1</p>
              <p>Subtask 2</p>
              <p>Subtask 3</p>
            </div>

            {/* <div className="divider border-b"></div> */}
          </div>
        </div>

        <div className="main w-4/5 border-y border-r">
          <div className="main-title flex justify-between border-b p-2 ">
            <p className="text-lg font-bold">Task Name </p>
            <SearchFilter />
          </div>

          <div className="main-body  p-2 ">
            <div className="first-strip flex items-center justify-between p-2 border px-4 ">
              <div className="dropdown">
                <select
                  id="status"
                  name="status"
                  className="w-fit h-10 border-transparency focus:outline-none bg-white focus:border-black text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                >
                  <option value="All" defaultValue="0">
                    All
                  </option>
                  <option value="">
                    <p>
                      <i className="bi bi-circle-fill text-yellow-600"></i>
                      Ongoing
                    </p>{" "}
                  </option>
                  <option value="">
                    <i className="bi bi-circle-fill text-red-600"></i>Overdue
                  </option>
                  <option value="">
                    <i className="bi bi-circle-fill text-green-600"></i>{" "}
                    Completed
                  </option>
                </select>
              </div>
              <p>Subtask ({3})</p>
              <div className="supporter">
                <p>
                  Supporter <i className="bi bi-person-circle"></i>
                </p>
              </div>
            </div>

            <div className="second-strip flex items-center p-2 border px-4 mt-3">
              <p className="font-bold">Description:</p> &nbsp;&nbsp;
              <p>Description We'll be shown here. </p>
            </div>

            <div className="third-strip flex flex-col gap-2.5 first-letter: p-2 border px-4 mt-3">
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

                <p className="ml-auto">Completion Percentage: </p>
                <select
                  id="priority"
                  name="priority"
                  className="w-fit focus:outline-none bg-white focus:border-black text-black rounded p-2 md:px-3 py-0 md:py-1 tracking-wider mr-auto"
                >
                  <option value="All" defaultValue="0">
                    0 %
                  </option>
                  <option value="">10 %</option>
                  <option value="">20 %</option>
                  <option value="">30 %</option>
                  <option value="">40 %</option>
                  <option value="">50 %</option>
                  <option value="">60 %</option>
                  <option value="">70 %</option>
                  <option value="">80 %</option>
                  <option value="">90 %</option>
                  <option value="">100 %</option>
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

            <div className="fourth-strip mt-2">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-light-900 p-1">
                  <Tab
                    as={Fragment}
                    className="w-1/6 py-2.5 text-sm font-medium leading-5 "
                  >
                    {({ selected }) => (
                      /* Use the `selected` state to conditionally style the selected tab. */
                      <button
                        className={
                          selected
                            ? "bg-light-900 text-blue-900 border-b-2 border-x-2"
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
                            ? "bg-light-900 text-blue-900 border-b-2 border-x-2"
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
                            ? "bg-light-900 text-blue-900 border-b-2 border-x-2"
                            : "text-[#252c48]  hover:bg-white/[2] hover:text-[#252c48]"
                        }
                      >
                        Documents
                      </button>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels className="border m-1 ">
                  <Tab.Panel className="p-3">
                  <div className="flex-1 px-4 py-2 overflow-y-auto">
                      {/* <!-- chat message --> */}

                      <div className="flex items-center ">
                        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
                          <img
                            className="rounded-full w-10 h-10"
                            src="/images/icons/user.png" alt="user"
                          />
                          <a href=" " className="block text-xs hover:underline">
                            Username
                          </a>
                        </div>
                        <div className="flex-1 w-3/4 bg-gray-200 text-black p-2 rounded-lg mb-2 relative">
                            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.</p>
                            <p className="text-sm text-end">01/01/2024, 06.60 PM</p>                          
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 px-4 py-4 overflow-y-auto">
                      {/* <!-- chat message --> */}

                      <div className="flex items-center ">
                        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
                          <img
                            className="rounded-full w-10 h-10"
                            src="/images/icons/user.png" alt="user"
                          />
                          <a href=" " className="block text-xs hover:underline">
                          Username
                          </a>
                        </div>
                        <div className="flex-1 w-3/4 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
                            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.</p>
                            <p className="text-sm text-end">01/01/2024,  06.60 PM</p>                          
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p>ok</p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p>ok</p>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default TaskDetails;
