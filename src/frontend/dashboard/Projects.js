import React from 'react'
import GlobalLayout from '../utils/hoc/globalLayout'
import Dropdown from '../utils/elements/dropdown'
import SearchFilter from '../utils/elements/SearchFilter'

export default function Projects() {
  return (
    <GlobalLayout>
      <div className="head flex justify-between">
        <Dropdown project1="Project Number 1" project2="Project Number 2" project3="Project Number 3" />
        <SearchFilter />
      </div>
      <div className="ProjectList">
        <table style={{ width: "98%", marginTop:"1rem" }}>
          <thead>
            <tr className="border border-gray-900 bg-slate-200 ">
              <th style={{ width: "20%", padding: "1%" }}>Project Name</th>
              <th style={{ width: "20%", padding: "1%" }}>%</th>
              <th style={{ width: "20%", padding: "1%" }}>Users</th>
              <th style={{ width: "20%", padding: "1%" }}>Status</th>
              <th style={{ width: "20%", padding: "1%" }}>Tasks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </div>
    </GlobalLayout>
  )
}
