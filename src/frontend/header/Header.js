import React from "react";
import { useEffect, useState } from "react";
import UserCard from "../utils/elements/UserCard";
export default function Header() {
  let value = "40%";
  let NotificationNumber = "2";
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div style={{ boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)' }} className="flex flex-row items-center fixed w-full justify-end bg-white z-50 border-bottom gap-10">
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
          <button className="relative bg-[#252c48] w-fit text-blue-50 text-xs sm:text-base p-2 mx-3 rounded ">
            Notifications
            <span className="absolute -top-3 -right-3 bg-red-500 text-red-50 py-1 px-2 text-xs rounded ml-1">
              {NotificationNumber}
            </span>
          </button>
          <div className="dateTime flex">
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
            <p className="font-bold">{currentDateTime.toLocaleString()}</p>
          </div>
        </div>

        <div className="relative user h-full">
          <div className="group flex flex-col items-center py-2 pr-2">
            <img className="w-16" src="/images/icons/user.png" alt="" />
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
