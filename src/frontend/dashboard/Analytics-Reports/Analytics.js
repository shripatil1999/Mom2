import React from "react";
import GlobalLayout from "../../utils/hoc/globalLayout";
import Dropdown from "../../utils/elements/dropdown";

const Analytics = () => {
  let score = "6.8";
  let TotalTaskToday = "4";
  let TotalTaskCompletionPercentage = "70%";
  let Performance = "Outstanding";
  let username = "Mr. XYZ";

  return (
    <GlobalLayout>
      <div className="header flex mt-4 p-2">
        <div className=" flex flex-col items-center text-center w-fit ms-2">
          <img className="w-28" src="/images/icons/user.png" alt="" />
          <div className="user-name w-full bg-slate-200 text-black rounded-sm px-1 m-2">
            <p className="font-bold text-sm">{"User Name"}</p>
          </div>
        </div>
        <div className="message px-4">
          <p>
            Hii, <strong> {username} </strong>
          </p>
          <p>
            Today, you have achieved a score of <strong>{score}</strong>. You
            are tasked with completing <strong> {TotalTaskToday}</strong> tasks,
            and your progress stands at{" "}
            <strong> {TotalTaskCompletionPercentage}</strong>. <br /> Your
            performance can be described as <strong> {Performance}</strong>.
          </p>
        </div>
      </div>
      <div className="main">
        <div className="dropdown flex justify-end me-5">
          <Dropdown
            project1="Project Number 1"
            project2="Project Number 2"
            project3="Project Number 3"
          />
        </div>
        <div className="analyticalParameters">
            <div className="WeeklyGraph">
             <p>Activity tracker for the Month of </p>
                
            </div>
            <div className="Progress">

            </div>
            <div className="Score">
                
            </div>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default Analytics;
