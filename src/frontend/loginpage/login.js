import { React, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import { auth } from "../../firebase";
import {
    // setPersistence,
    signInWithEmailAndPassword,
    // browserSessionPersistence
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert'
// import { Link } from 'react-router-dom';

// import { dialog } from '@material-tailwind/react';
function Login() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const alert = useAlert()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var dialog = document.getElementById("myDialog");
    const showDialog = () => {
        dialog.showModal();
    };
    const hideDialog = () => {
        dialog.close();
    };

    const signIn = (e) => {
        e.preventDefault();
        if (agree === true) {
            console.log(email);
            console.log(password);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    navigate("/home");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            //   alert("Please Accept the Terms & Condition");
            alert.error('Please Accept the Terms & Condition !!')
            //   alert.show("Oh look, an alert!");   //For Just normal Alert
            //   alert.success("It's ok now!"); // For Success Alert

        }
    };
    // setPersistence(auth, browserSessionPersistence)
    //     .then(() => {
    //         // Existing and future Auth states are now persisted in the current
    //         // session only. Closing the window would clear any existing state even
    //         // if a user forgets to sign out.
    //         // ...
    //         // New sign-in will be persisted with session persistence.
    //         return signInWithEmailAndPassword(auth, email, password);
    //     })
    //     .catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log("err1: " + errorCode)
    //         console.log("err2: " + errorMessage)
    //     });
    // // [END auth_set_persistence_session_modular]
    return (
        <>
            <section className="body">
                <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-full md:pt-0 md:pb-0 lg:pt-0 lg:pb-40 relative h-full">
                    <div className="m-10 relative sm:relative md:absolute lg:absolute xl:absolute top-0 left-0">
                        <img className="w-60" src="/pump-logo-hd2.png" alt="" />
                    </div>
                    <div className="mt-10 text-2xl text-center font-semibold text-gray-900  relative sm:relative ">
                        <p className="logo drop-shadow">Minutes of Meeting</p>
                    </div>
                    <div className="m-4 text-2xl text-center font-semibold text-gray-900  relative sm:relative md:absolute lg:absolute xl:absolute top-0 right-0">
                        <img className="w-12 mx-auto" src="/ipumpnet.png" alt="" />
                        <p className="logo drop-shadow"><span>iPUMP</span><span className="text-black">NET</span></p>
                    </div>
                    <div className="w-full bg-white rounded-lg drop-shadow-lg  md:mt-24 sm:max-w-lg xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign in
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={signIn}>
                                <div className="flex items-center">
                                    <label
                                        htmlFor="email"
                                        className="block mx-4 text-sm font-bold text-gray-900 "
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-sm"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email ID/ Mobile Number"
                                        required=""
                                    />
                                </div>
                                <div className="flex items-center">
                                    <label
                                        htmlFor="password"
                                        className="block mx-4 text-sm font-bold text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required=""
                                    />
                                </div>
                                <div className="policy">
                                    <span className="font-medium text-xs">
                                        By Continuing, you agree to:{" "}
                                    </span>{" "}
                                    <br></br>
                                    <span
                                        onClick={handleShow}
                                        className="font-medium text-xs cursor-pointer text-blue-600 hover:underline"
                                    >
                                        Our Conditions of Use and Privacy Notice
                                    </span>
                                </div>
                                <Modal
                                    style={{ marginTop: "10%" }}
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            Conditions of use | Privacy Notice
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        ..............................
                                        <br />
                                        ..............................
                                        <br />
                                        ..............................
                                        <br />
                                        ..............................
                                    </Modal.Body>
                                    <div className="flex items-center h-5 p-3">
                                        <input
                                            id="Agree"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border mr-2 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                            onChange={(e) => setAgree(e.target.checked)}
                                            required=""
                                        />

                                        <label htmlFor="Agree" className="text-black">
                                            I Agree
                                        </label>
                                    </div>
                                    <Modal.Footer>
                                        <Button
                                            style={{ color: "white", background: "red" }}
                                            variant="danger"
                                            onClick={handleClose}
                                        >
                                            Close
                                        </Button>
                                        <Button
                                            style={{ color: "white" }}
                                            className="bg-sky-500"
                                            variant="primary"
                                            onClick={handleClose}
                                        >
                                            OK
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <div className="login-btn flex justify-center">
                                    <button
                                        type="submit"
                                        className=" justify-center text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center "
                                    >
                                        Login
                                    </button>
                                </div>

                                <div className="">
                                    <div className="flex items-start justify-center">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm text-center">
                                            <label htmlFor="remember" className="text-black">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="forgot-password flex justify-center text-center m-3">
                                        <p className="text-sm font-medium text-center text-primary-600 hover:underline cursor-pointer">
                                            Forgot password{" "}
                                        </p>
                                        <span>&nbsp;|&nbsp;</span>
                                        <span className="text-sm font-medium text-center text-primary-600 hover:underline cursor-pointer">
                                            {" "}
                                            Need Help ?
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="focus:outline-none cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 m-10"
                    >
                        Exit
                    </button>
                    <footer className="flex flex-row text-white items-center relative bottom-0 cursor-pointer">
                        <p
                            onClick={showDialog}
                            className=" text-sm hover:underline hover:text-sky-600"
                        >
                            Disclaimer Policy{" "}
                        </p>{" "}
                        <p>&nbsp;|&nbsp;</p>
                        <dialog id="myDialog" className="p-5">
                            <p className="font-bold text-2xl">Disclaimer Policy</p>
                            <ul className="mb-3 leading-8">
                                <li className="mt-3">
                                    1. The "Minutes of Meetings" application is a tool designed
                                    solely for recording and organizing meeting minutes.
                                </li>
                                <li>
                                    {" "}
                                    2. All data entered into the application is considered
                                    confidential and will not be shared or accessed by any third
                                    parties.
                                </li>
                                <li>
                                    {" "}
                                    3. Users are responsible for maintaining the security of their
                                    account credentials and are encouraged to use strong, unique
                                    passwords.
                                </li>
                                <li>
                                    {" "}
                                    4. The application's developers are not liable for any loss of
                                    data or unauthorized access resulting from user negligence.
                                </li>
                                <li>
                                    {" "}
                                    5. By using the application, users agree to abide by its terms
                                    and conditions outlined in this disclaimer.
                                </li>
                            </ul>
                            {/* <div className="flex justify-center"> */}
                            <button
                                type="button"
                                onClick={hideDialog}
                                className="focus:outline-none cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-3 py-2 mt-10"
                            >
                                Close
                            </button>
                            {/* </div> */}
                        </dialog>
                        <p className="text-sm hover:underline hover:text-sky-600">
                            Contact Details{" "}
                        </p>{" "}
                        <p>&nbsp;|&nbsp;</p>
                        <a
                            href="http://www.pumpacademy.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm hover:underline hover:text-sky-600"
                        >
                            ©PAPL 2021-2023
                        </a>
                    </footer>
                </div>
            </section>
        </>
    );
}

export default Login;
