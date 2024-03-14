import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './App.css'; // Assuming you have your TailwindCSS styles in a separate file

const Navbar = () => {
  const [submenuHidden, setSubmenuHidden] = useState(false);
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const navigate = useNavigate();
  const alert = useAlert();

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

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        // console.log("Signed out successfully")
        alert.success("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
          msOverflowStyle: "none" /* IE and Edge */,
          scrollbarWidth: "none" /* Firefox */,
        }}
        className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[270px] overflow-y-auto text-center bg-[#252c48] ${sidebarHidden ? "hidden" : ""
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
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] focus:bg-[#33769B] text-white"
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
          {/* <Link
            to="/meethistory"
            className="cursor-pointer p-2 hover:bg-[#33769B] rounded mt-1"
          >
            Meeting History
          </Link> */}
          <Link
            to="/meethistory2"
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
        {/* <Link
          to="/projects"
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
        >
          <i className="bi bi-person-workspace"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Projects
          </span>
        </Link> */}

        {/* <div className="my-4 bg-gray-600 h-[1px]"></div> */}

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
          <Link
            to="/overview"
            className="cursor-pointer p-2 hover:bg-[#33769B] rounded mt-1"
          >
            Overview
          </Link>
          <Link
            to="/Analytics"
            className="cursor-pointer p-2 hover:bg-[#33769B] rounded mt-1 active:bg-[#33769B] focus:bg-[#33769B]"
          >
            Analytics
          </Link>
          <Link
            to="/performance"
            className="cursor-pointer p-2 hover:bg-[#33769B] rounded mt-1"
          >
            Performance Metrics
          </Link>
        </div>

        <div className="my-4 bg-gray-600 h-[1px]"></div>

        <Link
          to="/profile"
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
        >
          <i className="bi bi-gear-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Settings
          </span>
        </Link>
        <Link
          to="/newProfile"
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
        >
          <i className="bi bi-gear-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            New Profile
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
          className="p-2.5 mt-3 flex items-center rounded px-4 duration-300 cursor-pointer hover:bg-[#33769B] text-white"
          onClick={handleLogout}
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
// import { BarChart, Wallet, Newspaper, BellRing, Paperclip, LogIn } from 'lucide-react'

// export default function Navbar() {
//   return (
//     <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
//       <a href="#">
//         <svg
//           width="40"
//           height="46"
//           viewBox="0 0 50 56"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
//             fill="black"
//           />
//         </svg>
//       </a>
//       <div className="mt-6 flex flex-1 flex-col justify-between">
//         <nav className="-mx-3 space-y-6 ">
//           <div className="space-y-3 ">
//             <label className="px-3 text-xs font-semibold uppercase text-gray-900">analytics</label>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="#"
//             >
//               <BarChart className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Dashboard</span>
//             </a>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="#"
//             >
//               <Wallet className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Sales</span>
//             </a>
//           </div>
//           <div className="space-y-3 ">
//             <label className="px-3 text-xs font-semibold uppercase text-gray-900">content</label>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="#"
//             >
//               <Newspaper className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Blogs</span>
//             </a>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="#"
//             >
//               <BellRing className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Notifications</span>
//             </a>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="#"
//             >
//               <Paperclip className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Checklists</span>
//             </a>
//           </div>
//         </nav>
//         <div className="mt-6">
//           <div className="rounded-lg bg-gray-100 p-3 ">
//             <h2 className="text-sm font-medium text-gray-800">New feature availabel!</h2>
//             <p className="mt-1 text-xs text-gray-500">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi
//               velit.
//             </p>
//             <img
//               className="mt-2 h-32 w-full rounded-lg object-cover"
//               src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80"
//               alt="Feature"
//             />
//           </div>
//           <div className="mt-6 flex items-center justify-between">
//             <a href="#" className="flex items-center gap-x-2">
//               <img
//                 className="h-7 w-7 rounded-full object-cover"
//                 src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
//                 alt="avatar"
//               />
//               <span className="text-sm font-medium text-gray-700">Dan Abromov</span>
//             </a>
//             <a
//               href="#"
//               className="rotate-180 text-gray-800 transition-colors duration-200 hover:text-gray-900"
//             >
//               <LogIn className="h-5 w-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </aside>
//   )
// }
