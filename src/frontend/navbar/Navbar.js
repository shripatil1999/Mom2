import React, { useState } from "react";
import { Link } from "react-router-dom";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './App.css'; // Assuming you have your TailwindCSS styles in a separate file

const Navbar = () => {
  const [submenuHidden, setSubmenuHidden] = useState(false);
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuHidden(!submenuHidden);
  };

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const [submenuHidden2, setSubmenuHidden2] = useState(false);

  const toggleSubmenu2 = () => {
    setSubmenuHidden2(!submenuHidden2);
  };

  // Shridhar

  return (
    <div className="bg-[#252c48] w-fit h-fit">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={toggleSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div
        style={{
          /* Hide scrollbar for Chrome, Safari and Opera */
          WebkitScrollbar: {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          msOverflowStyle: "none", /* IE and Edge */
          scrollbarWidth: "none", /* Firefox */
        }}
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-[#252c48] ${sidebarHidden ? "hidden" : ""
          }`}
      >
        <div className="text-sky-500 text-xl">
          <div
            style={{
              backgroundImage: `url("/images/background2.png")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "100%",
            }}
            className="p-6 mt-1 flex h-full justify-center items-center text-center"
          >
            <p
              style={{ fontSize: "1.1em" }}
              className=" text-[#64beee] mb-2 font-bold drop-shadow"
            >
              Minutes of Meeting
            </p>

            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={toggleSidebar}
            ></i>
          </div>
          <div className="mt-3 bg-gray-600 h-[1px]"></div>
        </div>
        {/* <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div> */}
        <Link
          to="/Home"
          className="p-2.5 mt-5 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
        >
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </Link>
        {/* Meeting Minutes */}
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
          onClick={toggleSubmenu2}
        >
          <i className="bi bi-pencil-square"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Meeting Minutes
            </span>
            <span className={`text-sm ${submenuHidden2 ? "rotate-180" : ""}`}>
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
        <div
          className={`text-left flex flex-col text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${submenuHidden2 ? "hidden" : ""
            }`}
        >
          <Link
            to="/newmeetmins"
            className="cursor-pointer p-2 hover:bg-[#33769B] rounded mt-1"
          >
            New Meeting Minutes
          </Link>
          <Link
            to="/meethistory"
            className="cursor-pointer p-2 hover:bg-[#33769B] rounded mt-1"
          >
            Meeting History
          </Link>
        </div>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <Link
          to="/Task"
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
        >
          <i className="bi bi-list-task"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            My Tasks
          </span>
        </Link>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <Link
          to="/Task"
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
        >
          <i className="bi bi-person-workspace"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Projects
          </span>
        </Link>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <div
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
          onClick={toggleSubmenu}
        >
          <i className="bi bi-clipboard-data-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Analytics & Reports
            </span>
            <span className={`text-sm ${submenuHidden ? "rotate-180" : ""}`}>
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
        <div
          className={`text-left flex flex-col text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${submenuHidden ? "hidden" : ""
            }`}
        >
          <Link to='/overview' className="cursor-pointer p-2 hover:bg-[#33769B] rounded mt-1">
            Overview
          </Link>
          <Link to='/Analytics' className="cursor-pointer p-2 hover:bg-[#33769B] rounded mt-1 active:bg-[#33769B] focus:bg-[#33769B]">
            Analytics
          </Link>
          <Link to='/performance' className="cursor-pointer p-2 hover:bg-[#33769B] rounded mt-1">
            Performance Metrics
          </Link>
        </div>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <Link
          to="/Task"
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
        >
          <i className="bi bi-gear-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Settings
          </span>
        </Link>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <Link
          to="/helpSupport"
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
        >
          <i className="bi bi-patch-question-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Help & Support
          </span>
        </Link>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <Link
          to="/"
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
        >
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (

//     <div>
//       <ul className="space-y-1">
//         <li>
//           <Link to='/home'
//             className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 opacity-75"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//             </svg>

//             <span className="text-sm font-medium"> General </span>
//           </Link>
//         </li>

//         <li>
//           <details className="group [&_summary::-webkit-details-marker]:hidden">
//             <summary
//               className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//             >
//               <div className="flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 opacity-75"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>

//                 <span className="text-sm font-medium"> Teams </span>
//               </div>

//               <span className="shrink-0 transition duration-300 group-open:-rotate-180">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//             </summary>

//             <ul className="mt-2 space-y-1 px-4">
//               <li>
//                 <Link to='/task'
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Banned Users
//                 </Link>
//               </li>

//               <li>
//                 <a
//                   href={{}}
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Calendar
//                 </a>
//               </li>
//             </ul>
//           </details>
//         </li>

//         <li>
//           <a
//             href={{}}
//             className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 opacity-75"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//               />
//             </svg>

//             <span className="text-sm font-medium"> Billing </span>
//           </a>
//         </li>

//         <li>
//           <a
//             href={{}}
//             className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 opacity-75"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//               />
//             </svg>

//             <span className="text-sm font-medium"> Invoices </span>
//           </a>
//         </li>

//         <li>
//           <details className="group [&_summary::-webkit-details-marker]:hidden">
//             <summary
//               className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//             >
//               <div className="flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 opacity-75"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                   />
//                 </svg>

//                 <span className="text-sm font-medium"> Account </span>
//               </div>

//               <span className="shrink-0 transition duration-300 group-open:-rotate-180">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//             </summary>

//             <ul className="mt-2 space-y-1 px-4">
//               <li>
//                 <a
//                   href={{}}
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Details
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href={{}}
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Security
//                 </a>
//               </li>

//               <li>
//                 <form action="/logout">
//                   <button
//                     type="submit"
//                     className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
//                   >
//                     Logout
//                   </button>
//                 </form>
//               </li>
//             </ul>
//           </details>
//         </li>
//       </ul>

//     </div>
//   )
// }
