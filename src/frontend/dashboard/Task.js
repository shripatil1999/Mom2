import React from "react";
import GlobalLayout from "../utils/hoc/globalLayout";
import SearchFilter from "../utils/elements/SearchFilter";

const Task = () => {
  return (
    <GlobalLayout>
      <div className="flex justify-between task-header mt-4">
        <p className="text-2xl font-bold">Task</p>
        <SearchFilter />
      </div>
      <p className="text-large">Department | Username </p>
      <main className="TaskMain mt-4 flex justify-around flex-wrap ">
      
        <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", borderRadius:'10px'}}  className="onGoing w-1/4 p-5">
          <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} className="title w-11/12  rounded text-black  bg-amber-500 ml-1 p-3">
            <p className="">{10}</p>
            <p className="text-xl ">Ongoing</p>
          </div>
          <div className="taskList w-full mt-5">
            <div className="gray-back relative bg-gray-200 w-full py-4">
              <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} className="buttonTypeName absolute -top-3 -left-3 z-40 py-1 px-1 w-fit  bg-white border rounded border-black">
                <p className="text-sm text-amber-600">Ongoing</p>
              </div>
              <div style={{width: '107%',marginLeft: '-4%'}} className="cardList card border drop-shadow-lg rounded-none border-black relative mt-3 py-3 px-4">
                <div className="cardTitle">
                  <span className="font-semibold">Task name: </span>
                  <span> TASK_NAME</span> <br />
                  <span className="font-semibold">Target Date: </span>
                  <span> DD/MM/YYYY</span>
                </div>
                <span className="font-semibold">Description: </span>
                <p>
                  {" "}
                  .................................................... <br />
                  ....................................................
                </p>
              </div>

              <div style={{width: '107%',marginLeft: '-4%'}} className="cardList card border drop-shadow-lg rounded-none border-black relative mt-3 py-3 px-4">
                <div className="cardTitle">
                  <span className="font-semibold">Task name: </span>
                  <span> TASK_NAME</span> <br />
                  <span className="font-semibold">Target Date: </span>
                  <span> DD/MM/YYYY</span>
                </div>
                <span className="font-semibold">Description: </span>
                <p>
                  {" "}
                  .................................................... <br />
                  ....................................................
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", borderRadius:'10px'}}  className="overDue w-1/4 p-5">
          <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} className="title w-11/12 rounded text-white  bg-red-700 ml-1 p-3">
            <p className="">{10}</p>
            <p className="text-xl">Overdue</p>
          </div>
          <div className="taskList w-full mt-5">
            <div className="gray-back relative bg-gray-200 w-full py-4">
              <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} className="buttonTypeName absolute -top-3 -left-3 z-40 py-1 px-1 w-fit  bg-white border rounded border-black">
                <p className="text-sm text-red-700">Overdue</p>
              </div>
              <div style={{width: '107%',marginLeft: '-4%'}} className="cardList card border rounded-none drop-shadow-lg border-black relative mt-3 py-3 px-4">
                <div className="cardTitle">
                  <span className="font-semibold">Task name: </span>
                  <span> TASK_NAME</span> <br />
                  <span className="font-semibold">Target Date: </span>
                  <span> DD/MM/YYYY</span>
                </div>
                <span className="font-semibold">Description: </span>
                <p>
                  {" "}
                  .................................................... <br />
                  ....................................................
                </p>
              </div>

              <div style={{width: '107%',marginLeft: '-4%'}} className="cardList card border rounded-none drop-shadow-lg border-black relative mt-3 py-3 px-4">
                <div className="cardTitle">
                  <span className="font-semibold">Task name: </span>
                  <span> TASK_NAME</span> <br />
                  <span className="font-semibold">Target Date: </span>
                  <span> DD/MM/YYYY</span>
                </div>
                <span className="font-semibold">Description: </span>
                <p>
                  {" "}
                  .................................................... <br />
                  ....................................................
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", borderRadius:'10px'}}  className="Completed w-1/4 p-5">
        <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} className="title w-11/12 rounded text-black bg-lime-500 ml-1 p-3">
            <p className="">{10}</p>
            <p className="text-xl">Completed</p>
          </div>
          <div className="taskList w-full mt-5">
            <div className="gray-back relative bg-gray-200 w-full py-4">
              <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} className="buttonTypeName absolute -top-3 -left-3 z-40 py-1 px-1 w-fit  bg-white border rounded border-black">
                <p className="text-sm text-lime-700">Completed</p>
              </div>
              <div style={{width: '107%',marginLeft: '-4%'}} className="cardList card border drop-shadow-lg rounded-none border-black relative mt-3 py-3 px-4">
                <div className="cardTitle">
                  <span className="font-semibold">Task name: </span>
                  <span> TASK_NAME</span> <br />
                  <span className="font-semibold">Target Date: </span>
                  <span> DD/MM/YYYY</span>
                </div>
                <span className="font-semibold">Description: </span>
                <p>
                  {" "}
                  .................................................... <br />
                  ....................................................
                </p>
              </div>
              
              <div style={{width: '107%',marginLeft: '-4%'}} className="cardList card border drop-shadow-lg rounded-none border-black relative mt-3 py-3 px-4">
                <div className="cardTitle">
                  <span className="font-semibold">Task name: </span>
                  <span> TASK_NAME</span> <br />
                  <span className="font-semibold">Target Date: </span>
                  <span> DD/MM/YYYY</span>
                </div>
                <span className="font-semibold">Description: </span>
                <p>
                  {" "}
                  .................................................... <br />
                  ....................................................
                </p>
              </div> 
            </div>
          </div>
        </div>

      </main>

    </GlobalLayout>
  );
};

export default Task;
