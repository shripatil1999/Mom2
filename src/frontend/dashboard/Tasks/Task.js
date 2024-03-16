import React from "react";
import GlobalLayout from "../../utils/hoc/globalLayout";
import SearchFilter from "../../utils/elements/SearchFilter";
import { Link } from "react-router-dom";
import Dropdown from '../../utils/elements/dropdown'


const TaskDetails = {
  onGoing: [
    {
      id: 1,
      TaskName: "TASK_NAME1",
      TargetDate: "DD/MM/YYYY",
      Description:
        "Some Description about the Task will be displayed here.......!!!!",
    },
    {
      id: 2,
      TaskName: "TASK_NAME2",
      TargetDate: "DD/MM/YYYY",
      Description:
        "Some Description about the Task will be displayed here.......!!!!",
    },
    {
      id: 3,
      TaskName: "TASK_NAME3",
      TargetDate: "DD/MM/YYYY",
      Description:
        "Some Description about the Task will be displayed here.......!!!!",
    },
  ],

  overDue: [
    {
      id: 1,
      TaskName: "TASK_NAME1",
      TargetDate: "DD/MM/YYYY",
      Description:
        "Some Description about the Task will be displayed here.......!!!!",
    },
    {
      id: 2,
      TaskName: "TASK_NAME2",
      TargetDate: "DD/MM/YYYY",
      Description:
        "Some Description about the Task will be displayed here.......!!!!",
    },
  ],

  Completed: [
    {
      id: 1,
      TaskName: "TASK_NAME1",
      TargetDate: "DD/MM/YYYY",
      Description:
        "Some Description about the Task will be displayed here.......!!!!",
    },
    {
      id: 2,
      TaskName: "TASK_NAME2",
      TargetDate: "DD/MM/YYYY",
      Description:
        "Some Description about the Task will be displayed here.......!!!!",
    },
    {
      id: 3,
      TaskName: "TASK_NAME3",
      TargetDate: "DD/MM/YYYY",
      Description:
        "Some Description about the Task will be displayed here.......!!!!",
    },
  ],
};

const Task = () => {


  return (
    <GlobalLayout>
      <div className="flex justify-right task-header mt-4">
        <p className="text-2xl font-bold mr-auto">Task</p>
        <Dropdown project1="Project Number 1" project2="Project Number 2" project3="Project Number 3" />
        <SearchFilter />
      </div>
      <p className="text-large">Department | Username </p>
      <main className="TaskMain mt-4 flex  flex-wrap justify-around ">
        <Link to="/taskdetails"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            borderRadius: "10px",
            width: "30%"
          }}
          className="onGoing hover:-translate-y-1 transition ease-in-out w-fit sm:w-27 h-fit p-5"
        >
          <div
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
            className="title w-11/12  rounded text-black bg-amber-500 ml-1 p-3"
          >
            <p className="">{TaskDetails.onGoing.length}</p>
            <p className="text-xl ">Ongoing</p>
          </div>
          {/* <div className="taskList w-full mt-5">
            <div className="gray-back relative bg-gray-200 w-full py-4">
              <div
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
                className="buttonTypeName absolute -top-3 -left-3 z-40 py-1 px-1 w-fit  bg-white border rounded border-black"
              >
                <p className="text-sm text-amber-600">Ongoing</p>
              </div>

              {TaskDetails.onGoing.map((task) => (
                <>
                  <Link to="/taskdetails"
                    style={{ width: "107%", marginLeft: "-4%" }}
                    key={task.id}
                    className="cardList card border drop-shadow-lg rounded-none border-black relative mt-3 py-3 px-4"
                  >
                    <div className="cardTitle">
                      <span className="font-semibold">Task name: </span>
                      <span> {task.TaskName}</span> <br />
                      <span className="font-semibold">Target Date: </span>
                      <span> {task.TargetDate} </span>
                    </div>
                    <span className="font-semibold">Description: </span>
                    <p>{task.Description}</p>
                  </Link>
                </>
              ))}
            </div>
          </div> */}
        </Link>

        <Link to="/overdueTasks"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            borderRadius: "10px",
            width: "30%"
          }}
          className="overDue hover:-translate-y-1 transition ease-in-out w-fit sm:w-27 h-fit p-5"
        >
          <div
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
            className="title w-11/12 rounded text-white  bg-red-700 ml-1 p-3"
          >
            <p className="">{TaskDetails.overDue.length}</p>
            <p className="text-xl">Overdue</p>
          </div>
          {/* <div className="taskList w-full mt-5">
            <div className="gray-back relative bg-gray-200 w-full py-4">
              <div
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
                className="buttonTypeName absolute -top-3 -left-3 z-40 py-1 px-1 w-fit  bg-white border rounded border-black"
              >
                <p className="text-sm text-red-700">Overdue</p>
              </div>

              {TaskDetails.overDue.map((task) => (
                <div
                  style={{ width: "107%", marginLeft: "-4%" }}
                  className="cardList card border drop-shadow-lg rounded-none border-black relative mt-3 py-3 px-4"
                >
                  <div className="cardTitle">
                    <span className="font-semibold">Task name: </span>
                    <span> {task.TaskName}</span> <br />
                    <span className="font-semibold">Target Date:</span>
                    <span> {task.TargetDate} </span>
                  </div>
                  <span className="font-semibold">Description: </span>
                  <p>{task.Description}</p>
                </div>
              ))}
            </div>
          </div> */}
        </Link>
        <Link to="/completedTasks"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            borderRadius: "10px",
            width: "30%"
          }}
          className="Completed hover:-translate-y-1 transition ease-in-out  w-fit sm:w-27 h-fit p-5"
        >
          <div
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
            className="title w-11/12 rounded text-black bg-lime-500 ml-1 p-3"
          >
            <p className="">{TaskDetails.Completed.length}</p>
            <p className="text-xl">Completed</p>
          </div>
          {/* <div className="taskList w-full mt-5">
            <div className="gray-back relative bg-gray-200 w-full py-4">
              <div
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
                className="buttonTypeName absolute -top-3 -left-3 z-40 py-1 px-1 w-fit  bg-white border rounded border-black"
              >
                <p className="text-sm text-lime-700">Completed</p>
              </div>

              {TaskDetails.Completed.map((task) => (
                <div
                  style={{ width: "107%", marginLeft: "-4%" }}
                  className="cardList card border drop-shadow-lg rounded-none border-black relative mt-3 py-3 px-4"
                >
                  <div className="cardTitle">
                    <span className="font-semibold">Task name: </span>
                    <span> {task.TaskName}</span> <br />
                    <span className="font-semibold">Target Date:</span>
                    <span> {task.TargetDate} </span>
                  </div>
                  <span className="font-semibold">Description: </span>
                  <p>{task.Description}</p>
                </div>
              ))}
            </div>
          </div> */}
        </Link>
      </main>
    </GlobalLayout>
  );
};

export default Task;
