import React from 'react';
// props interface
interface Props {
    profile: string | undefined
}
export const ProfileImage : React.FC<Props> = ({ profile }) => {
    return (
        <img src="" className="w-14 h-14 rounded-xl shadow-2xl object-cover"/>
    )
}

export const ProfileDefault : React.FC = () => {
    return (
        <div className="w-14 h-14 profileBox bg-primary font-Asap text-white rounded-[14px] text-[22px] flex justify-center items-center select-none">
            <span>M</span>
        </div>
    )
}