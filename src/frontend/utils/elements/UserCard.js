import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { app, auth,} from '../../../firebase';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

const UserCard = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');  
  const [designation, setDesignation]=useState('')
  const user = auth.currentUser;

        // Fetch user data
   
        useEffect(() => {
          const db = getFirestore(app);
          const userDocRef = doc(db, 'Users', user.email);
          const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              setName(userData.name || ''); 
              setEmployeeID(userData.employeeID || '');
              setEmail(userData.email || '');
              setPhone(userData.phone || '');
              setDepartment(userData.department || '');
              setDesignation(userData.designation || '');
              console.log("Fetched Data")
            }

          });
        

          return () => unsubscribe();
        }, [user.email]);



  return (
    <div>
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={props.userPic}
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {name}
            </h3>
            <div className="text-center text-gray-500 text-xs font-bold">
            <p>{designation}</p>
            </div>
            <table className="text-xs my-3">
              <tbody>
              <tr>
                  <td className="px-1 py-2 border-0 text-gray-700 font-bold">
                    Employee ID:
                  </td>
                  <td className="px-2 border-0 py-2">{employeeID}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 border-0 text-gray-700 font-bold">
                    Department:
                  </td>
                  <td className="px-2 border-0 py-2">{department}</td>
                </tr>
                <tr>
                  <td className="px-2 border-0 py-2 text-gray-700 font-bold">
                    Phone:
                  </td>
                  <td className="px-2 border-0 py-2">{phone}</td>
                </tr>
                <tr>
                  <td className="px-2 border-0 py-2 text-gray-700 font-bold">
                    Email:
                  </td>
                  <td className="px-2 border-0 py-2 ">{email}</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center w-full">
              <Link
                to="/profile"
                className="text-center shadow-lg font-semibold border rounded-md border-black px-3 py-2 bg-slate-600 hover:bg-slate-500"
              >
                <p className="text-white hover:text-green-500"> View Profile</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
