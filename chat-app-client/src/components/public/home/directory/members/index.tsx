import React from 'react';
// components
import Member from './member';

const Index : React.FC = () => {
    return (
        <div className="px-4 py-6 border-b">
            <div className="flex gap-x-2 items-center">
                <h2 className="text-sm">Team Members</h2>
                <span className="flex items-center justify-center bg-gray-200 text-xs rounded-full px-2 py-1">6</span>
            </div>

            <div className="flex flex-col gap-y-2 mt-2 overflow-y-auto">
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
            </div>
        </div>
    )
}

export default Index;