import React from 'react';
// packages dependencies
import { Call , ArrowLeft } from 'iconsax-react';
// redux
import { useAppDispatch } from "../../../../hooks";
import { setChatDisplay } from "../../../../store/slices/mobileUISlice";

const Header : React.FC = () => {
    const dispatch = useAppDispatch();

    const setDisplay = () => dispatch(setChatDisplay(false));

    return (
        <header className="flex justify-between px-3 sm:px-6 py-4 border-b">
            <div className="flex gap-2 items-center">
                <ArrowLeft className="text-gray-400 hover:text-gray-800 transition lg:hidden" onClick={setDisplay} />

                <div className="flex gap-2 sm:gap-4">
                    <img src="/static/images/Frame 10.png" className="w-12 h-12 rounded-xl object-cover" />

                    <div className="flex flex-col justify-between">
                        <h1 className="text-md lg:text-xl capitalize">lavern laboy</h1>

                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-green-400 rounded-full"> </span>
                            <span className="text-xs text-gray-500">Online</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className="flex gap-2 justify-center items-center rounded-lg bg-secondary px-3 py-1.5 lg:px-4 lg:py-2.5">
                <Call variant="Bold" className="text-primary"  />

                <span className="text-primary">Call</span>
            </button>
        </header>
    )
}

export default Header;