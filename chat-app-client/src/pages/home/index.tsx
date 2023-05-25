import React from 'react';
// components
import { Navbar , Contacts , Chat , Directory } from '../../components';

const Home : React.FC = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Navbar />
            <Contacts />
            <Chat />
            <Directory />
        </div>
    )
}

export default Home;