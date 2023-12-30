import React from "react";
import GlobalLayout from "../utils/hoc/globalLayout";

const HelpSupport = () => {
    return (
        <GlobalLayout>
            <div className="bg-[#e3f2fd52] shadow p-5 flex mt-4 me-2">
                <div className="w-full">
                    <div className="quickLinks">
                        <p className="font-bold text-lg">Quicks Links</p>
                        <p className="underline text-sky-600 mt-2 cursor-pointer">Getting Started with the application.</p>
                        <p className="underline text-sky-600 mt-1 cursor-pointer">See Manuals and common documents.</p>
                        <p className="underline text-sky-600 mt-1 cursor-pointer">See FAQ’s</p>
                    </div>
                    <div className="contacts mt-5">
                        <p className="font-bold text-lg mt-2"> Contact Us</p>
                        <p>Have questions? Get real time help with support.</p>
                    </div>
                    <div className="CallUs mt-5">
                        <p className="font-bold text-lg mb-2">Call Us/ Email Us</p>
                        <p className="cursor-pointer"><i className="bi bi-telephone-fill "> </i>+91 80955 88122</p>
                        <p className="cursor-pointer"><i className="bi bi-envelope-fill " > </i>info@pumpacademy.in</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="about">
                        <p className="font-bold text-lg">About the Application</p>
                        <p>MoM V 0.01</p>
                        <p className="font-bold mt-3">Supported Browsers</p>
                        <div className="flex w-fit">
                            <img className="w-fit h-fit" src="/images/icons/chrome.png" alt="" />
                            <img className="w-fit h-fit"  src="/images/icons/firefox.png" alt="" />
                            <img className="w-fit h-fit"  src="/images/icons/edge-icon.png" alt="" />
                            <img className="w-fit h-fit"  src="/images/icons/opera.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalLayout>
    );
};

export default HelpSupport;
