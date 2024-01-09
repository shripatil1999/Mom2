import React from "react";
import GlobalLayout from "../utils/hoc/globalLayout";
import Dropdown from "../utils/elements/dropdown";
import SearchFilter from "../utils/elements/SearchFilter";

const ProjectDetails = [
  {
    ProjectId: 1,
    Name: "IPMS",
    Percentage: 90,
    User: "Shridhar",
    Status: "Ongoing",
    Tasks: 4,
  },
  {
    ProjectId: 2,
    Name: "MoM",
    Percentage: 30,
    User: "Shridhar",
    Status: "Completed",
    Tasks: 8,
  },
  {
    ProjectId: 3,
    Name: "New Project",
    Percentage: 0,
    User: "Shridhar",
    Status: "Not Started",
    Tasks: 15,
  },
];

export default function Projects() {
  return (
    <GlobalLayout>
      <div className="head flex justify-between mt-3">
        <Dropdown
          project1="Project Number 1"
          project2="Project Number 2"
          project3="Project Number 3"
        />
        <SearchFilter />
      </div>
      <div style={{overflowX:"auto"}} className="ProjectList mt-4">
        <table  className= "table table-responsive" style={{ width: "98%", marginTop: "1rem" }}>
          <thead>
            <tr className="border border-gray-900 bg-slate-200 ">
              <th
                style={{
                  width: "20%",
                  padding: "1%",
                  border: "1px solid black",
                  background:" rgb(226 232 240)"
                }}
              >
                Project Name
              </th>
              <th
                style={{
                  width: "20%",
                  padding: "1%",
                  border: "1px solid black",
                  background:" rgb(226 232 240)"
                }}
              >
               Percentage %
              </th>
              <th
                style={{
                  width: "20%",
                  padding: "1%",
                  border: "1px solid black",
                  background:" rgb(226 232 240)"
                }}
              >
                Users
              </th>
              <th
                style={{
                  width: "20%",
                  padding: "1%",
                  border: "1px solid black",
                  background:" rgb(226 232 240)"
                }}
              >
                Status
              </th>
              <th
                style={{
                  width: "20%",
                  padding: "1%",
                  border: "1px solid black",
                  background:" rgb(226 232 240)"
                }}
              >
                Tasks
              </th>
            </tr>
          </thead>
          <tbody>
            {ProjectDetails.map((project) => (
              <tr key={project.id}>
                <th
                  style={{
                    width: "20%",
                    padding: "1%",
                    border: "1px solid black",
                  }}
                >
                  {project.Name}
                </th>
                <th
                  style={{
                    width: "20%",
                    padding: "1%",
                    border: "1px solid black",
                  }}
                >
                  {project.Percentage}%
                </th>
                <th
                  style={{
                    width: "20%",
                    padding: "1%",
                    border: "1px solid black",
                  }}
                >
                  <div className="flex">
                <img className="mr-2" src="/images/icons/programmer.png" alt="" />  {project.User}</div>
                </th>
                <th
                  style={{
                    width: "20%",
                    padding: "1%",
                    border: "1px solid black",
                  }}
                >
                  {project.Status === "Ongoing" ?
                    <>
                      <div className="flex flex-row items-center">
                      <div className="w-3 h-3 rounded bg-yellow-500 mx-2"></div>
                      <p>{project.Status}</p>
                      </div>
                    </>
                    :
                    project.Status === "Completed" ?
                      <div className="flex flex-row items-center">
                        <div className="w-3 h-3 rounded bg-green-500 mx-2"></div>
                        <p>{project.Status}</p>
                      </div> :
                      project.Status === "Not Started" ?
                        <div className="flex flex-row items-center">
                          <div className="w-3 h-3 rounded bg-red-500 mx-2"></div>
                          <p>{project.Status}</p>
                        </div>
                        : null
                  }



                  {/* 
                  // var foo = (
                  // bar === 'a' ? 1 : // if
                  // bar === 'b' ? 2 : // else if
                  // bar === 'c' ? 3 : // else if
                  // null // else
                  // ); */}


                  {/* <select
                        id="pricingType"
                        name="pricingType"   
                        className="w-full h-10 border border-black focus:outline-none bg-white focus:border-black text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                    >
                        <option value="All" defaultValue="0">
                            All
                        </option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                    </select> */}
                </th>
                <th
                  style={{
                    width: "20%",
                    padding: "1%",
                    border: "1px solid black",
                  }}
                >
                  {project.Tasks}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="absolute bottom-0 right-0 m-20 border rounded-md border-black px-8 py-3 shadow-sm bg-slate-200 hover:bg-slate-700 font-bold hover:text-white">Add Project</button>
      </div>
    </GlobalLayout>
  );
}
