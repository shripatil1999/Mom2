import React from 'react'
import './Accordion.css'
const Accordion = () => {
    return (
        <div>
            <div className="">
                <div className="m-8 overflow-hidden">
                    {/* <!-- accordion-tab  --> */}
                    <div className="group outline-none mt-2 accordion-section border rounded border-black"  tabIndex="1">
                        <div className="group bg-gray-200 flex justify-between rounded px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="group-focus:text-black transition ease duration-500 font-bold">
                                Overdue Task
                            </div>
                            <div className="h-8 w-8 border border-black rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                               <i className="bi bi-chevron-down"></i>
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 rounded bg-white px-4 overflow-hidden ease duration-500">
                            <p className="p-2 text-black text-justify">
                            The Task Details will be shown here...!!!!
                            </p>
                        </div>
                    </div>
                    {/* <!-- accordion-tab -->
     <!-- accordion-tab  --> */}
                    <div className="group outline-none accordion-section mt-2 border rounded border-black" tabIndex="2">
                    <div className="group bg-gray-200 flex justify-between px-4 py-3 rounded items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="group-focus:text-black transition ease duration-500 font-bold">
                            In Progress Task
                            </div>
                            <div className="h-8 w-8 border border-black rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                               <i className="bi bi-chevron-down"></i>
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 rounded bg-white px-4 overflow-hidden ease duration-500 ">
                            <p className="p-2 text-black text-justify">
                           The Task Details will be shown here...!!!!
                            </p>
                        </div>
                    </div>
                    {/* <!-- accordion-tab -->
     <!-- accordion-tab  --> */}
                    <div className="group outline-none accordion-section border mt-2 rounded border-black" tabIndex="3">
                    <div className="group bg-gray-200 flex justify-between px-4 rounded py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative">
                            <div className="group-focus:text-black transition ease duration-500 font-bold">
                                 Preceding Sessions
                            </div>
                            <div className="h-8 w-8 border border-black rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                               <i className="bi bi-chevron-down"></i>
                            </div>
                        </div>
                        <div className="group-focus:max-h-screen max-h-0 rounded bg-white px-4 overflow-hidden ease duration-500">
                            <p className="p-2 text-black text-justify">
                            The Task Details will be shown here...!!!!
                            </p>
                        </div>
                    </div>
                    {/* <!-- accordion-tab --> */}
                </div>
            </div>


        </div>
    )
}

export default Accordion
