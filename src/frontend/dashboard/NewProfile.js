// import React, { useState } from 'react';
// import { app } from '../../firebase';
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import GlobalLayout from "../utils/hoc/globalLayout";
// import "./profile.css";
// // import { auth } from "../../firebase";
// import { useAlert } from 'react-alert'
// import { useForm } from "react-hook-form";

// const NewProfile = ({ user }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm();

//   const [employeeID, setEmployeeID] = useState('');
//   const [name, setName] = useState('');
//   const [userID, setUserID] = useState('');
//   const [about, setAbout] = useState('');
//   const [department, setDepartment] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   // const userID = auth.currentUser;
//   const alert = useAlert()

//   const handleSave = async () => {

//     try {
//       if (!userID) {
//         setErrorMessage('User ID is required.');
//         setSuccessMessage('');
//         return;
//       }

//       const db = getFirestore(app);

//       // Add a new document in the "users" collection
//       await setDoc(doc(db, "Users", userID), {
//         employeeID,
//         name,
//         about,
//         department,
//         designation,
//         email,
//         password,
//         phone,
//       });
//       setEmployeeID("")
//       setName("")
//       setAbout("")
//       setDepartment("")
//       setDesignation("")
//       setEmail("")
//       setPassword("")
//       setPhone("")
//       setUserID("")
//      alert.success('Profile saved successfully!')

//     } catch (error) {
//       alert.error('Error saving profile. Please try again.');
//       console.error('Error saving profile:', error);
//     }
//   };

//   return (
//     <GlobalLayout>
//       <form action=""></form>
//       <div className="max-w-md mx-auto mt-5 p-4 bg-white shadow-md rounded-md">
//         <label className="block mb-1 font-semibold text-gray-600">Employee ID:</label>

//         <label className="block mb-1 font-semibold text-gray-600">Name:</label>

//         <input type="text" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500" />
//         <label className="block mb-1 font-semibold text-gray-600">User ID:</label>

//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500" />
//         <label className="block mb-1 font-semibold text-gray-600">About:</label>

//         <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500" />
//         <label className="block mb-1 font-semibold text-gray-600">Department:</label>

//         <textarea value={about} onChange={(e) => setAbout(e.target.value)} className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"></textarea>
//         <label className="block mb-1 font-semibold text-gray-600">Designation:</label>

//         <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500" />
//         <label className="block mb-1 font-semibold text-gray-600">Email:</label>

//         <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500" />
//         <label className="block mb-1 font-semibold text-gray-600">Password:</label>

//         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500" />
//         <label className="block mb-1 font-semibold text-gray-600">Phone:</label>
//         <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Save</button>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500" />

//         {successMessage && <p className="text-green-500">{successMessage}</p>}
//         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500" />
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       </div>
//     </GlobalLayout>
//   );
// };

// export default NewProfile;

import React from "react";
import { app } from "../../firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import GlobalLayout from "../utils/hoc/globalLayout";
import "./profile.css";
// import { auth } from "../../firebase";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";

