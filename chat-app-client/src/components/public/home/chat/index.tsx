import React from 'react';
// components
import Header from "./header";
import SendMessage from "./sendMessage";
// redux
import { useAppSelector } from "../../../../hooks";

const Chat : React.FC = () => {
    const chatShow = useAppSelector(state => state.mobileUI.chatShow);

    return (
        <div className={`${chatShow ? "flex" : "hidden"} w-full lg:w-1/2 lg:flex lg:border-r flex-col justify-between`}>
            <Header />

            <main>

            </main>

            <SendMessage />
        </div>
    )
}

export default Chat;