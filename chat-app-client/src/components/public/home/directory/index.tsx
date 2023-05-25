import React from 'react';
// components
import Header from './header';
import Members from './members';
import Files from './files';

const Directory : React.FC = () => {
    return (
        <div className="hidden lg:w-1/4 lg:block">
            <Header />

            <Members />

            <Files />
        </div>
    )
}

export default Directory;