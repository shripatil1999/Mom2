import { React, useState } from "react";
import DatePicker from "react-datepicker";



const SubtaskForm = () => {

    const [startDate, setStartDate] = useState(new Date("2024/02/01"));
    const [endDate, setEndDate] = useState(new Date("2024/02/02"));


    return (
        <form action="" className="flex flex-col gap-4 p-2">
            <div className="">
                <label
                    htmlFor="taskname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Task Name
                </label>
                <div className="flex rounded-md shadow-sm border-black ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md mt-2">
                    <input
                        type="text"
                        name="taskname"
                        id="taskname"
                        autoComplete="taskname"
                        className="block flex-1 border-1 bg-transparent rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=" "
                    />
                </div>
            </div>
            <div className="">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    Description
                </label>

                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md mt-2">
                    <textarea
                        id="description"
                        name="description"
                        rows={1}
                        className="block flex-1 border-1 bg-transparent rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                </div>
            </div>

            <p className='font-bold'>Task Information</p>

            <div className="">
                <label
                    htmlFor="User"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    User
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md mt-2">
                    <input
                        type="text"
                        name="user"
                        id="user"
                        autoComplete="user"
                        className="block flex-1 border-1 bg-transparent rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=" "
                    />
                </div>
            </div>
            <div className="">
                <label
                    htmlFor="Supporter"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Supporter
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md mt-2">
                    <input
                        type="text"
                        name="Supporter"
                        id="Supporter"
                        autoComplete="Supporter"
                        className="block flex-1 border-1 bg-transparent rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder=" "
                    />
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between">
            
                    <label
                        htmlFor="StartDate"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        StartDate
                    </label>
                    <label
                        htmlFor="StartDate"
                        className="block text-sm font-medium leading-6 text-gray-900 mr-auto ml-auto"
                    >
                        End Date
                    </label>
                </div>
                <div className="flex w-1/2">
                    <DatePicker
                        showIcon
                        id="StartDate"
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        icon="bi bi-calendar-date-fill"
                    />


                    <DatePicker
                        showIcon
                        id="EndDate"
                        dateFormat="dd/MM/yyyy"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        icon="bi bi-calendar-date-fill"
                    />
                </div>
            </div>

            <div className="">
                <label
                    htmlFor="Supporter"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Priority
                </label>
                <div className="flex w-fit p-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md mt-2">
                <select
                  id="priority"
                  name="priority"
                  className="w-fit focus:outline-none bg-white focus:border-black text-black rounded p-2 md:px-3 py-0 md:py-1 tracking-wider"
                >
                  <option value="All" defaultValue="0">
                    Low
                  </option>
                  <option value="">Medium</option>
                  <option value="">High</option>
                </select>
                </div>
            </div>
        </form>
    )
}

export default SubtaskForm
