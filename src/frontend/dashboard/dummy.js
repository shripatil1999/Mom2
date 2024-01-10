
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
    to="/projects"
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