const NewProfile = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const userID = auth.currentUser;
  const alert = useAlert();
  var form = document.getElementById("myForm");

  const onSubmit = async (data) => {
    try {
      const db = getFirestore(app);

      // Add a new document in the "users" collection
      await setDoc(doc(db, "Users", data.email), {
        employeeID: data.employeeID,
        name: data.name,
        // userID: data.userID,
        about: data.about,
        department: data.department,
        designation: data.designation,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });


      form.reset();

      alert.success("Profile saved successfully!");
    } catch (error) {
      alert.error("Error saving profile. Please try again.");
      console.error("Error saving profile:", error);
    }
  };

  return (
    <GlobalLayout>
      <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center font-bold text-2xl">Create New Profile</h1>
        <div className="max-w-lg mx-auto mt-5 p-4 bg-white shadow-lg rounded-md">
          {/* <label className="block mb-1 font-semibold text-gray-600">
            User ID:
          </label>
          <input
            type="text"
            className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"
            {...register("userID", {
              required: "User ID is Required",
            })}
          />
          <p className="text-red-500 font-semibold mb-4 -mt-3">
            {errors.userID?.message && (
              <span>
                <i className="bi bi-exclamation-circle mr-2"></i>{" "}
                {errors.userID?.message}
              </span>
            )}
          </p> */}

          <label className="block mb-1 font-semibold text-gray-600">
            Employee ID:
          </label>
          <input
            type="text"
            className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"

            {...register("employeeID", {
              required: "Employee ID is Required",
              // minLength: {
              //   value: 4,
              //   message: "Ma 4 characters required.",
              // },
            })}
          />
          <p className="text-red-500 font-semibold mb-4 -mt-3">
            {errors.employeeID?.message && (
              <span>
                <i className="bi bi-exclamation-circle mr-2"></i>{" "}
                {errors.employeeID?.message}
              </span>
            )}
          </p>

          <label className="block mb-1 font-semibold text-gray-600">
            Name:
          </label>
          <input
            type="text"
            className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"

            {...register("name", {
              required: "Name is Required",
              minLength: {
                value: 4,
                message: "Minimum 4 characters required.",
              },
            })}
          />
          <p className="text-red-500 font-semibold mb-4 -mt-3">
            {errors.name?.message && (
              <span>
                <i className="bi bi-exclamation-circle mr-2"></i>{" "}
                {errors.name?.message}
              </span>
            )}
          </p>



          <label className="block mb-1 font-semibold text-gray-600">
            About:
          </label>
          <textarea
            className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"

            {...register("about", {
              required: "About is required",
              minLength: {
                value: 10,
                message: "Minimum 5 words are required required.",
              },
            })}
          />
          <p className="text-red-500 font-semibold mb-4 -mt-3">
            {errors.about?.message && (
              <span>
                <i className="bi bi-exclamation-circle mr-2"></i>{" "}
                {errors.about?.message}
              </span>
            )}
          </p>

          <label className="block mb-1 font-semibold text-gray-600">
            Department:
          </label>
          <input
            type="text"
            className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"

            {...register("department", {
              required: "Department is Required",
              // minLength: {
              //   value: 4,
              //   message: "Minimum 4 characters required.",
              // },  
            })}
          />
          <p className="text-red-500 font-semibold mb-4 -mt-3">
            {errors.department?.message && (
              <span>
                <i className="bi bi-exclamation-circle mr-2"></i>{" "}
                {errors.department?.message}
              </span>
            )}
          </p>

          <label className="block mb-1 font-semibold text-gray-600">
            Designation:
          </label>
          <input
            type="text"
            className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"
            {...register("designation", {
              required: "Designation is Required",
              // minLength: {
              //   value: 4,
              //   message: "Minimum 4 characters required.",
              // },
            })}
          />
          <p className="text-red-500 font-semibold mb-4 -mt-3">
            {errors.designation?.message && (
              <span>
                <i className="bi bi-exclamation-circle mr-2"></i>{" "}
                {errors.designation?.message}
              </span>
            )}
          </p>

          <label className="block mb-1 font-semibold text-gray-600">
            Email:
          </label>
          <input
            type="text"
            className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"
            {...register("email", {
              required: "Email address is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          <p className="text-red-500 font-semibold mb-4 -mt-3">
            {errors.email?.message && (
              <span>
                <i className="bi bi-exclamation-circle mr-2"></i>{" "}
                {errors.email?.message}
              </span>
            )}
          </p>

          <label className="block mb-1 font-semibold text-gray-600">
            Password:
          </label>
          <input
            type="password"
            className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"

            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 4,
                message: "Minimum 4 characters required.",
              },
            })}
          />
          <p className="text-red-500 font-semibold mb-4 -mt-3">
            {errors.password?.message && (
              <span>
                <i className="bi bi-exclamation-circle mr-2"></i>{" "}
                {errors.password?.message}
              </span>
            )}
          </p>

          <label className="block mb-1 font-semibold text-gray-600">
            Phone:
          </label>
          <input
            type="text"
            className="w-full py-2 px-3 border border-gray-400 rounded-md mb-3 focus:outline-none focus:border-blue-500"

            {...register("phone", {
              required: "Phone number required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Invalid phone number format",
              },
              // maxLength: {
              //   value: 10,
              //   message: "Maximum 10 numbers required.",
              // },
            })}
          />
          <p className="text-red-500 font-semibold mb-4 -mt-3">
            {errors.phone?.message && (
              <span>
                <i className="bi bi-exclamation-circle mr-2"></i>{" "}
                {errors.phone?.message}
              </span>
            )}
          </p>

          <div className="flex justify-center">
            <input
              type="submit"
              value="Submit"
              className="py-2 px-3 rounded bg-[#252c48] font-medium text-white hover:bg-[#3a4675]"
            />
          </div>
        </div>
      </form>
    </GlobalLayout>
  );
};

export default NewProfile;
