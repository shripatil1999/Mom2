import React from "react";
import GlobalLayout from "../utils/hoc/globalLayout";
import { Tab } from "@headlessui/react";
import "./profile.css";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Profile = () => {
    var loadFile = (event) => {
        var image = document.getElementById("output");
        image.src = URL.createObjectURL(event.target.files[0]);
    };

    return (
        <GlobalLayout>
            <div className="flex gap-3">
                <div className="w-1/3">
                    <div className="card shadow flex flex-col gap-4 items-center p-4">
                        <div className="img flex justify-center mt-2">
                            <div className="profile-pic ">
                                <label className="-label" htmlFor="file">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                        />
                                    </svg>

                                    <span>Change Image</span>
                                </label>
                                <input id="file" type="file" onChange={loadFile} />
                                <img
                                    src="/images/icons/user.png"
                                    id="output"
                                    alt=" "
                                    width="200"
                                />
                            </div>
                        </div>
                        <form className="w-full px-4" action="">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="full-name"
                            >
                                Full Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="full-name"
                                type="text"
                                placeholder="XYZ"
                            />
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="phone"
                            >
                                Phone No.
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="phone"
                                type="tel"
                                placeholder="9876543210"
                            />
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="email"
                                type="email"
                                placeholder="example@email.com"
                            />
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="about"
                            >
                                About
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="email"
                                type="text"
                                rows={3}
                                placeholder="Write something About you."
                            />
                            <div className="flex justify-center">
                                <button
                                    className="py-2 px-3 rounded bg-[#252c48] font-medium text-white hover:bg-[#3a4675]"
                                //  type="submit"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="details p-4 card shadow mr-3">
                        <p className="font-bold text-lg">Personal Information: </p>
                        <div className="flex gap-2 mt-3">
                            <p className="text-gray-600">
                                {" "}
                                <span className="font-semibold text-gray-900"> Name: </span>
                                {"Mr. XYZ"}
                            </p>
                        </div>
                        <div className="flex mt-3">
                            <p className="text-gray-600">
                                {" "}
                                <span className="font-semibold text-gray-900">
                                    Employee ID:
                                </span>{" "}
                                {"PAPL0018"}
                            </p>{" "}
                            <p className="m-auto text-gray-600">
                                {" "}
                                <span className="font-semibold text-gray-900">
                                    Company Email:{" "}
                                </span>{" "}
                                {"xyz@pumpacademy.in"}
                            </p>
                        </div>
                        <div className="flex mt-3">
                            <p className="text-gray-600">
                                {" "}
                                <span className="font-semibold text-gray-900">
                                    Contact:
                                </span>{" "}
                                {"9876543210"}
                            </p>{" "}
                            <p className="m-auto text-gray-600">
                                {" "}
                                <span className="font-semibold text-gray-900">
                                    Department:{" "}
                                </span>{" "}
                                {"Software Development"}
                            </p>
                        </div>
                        <p className="mt-4 text-gray-600">
                            {" "}
                            <span className="font-semibold text-gray-900"> About Me: </span>
                            {
                                "Hello, This is Mr. XYZ. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, necessitatibus. Placeat impedit vero fugiat sequi dolores, "
                            }
                        </p>
                    </div>
                    <div className="tab card shadow mr-3 mt-3">
                        <div className="w-full max-w-xl px-3 py-6 sm:px-0">
                            <Tab.Group>
                                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/10 p-1">
                                    <Tab
                                        className={({ selected }) =>
                                            classNames(
                                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                                selected
                                                    ? "bg-white text-blue-700 shadow"
                                                    : "text-[#252c48] hover:bg-red/[0.12] hover:text-blue-700"
                                            )
                                        }
                                    >
                                        About
                                    </Tab>
                                    {/* <Tab
                                        className={({ selected }) =>
                                            classNames(
                                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                                selected
                                                    ? "bg-white text-blue-700 shadow"
                                                    : "text-[#252c48] hover:bg-red/[0.12] hover:text-blue-700"
                                            )
                                        }
                                    >
                                        Projects
                                    </Tab> */}
                                    {/* <Tab
                                        className={({ selected }) =>
                                            classNames(
                                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                                selected
                                                    ? "bg-white text-blue-700 shadow"
                                                    : "text-[#252c48] hover:bg-red/[0.12] hover:text-blue-700"
                                            )
                                        }
                                    >
                                        Performance
                                    </Tab> */}
                                    <Tab
                                        className={({ selected }) =>
                                            classNames(
                                                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                                                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                                selected
                                                    ? "bg-white text-blue-700 shadow"
                                                    : "text-[#252c48] hover:bg-red/[0.12] hover:text-blue-700"
                                            )
                                        }
                                    >
                                        Change Password
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels className="mt-3">
                                    <Tab.Panel className="card shadow p-3">Content 1</Tab.Panel>
                                    {/* <Tab.Panel className="card shadow p-3">
                                        <div className="parent rounded w-fit">
                                            <div className="child p-3">
                                                <span>
                                                    Minutes of Meeting
                                                </span>
                                            </div>
                                        </div>
                                    </Tab.Panel> */}

                                    {/* <Tab.Panel className="card shadow p-3">Content 3</Tab.Panel> */}
                                    <Tab.Panel className="card shadow p-3">
                                        <form className="w-full px-4" action="">
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
                                                htmlFor="curr_pass"
                                            >
                                                Current Password
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-4 leading-tight focus:outline-none focus:bg-white"
                                                id="curr_pass"
                                                type="password"
                                                placeholder="****"
                                            />
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="new_pass"
                                            >
                                                New Password
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-4 leading-tight focus:outline-none focus:bg-white"
                                                id="new_pass"
                                                type="password"
                                                placeholder="****"
                                            />
                                            <label
                                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="confirm_pass"
                                            >
                                                Confirm Password
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-4 leading-tight focus:outline-none focus:bg-white"
                                                id="confirm_pass"
                                                type="password"
                                                placeholder="****"
                                            />
                                            <div className="flex justify-center">
                                                <button
                                                    className="py-2 px-3 rounded bg-[#252c48] font-medium text-white hover:bg-[#3a4675]"
                                                //  type="submit"
                                                >
                                                    Reset Password
                                                </button>
                                            </div>
                                        </form>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
};

export default Profile;
