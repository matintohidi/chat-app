import React from 'react';


const Contact : React.FC = () => {
    return (
        <div className="flex p-3 gap-4 w-full cursor-pointer">
            <img src="/static/images/Frame 10.png" alt="profile" className="w-12 h-12 rounded-xl object-cover" />

            <div className="flex justify-between w-full gap-5">
                <div>
                    <h1 className="text-sm capitalize">lavern laboy</h1>
                    <p className="text-xs text-gray-400 line-clamp-1">Haha oh man Haha oh man Haha oh man Haha oh man Haha oh man</p>
                </div>

                <span className="text-gray-400 text-sm">12m</span>
            </div>
        </div>
    )
}

export default Contact;