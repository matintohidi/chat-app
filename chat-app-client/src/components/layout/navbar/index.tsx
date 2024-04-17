import React from 'react';
// components
import MenuDropDown from "./menuDropDown";

const Navbar : React.FC = () => {
    return (
        <nav className="flex justify-between mx-[17.25px] mt-11">
            <h1 className="text-sm">
                Chat Life
            </h1>

            <MenuDropDown />
        </nav>
    )
}

export default Navbar;