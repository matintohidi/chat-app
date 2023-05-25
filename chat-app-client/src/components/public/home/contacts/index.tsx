import React from 'react';
// packages dependencies
import { ArrowDown2 , Add } from "iconsax-react";
// components
import Contact from "./contact";
// redux
import { useAppSelector } from "../../../../hooks";

const Home : React.FC = () => {
    const chatShow = useAppSelector(state => state.mobileUI.chatShow);

    return (
        <div className={`${chatShow ? "hidden" : "flex"} w-full lg:border-r lg:flex flex-col items-center lg:w-1/4`}>
            <div className="flex justify-between items-center border-b p-5 xl:p-6 w-full">
                <div className="flex items-center gap-3">
                    <h2 className="text-lg md:text-xl select-none">Messages</h2>
                    <ArrowDown2 size="18" />
                    <span className="text-xs px-2 py-0.5 bg-gray-200 font-medium rounded-3xl select-none">13</span>
                </div>

                <button className="w-7 h-7 xl:w-8 xl:h-8 bg-primary rounded-full flex items-center justify-center">
                    <Add color="#fff" size="30" />
                </button>
            </div>

            <div className="w-full flex flex-col">
                <div className="px-6 mt-4">
                    <input className="w-full py-2.5 md:py-3.5 px-5 outline-0 rounded-xl bg-[#F3F3F3] font-InterRegular text-sm" placeholder="Search Messages" />
                </div>

                <div className="px-2 mt-6 sm:px-4 flex flex-col gap-y-4 overflow-y-auto h-screen contactsScroll items-start">
                    <Contact />

                    <Contact />

                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Home;