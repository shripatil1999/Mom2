import React, { useState, useEffect } from "react";
import GlobalLayout from "../utils/hoc/globalLayout";
import { Tab } from "@headlessui/react";
import "./profile.css";
import {
  app,
  auth,
  upload,
  // db
} from "../../firebase";
import {
  // getDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import ProfileData from "./ProfileData";
import { useForm } from "react-hook-form";
import { useAlert } from "react-alert";
import { updateProfile } from "firebase/auth";
// import { useAuthState } from 'react-firebase-hooks/auth';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // const [name, setName] = useState("");
  // const [about, setAbout] = useState("");
  // const [phone, setPhone] = useState("");
  const [photoURL, setPhotoURL] = useState("/images/icons/user.png");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;
  // const [user] = useAuthState(auth);

  // Access UID
  // const uid = user ? user.uid : null;
  const alert = useAlert();

  var loadFile = (e) => {
    var ctrlImage = document.getElementById("output");
    ctrlImage.src = URL.createObjectURL(e.target.files[0]);
    // setPhoto(image.src)
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
    // if(profileFetched===true){

    // }
  };
  useEffect(() => {
    if (user && user.photoURL) {
      setPhotoURL(user.photoURL);
    }

    // Set initial values for the form fields
    setValue("name", user.displayName || "");
    setValue("about", ""); // Set default value for 'about' field
    setValue("phone", ""); // Set default value for 'phone' field
  }, [user, setValue]);

  //profile Pic update
  const updateProfilePic = () => {
    if (photo) {
      upload(photo, user, setLoading);
    } else {
      alert.error("Please select the photo");
    }
  };

  // const getUserData = async () => {
  //   try {
  //     const userRef = doc(db, 'Users', uid);
  //     const snapshot = await getDoc(userRef);

  //     if (snapshot && snapshot.exists()) {
  //       const userData = snapshot.data();
  //       console.log('User Data:', userData);
  //       // Use userData as needed
  //     } else {
  //       console.log('User not found');
  //     }
  //   } catch (error) {
  //     console.error('Error getting user data:', error);
  //   }
  // };
  // This is Shridhar Patil, from Belgaum. Working as Software Developer at PAPL, Bangalore.
  const onSubmit = async (data) => {
    try {
      const db = getFirestore(app);
      const userDocRef = doc(db, "Users", user.uid);

      await updateDoc(userDocRef, {
        name: data.name,
        about: data.about,
        phone: data.phone,
      });
      updateProfile(user, {
        displayName: data.name,
      });
      console.log(user.displayName);
      alert.success("Profile updated successfully!");

      // getUserData();
    } catch (error) {
      alert.error("Error updating profile. Please try again.");
      console.error("Error updating profile:", error);
    }
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
                <input id="file" type="file" onChange={loadFile} required />
                <img src={photoURL} id="output" alt=" " width="200" />
              </div>
            </div>
            <button
              disabled={loading}
              onClick={updateProfilePic || !photo}
              className="py-2 px-3 rounded bg-[#252c48] font-medium text-white hover:bg-[#3a4675]"
            >
              Update Profile
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4">
              <label
                htmlFor="full-name"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                className={classNames(
                  "appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white",
                  { "border-red-500": errors.name }
                )}
                placeholder="XYZ"
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
              <label
                htmlFor="phone"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Phone No.
              </label>
              <input
                type="tel"
                id="phone"
                className={classNames(
                  "appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                  // { "border-red-500": errors.phone }
                )}
                placeholder="9876543210"
                {...register("phone", {
                  required: "Phone number required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Invalid phone number format",
                  },
                  maxLength: {
                    value: 10,
                    message: "Maximum 10 numbers required.",
                  },
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
              <label
                htmlFor="about"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                About
              </label>
              <textarea
                id="about"
                rows={3}
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Write something About you."
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

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Update"
                  className="py-2 px-3 rounded bg-[#252c48] font-medium text-white hover:bg-[#3a4675]"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-2/3">
          <ProfileData />
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
