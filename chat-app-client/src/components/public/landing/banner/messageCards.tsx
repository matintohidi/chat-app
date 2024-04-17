import React from 'react';

const MessageCards : React.FC = () => {
    return (
        <>
            <div className="px-3 py-1.5 absolute bg-white z-30 rounded-[4.5px] w-40 h-17 top-[55%] left-0">
                <div className="flex items-center space-x-3 mb-2">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt="profile message card"
                        className="w-[22px] h-[22px] rounded-full"
                    />

                    <h2 className="font-InterExtraBold text-[8px] text-primaryText">Eli json</h2>
                </div>

                <p className="font-InterRegular text-[8px] text-left text-primaryText">
                    Great software that allows you to chat from any place at any time without any interruption.
                </p>
            </div>

            <div className="px-3 py-1.5 absolute bg-white z-30 rounded w-32 h-13 bottom-4 right-8">
                <div className="flex items-center space-x-3 mb-2">
                    <img
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="profile message card"
                        className="w-4 h-4 rounded-full"
                    />

                    <h2 className="font-InterExtraBold text-[5.3px] text-primaryText">Eli json</h2>
                </div>

                <p className="font-InterRegular text-[5.3px] text-left text-primaryText">
                    Great software that allows you to chat from any place at any time without any interruption.
                </p>
            </div>
        </>
    )
}

export default MessageCards;