import React from 'react';
// components
import MessageCards from "./messageCards";

const Banner : React.FC = () => {
    return (
        <section className="flex flex-col">
            <section className="mx-[30.75px] my-12 flex flex-col items-start">
                <h1 className="font-PoppinsBold text-3xl text-primaryText">
                    Freedom communicate to world with people and especially for iranian people
                </h1>

                <h2 className="font-InterRegular text-sm mt-4">
                    Great software that allows you to chat from any place at any time without any interruption.
                </h2>

                <button className="mt-[22px] mb-4 px-[11px] py-[8.3px] rounded-[3px] bg-primary text-xs text-white font-InterRegular">
                    Start chatting now
                </button>

                <section className="flex items-center py-1 space-x-6">
                    <div className="flex -space-x-2 overflow-hidden">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                             src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""
                        />
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                             src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""
                        />
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                             alt=""
                        />
                    </div>

                    <div>
                        <span className="font-InterExtraBold text-sm">2,291</span>
                        <h3 className="font-InterRegular text-xs">Happy members</h3>
                    </div>

                    <div>
                        <span className="font-InterExtraBold text-sm">4.8/5</span>
                        <h3 className="font-InterRegular text-xs">Rating</h3>
                    </div>
                </section>
            </section>

            <div className="flex justify-center relative">
                <div className="relative">
                    <img
                        src="/static/images/banner-mobile.png"
                        alt="Banner Mobile"
                        className="z-20 relative"
                    />

                    {/* Circles */}
                    <span className="w-[314px] h-[314px] absolute border-2 border-black rounded-full top-12 -right-4 z-10"></span>
                    <span className="w-[314px] h-[314px] absolute bg-yellow-400 rounded-full top-20 right-0"></span>

                    {/* Static message card */}
                    <MessageCards />
                </div>
            </div>
        </section>
    )
}

export default Banner;