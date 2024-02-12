import React, { useState } from 'react';
import { app } from '../../firebase';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import GlobalLayout from "../utils/hoc/globalLayout";
import "./profile.css";
// import { auth } from "../../firebase";
import { useAlert } from 'react-alert'


const NewProfile = ({ user }) => {
  const [employeeID, setEmployeeID] = useState('');
  const [name, setName] = useState('');
  const [userID, setUserID] = useState('');
  const [about, setAbout] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const userID = auth.currentUser;
  const alert = useAlert()

  const handleSave = async () => {
    try {
      if (!userID) {
        setErrorMessage('User ID is required.');
        setSuccessMessage('');
        return;
      }

      const db = getFirestore(app);

      // Add a new document in the "users" collection
      await setDoc(doc(db, "Users", userID), {
        employeeID,
        name,
        about,
        department,
        designation,
        email,
        password,
        phone,
      });
      setEmployeeID("")
      setName("")
      setAbout("")
      setDepartment("")
      setDesignation("")
      setEmail("")
      setPassword("")
      setPhone("")
      setUserID("")
     alert.success('Profile saved successfully!')

    } catch (error) {
      alert.error('Error saving profile. Please try again.');
      console.error('Error saving profile:', error);
    }
  };

  return (
    <GlobalLayout>
      <div className="max-w-md mx-auto mt-5 p-4 bg-white shadow-md rounded-md">
        <label className="block mb-1 font-semibold text-gray-600">Employee ID:</label>
        <input type="text" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} className="w-full py-2 px-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500" />

        <label className="block mb-1 font-semibold text-gray-600">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full py-2 px-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500" />

        <label className="block mb-1 font-semibold text-gray-600">User ID:</label>
        <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} className="w-full py-2 px-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500" />

        <label className="block mb-1 font-semibold text-gray-600">About:</label>
        <textarea value={about} onChange={(e) => setAbout(e.target.value)} className="w-full py-2 px-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500"></textarea>

        <label className="block mb-1 font-semibold text-gray-600">Department:</label>
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full py-2 px-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500" />

        <label className="block mb-1 font-semibold text-gray-600">Designation:</label>
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} className="w-full py-2 px-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500" />

        <label className="block mb-1 font-semibold text-gray-600">Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-2 px-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500" />

        <label className="block mb-1 font-semibold text-gray-600">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-2 px-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500" />

        <label className="block mb-1 font-semibold text-gray-600">Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full py-2 px-3 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-blue-500" />
        <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Save</button>

        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </GlobalLayout>
  );
};

export default NewProfile;
