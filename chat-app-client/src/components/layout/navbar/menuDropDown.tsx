import React , { Fragment } from 'react';
// packages dependencies
import { Menu , Transition } from '@headlessui/react';
import { HambergerMenu } from 'iconsax-react';
// react router dom
import { NavLink } from 'react-router-dom';
// contracts
import { NavLinkInterface } from '../../../contracts/landing';
// navbar links
const navLinks : NavLinkInterface[] = [
    { name: "Home", path: "/" , id: 0 },
    { name: "About", path: "/about" , id: 1 },
    { name: "Contact", path: "/contact" , id: 2 },
];
const MenuDropDown : React.FC = () => {
    return (
        <nav>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button>
                        <HambergerMenu
                            color="#292D32"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="origin-top-left absolute right-0 mt-2 w-36 rounded-lg shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                        <div className="px-[6px] py-[3px] space-y-1 space-y-reverse" id="nav-links">
                            {
                                navLinks.map(link => {
                                    return (
                                        <Menu.Item key={link.id}>
                                            <NavLink
                                                to={link.path}
                                                className="font-InterRegular text-gray-900 group flex w-full items-center rounded-lg px-2 py-2 text-sm my-1"
                                            >
                                                {link.name}
                                            </NavLink>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </nav>
    )
}

export default MenuDropDown;