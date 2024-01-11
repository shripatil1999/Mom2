import React from "react";
import { Fragment, useEffect, useState } from "react";
import UserCard from "../utils/elements/UserCard";
import { Dialog, Transition } from "@headlessui/react";
import { format } from 'date-fns';


export default function Header() {
  let value = "40%";
  let NotificationNumber = "3";
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(format(new Date(),'dd/MM/yyyy, hh:mm:ss a'));
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div
        style={{
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
        className="flex flex-row items-center fixed w-full justify-end bg-white z-50 border-bottom gap-10"
      >
        {/* <div
          style={{
            backgroundImage: `url("/images/background.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            width: "100%",
          }}
          className=" h-full flex justify-center items-center text-center"
        >
          <p
            style={{ fontSize: "1.1em", marginLeft: "14%" }}
            className=" text-blue-600 font-bold drop-shadow"
          >
            Minutes of Meeting
          </p>
        </div> */}
        {/* //progress bar */}

        <div className=" h-full w-1/6 flex items-center ">
          <div className="w-full bg-gray-200 rounded-full">
            <div
              className="bg-[#252c48] text-sm font-medium text-blue-100 text-center p-1 leading-none rounded-full"
              style={{ width: value }}
            >
              {" "}
              {value}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around">
          <div className="notification">
            {/* <!-- component --> */}
            <div className="relative h-fit w-fit mt-2 mx-8">
              <div className="absolute -right-2 -top-3 px-1 pb-0.50 bg-[#df3333] rounded-full">
                <span className="text-sm text-white p-1">
                  {NotificationNumber}
                </span>
              </div>
              <div onClick={openModal} className="p-2">
                <img style={{ width:'2rem'}} src="/images/icons/bell.png" alt="" />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={currentColor}
                  className="text-yellow-600 w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg> */}
              </div>

              {/* Notification Modal */}

              <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-100"
                  onClose={closeModal}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black/25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-lg font-extrabold leading-6 text-gray-900"
                          >
                            All Notification
                          </Dialog.Title>
                          <div className="mt-8 flex items-center gap-4 border-1 border-gray-400 p-4">
                            <div className="avatar">
                              <img src="/images/icons/profile.png" alt="" />
                            </div>
                            <div className="details">
                              <p>
                                <strong>Task Reminder: </strong> Task Name
                              </p>
                              <p>
                                <strong>Date:</strong>{" "}
                                {currentDateTime.toLocaleString()}{" "}
                              </p>
                            </div>
                            <img
                              className="ml-auto h-full"
                              src="/images/icons/email.png"
                              alt=""
                            />
                            <img
                              className="h-full"
                              src="/images/icons/bell2.png"
                              alt=""
                            />
                          </div>
                          <div className="mt-8 flex items-center gap-4 border-1 border-gray-400 p-4">
                            <div className="avatar">
                              <img src="/images/icons/profile.png" alt="" />
                            </div>
                            <div className="details">
                              <p>
                                <strong>Task Reminder: </strong> Task Name
                              </p>
                              <p>
                                <strong>Date:</strong>{" "}
                                {currentDateTime.toLocaleString()}{" "}
                              </p>
                            </div>
                            <img
                              className="ml-auto h-full"
                              src="/images/icons/email.png"
                              alt=""
                            />
                            <img
                              className="h-full"
                              src="/images/icons/bell2.png"
                              alt=""
                            />
                          </div>
                          <div className="mt-8 flex items-center gap-4 border-1 border-gray-400 p-4">
                            <div className="avatar">
                              <img src="/images/icons/profile.png" alt="" />
                            </div>
                            <div className="details">
                              <p>
                                <strong>Task Reminder: </strong> Task Name
                              </p>
                              <p>
                                <strong>Date:</strong>{" "}
                                {currentDateTime.toLocaleString()}{" "}
                              </p>
                            </div>
                            <img
                              className="ml-auto h-full"
                              src="/images/icons/email.png"
                              alt=""
                            />
                            <img
                              className="h-full"
                              src="/images/icons/bell2.png"
                              alt=""
                            />
                          </div>

                          <div className="mt-14 flex gap-5">
                            <button
                              type="button"
                              className="inline-flex justify-center items-center rounded-md border-2 border-solid bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 "
                              onClick={closeModal}
                            >
                              Got it, thanks!
                            </button>
                            <button
                              type="button"
                              className="inline-flex gap-2 justify-center items-center rounded-md border-2 border-solid bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 "
                            >
                              <img src="/images/icons/dust.png" alt="" /> 
                              Clear All...!!!
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
          {/* <button className="relative bg-[#252c48] w-fit text-blue-50 text-xs sm:text-base p-2 mx-3 rounded ">
            Notifications
            <span className="absolute -top-3 -right-3 bg-red-500 text-red-50 py-1 px-2 text-xs rounded ml-1">
              {NotificationNumber}
            </span>
          </button> */}
          <div className="dateTime flex items-center">
            {/* <img src="/images/icons/clock.png" alt="" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="font-bold mx-1">{currentDateTime.toLocaleString()}</p>
          </div>
        </div>

        <div className="relative user h-full">
          <div className="group flex flex-col items-center py-2 pr-2">
            <img className="w-14" src="/images/icons/user.png" alt="" />
            <div className="user-name  bg-slate-200 text-black rounded-sm px-4 m-1">
              <p className="font-bold text-base">{"User Name"}</p>
            </div>
            <div className="hidden group-hover:block absolute z-50 top-14 right-14 transition transform translate-y-8 ease-in-out">
              <UserCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
