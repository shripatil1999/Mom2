import React from 'react'
import GlobalLayout from '../utils/hoc/globalLayout'
import Dropdown from '../utils/elements/dropdown';
import TaskPieChart from '../utils/elements/Taskpiechart';
import Prioritybarchart from '../utils/elements/Prioritybarchart';
import Accordion from '../utils/elements/Accordion';
import SearchFilter from '../utils/elements/SearchFilter';

const Home = () => {

    const Username = 'Mr. XYZ'




    return (
        <GlobalLayout>
            <div className="upperFeature mt-4 flex flex-row justify-between">
                <p className='font-bold'>Welcome, {Username}</p>
                <SearchFilter />
            </div>
            <div className="shadow-lg mr-6">
                <div style={{ border: '1px solid', padding: '1.2%', }} className="taskFeature mt-5 flex justify-between">
                    <p className='font-bold text-xl'>Tasks</p>
                    <div className="projectDropdown flex flex-row flex-wrap">
                        <p className='font-bold text-lg mx-4'>Project Name: </p>
                        <div className="dropdown me-5">
                            <Dropdown project1="Project Number 1" project2="Project Number 2" project3="Project Number 3" />
                        </div>
                    </div>
                </div>
                <div style={{ border: '1px solid', borderTop: 'none', padding: '1.2%', }} className="Charts ">
                    <div className="TaskList flex justify-start flex-wrap">
                        <div className='flex items-center'><div className='w-3 h-3 rounded bg-yellow-500 mx-2'></div>Ongoing</div>
                        <div className='flex items-center'><div className='w-3 h-3 rounded bg-red-600 mx-2'></div>Overdue</div>
                        <div className='flex items-center'><div className='w-3 h-3 rounded bg-green-500 mx-2'></div> Completed</div>
                        <div className='flex items-center'><div className='w-3 h-3 rounded bg-blue-600 mx-2'></div>Not Started </div>


                    </div>
                    <div style={{ display: "flex", marginLeft: "0px", overflow: "hidden" }}>
                        <div className="flex justify-between mt-3" style={{ justifyContent: "left", overflow: "hidden", marginLeft: "-150px" }}>
                            <TaskPieChart />
                        </div><div >
                            <Prioritybarchart />
                        </div>
                    </div>
                    <div className="TaskDetails mt-5">
                        <Accordion />
                    </div>
                    
                </div>
            </div>
        </GlobalLayout >
    )
}

export default Home


