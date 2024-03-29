import React, { useState, useEffect } from 'react';
import "./profile.css";
import { app, auth,} from '../../firebase';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

export default function ProfileData() {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [phone, setPhone] = useState('');
    const [employeeID, setEmployeeID] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');  
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
                setAbout(userData.about || '');
                console.log("Fetched Data")
              }
            });
          

            return () => unsubscribe();
          }, [user.email]);


    return (

        <div className="details p-4 card shadow mr-3">
            <p className="font-bold text-lg">Personal Information: </p>
            <div className="flex gap-2 mt-3">
                <p className="text-gray-600">
                    {" "}
                    <span className="font-semibold text-gray-900"> Name: </span>
                    {name}
                </p>
            </div>
            <div className="flex mt-3">
                <p className="text-gray-600">
                    {" "}
                    <span className="font-semibold text-gray-900">
                        Employee ID:
                    </span>{" "}
                    {employeeID}
                </p>{" "}
                <p className="m-auto text-gray-600">
                    {" "}
                    <span className="font-semibold text-gray-900">
                        Company Email:{" "}
                    </span>{" "}
                    {email}
                </p>
            </div>
            <div className="flex mt-3">
                <p className="text-gray-600">
                    {" "}
                    <span className="font-semibold text-gray-900">
                        Contact:
                    </span>{" "}
                    {phone}
                </p>{" "}
                <p className="m-auto text-gray-600">
                    {" "}
                    <span className="font-semibold text-gray-900">
                        Department:{" "}
                    </span>{" "}
                    {department}
                </p>
            </div>
            <p className="mt-4 text-gray-600">
                {" "}
                <span className="font-semibold text-gray-900"> About Me: </span>
                {about}
            </p>
        </div>
    )
}
