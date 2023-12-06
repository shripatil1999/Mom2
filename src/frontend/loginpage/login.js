import { React, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css'
import { Link } from 'react-router-dom';
function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className="body">
                <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-full md:pt-0 md:pb-0 lg:pt-0 lg:pb-32 relative h-full">
                    <div className="m-10 relative sm:relative md:absolute lg:absolute xl:absolute top-0 left-0">
                        <img className='w-60' src="/pump-logo-hd2.png" alt="" />

                    </div>
                    <div className="m-10 text-2xl text-center font-semibold text-gray-900  relative sm:relative md:absolute lg:absolute xl:absolute top-0 right-0">
                        <p className='logo drop-shadow'>Minutes of Meeting</p>

                    </div>
                    <div className="w-full bg-white rounded-lg drop-shadow-lg  md:mt-60 sm:max-w-lg xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign in
                            </h1>
                            <form className="space-y-4 md:space-y-6" method="POST">
                                <div className='flex items-center'>
                                    <label htmlFor="email" className="block mx-4 text-sm font-bold text-gray-900 ">Username</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-sm" placeholder="Email ID/ Mobile Number" required="" />
                                </div>
                                <div className='flex items-center'>
                                    <label htmlFor="password" className="block mx-4 text-sm font-bold text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                </div>
                                <div className="policy">
                                  <span className='font-medium text-xs' >By Continuing, you agree to: </span> <br></br>
                                  <span onClick={handleShow} className='font-medium text-xs cursor-pointer text-blue-600 hover:underline'>Our Conditions of Use and Privacy Notice</span>

                                </div>
                                <Modal style={{ marginTop: '10%' }}
                                    show={show} onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Conditions of use | Privacy Notice</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        ..............................<br />
                                        ..............................<br />
                                        ..............................<br />
                                        ..............................</Modal.Body>
                                    <Modal.Footer>
                                        <Button style={{ color: 'white', background: 'red' }} variant="danger" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button style={{ color: 'white' }} className='bg-sky-500' variant="primary" onClick={handleClose}>
                                            Ok
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <div className="login-btn flex justify-center">
                                    <Link to='/Home' className=" justify-center text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center ">
                                        Login
                                    </Link>
                                </div>


                                <div className="">
                                    <div className="flex items-start justify-center">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                        </div>
                                        <div className="ml-3 text-sm text-center">
                                            <label htmlFor="remember" className="text-black">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="forgot-password text-center m-3">
                                    <span className="text-sm  font-medium text-center text-primary-600 hover:underline cursor-pointer">Forgot password  </span><span>&nbsp;|&nbsp;</span><span className="text-sm font-medium text-center text-primary-600 hover:underline cursor-pointer"> Need Help ?</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <button type="button" className="focus:outline-none cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-5 py-2.5 m-10">Exit</button>
                    <footer className='flex flex-row text-white items-center relative bottom-0 cursor-pointer'>
                        <p className=' text-sm hover:underline hover:text-sky-600'>Disclaimer Policy </p> <p>&nbsp;|&nbsp;</p>
                        <p className='text-sm hover:underline hover:text-sky-600'>Contact Details </p> <p>&nbsp;|&nbsp;</p>
                        <p className='text-sm hover:underline hover:text-sky-600'>©PAPL 2021-2023</p>
                    </footer>
                </div>
            </section>
        </>
    );
}

export default Login;