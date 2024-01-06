import React from "react";
import GlobalLayout from "../utils/hoc/globalLayout";

const HelpSupport = () => {
  let AppCurrentStatus = "Under Construction";

  return (
    <GlobalLayout>
      <div
        style={{
          boxShadow:
            "rgba(15, 0, 0, 0.1) -2px -1px 24px 9px, rgba(0, 0, 0, 0.3) 14px 10px 21px -5px",
          borderRadius: "10px",
        }}
        className="bg-[#e3f2fd21]  p-5 flex mt-10 mr-6 mb-5"
      >
        <div className="w-full">
          <div className="quickLinks">
            <p className="font-bold text-lg">Quicks Links</p>
            <p className="underline text-sky-600 mt-2 cursor-pointer">
              Getting Started with the application.
            </p>
            <p className="underline text-sky-600 mt-1 cursor-pointer">
              See Manuals and common documents.
            </p>
            <p className="underline text-sky-600 mt-1 cursor-pointer">
              See FAQ’s
            </p>
          </div>
          <div style={{ marginTop: "8rem" }} className="contacts">
            <p className="font-bold text-lg mt-2"> Contact Us</p>
            <p>Have questions? Get real time help with support.</p>
          </div>
          <div style={{ marginTop: "8rem" }} className="CallUs">
            <p className="font-bold text-lg mb-2">Call Us/ Email Us</p>
            <a  href="tel:+918095588122" className="cursor-pointer flex flex-row items-center">
              {/* <i className="bi bi-telephone-fill "> </i> */}
              <img className=" mr-2" src="/images/icons/telephone.png" alt="" />
              +91 80955 88122
            </a>
            <a href="mailto:info@pumpacademy.in" className="cursor-pointer flex flex-row items-center mt-2">
              {/* <i className="bi bi-telephone-fill "> </i> */}
              <img className=" mr-2" src="/images/icons/gmail.png" alt="" />
              info@pumpacademy.in
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="about">
            <p className="font-bold text-lg">About the Application</p>
            <p>MoM V 01.001</p>
            <p className="font-bold mb-3 mt-5">Supported Browsers</p>
            <div className="flex justify-between gap-x-3 items-center w-fit">
              <img
                className="w-10 h-fit"
                src="/images/icons/chrome.png"
                alt=""
              />
              <img
                className="w-10 h-fit"
                src="/images/icons/firefox.png"
                alt=""
              />
              <img
                className="w-10 h-fit"
                src="/images/icons/edge-icon.png"
                alt=""
              />
              <img
                className="w-10 h-fit"
                src="/images/icons/opera.png"
                alt=""
              />
              <p className="font-bold">& Almost All...</p>
            </div>
          </div>
          <div className="update mt-12">
            <p className="font-bold text-lg">Application Update Info</p>
            <p>01-Feb-2024 - V 01.001</p>
          </div>
          <div className="status mt-5">
            <p className="font-bold text-lg">Status</p>
            <p className="flex flex-row items-center mt-1">
                <img width="60px" src="https://cdn-icons-png.flaticon.com/512/1887/1887098.png" alt="" />
              {/* <i className="bi bi-cone-striped text-4xl text-yellow-500 mr-1"></i> */}
              {AppCurrentStatus}
            </p>
          </div>
          <div className="terms mt-12">
            <p className="font-bold text-lg">Terms of use and Privacy Policy</p>
            <p className="font-bold text-lg mt-3">Updates and Announcements</p>
          </div>
        </div>
        
      </div>
      <p className="text-center" >Developed with <i className="bi bi-suit-heart-fill text-red-600"></i> by <a className="text-blue-500 underline hover:text-red-600" href="https://www.pumpacademy.in/" target="_blank" rel="noreferrer">@PAPL</a></p>
    </GlobalLayout>
  );
};

export default HelpSupport;
