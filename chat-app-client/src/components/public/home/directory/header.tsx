import React from 'react';

const Header : React.FC = () => {
    return (
        <div className="flex items-center justify-between p-[22px] border-b">
            <h2 className="text-xl">Directory</h2>

            <button className="w-9 h-9 rounded-full bg-secondary flex flex-col gap-[3px] items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-primary"> </span>
                <span className="w-1 h-1 rounded-full bg-primary"> </span>
                <span className="w-1 h-1 rounded-full bg-primary"> </span>
            </button>
        </div>
    )
}

export default Header;