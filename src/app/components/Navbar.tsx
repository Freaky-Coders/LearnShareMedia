'use client'
import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

// Define types for menu items
type MenuItem = {
    label: string;
    link?: string;
    dropdown?: { [key: string]: string };  // Dropdown items with label and link
}

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const menus: MenuItem[] = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "About",
            link: "/about"
        },
        {
            label: "Category",
            dropdown: {
                Business: "/business",
                Health: "/health",
                Money: "/money",
                Water: "/water"
            }
        },
        {
            label: "Pages",
            link: "/pages"
        },
        {
            label: "Blog",
            link: "/blog"
        },
        {
            label: "Contact",
            link: "/contact"
        },
    ];

    return (
        <>
            <nav className='bg-[#1B3C73] px-8 py-3 flex justify-between relative'>
                <div className="flex items-center gap-4">
                    <IoMenu className='text-3xl text-white cursor-pointer lg:hidden' onClick={() => setSidebarOpen(true)} />
                    <div className="text-white">
                        <h3 className='text-2xl font-bold'>Dha<span className='text-[#F31559]'>ram</span></h3>
                    </div>
                    <div className="hidden lg:block">
                        <ul className='flex gap-4 text-white'>
                        {
                            menus.map((menu, index) => (
                                <li key={index} className='text-lg cursor-pointer hover:text-[#FF407D]'>
                                    {menu.link ? (
                                        <Link href={menu.link}>{menu.label}</Link>
                                    ) : (
                                        <button className='focus:outline-none'>{menu.label}</button>
                                    )}
                                    {menu.dropdown && (
                                        <ul className='absolute bg-white mt-2 p-2 shadow-lg'>
                                            {Object.entries(menu.dropdown).map(([dropdownLabel, dropdownLink], i) => (
                                                <li key={i} className='p-2'>
                                                    <Link href={dropdownLink}>{dropdownLabel}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="w-12 h-12 cursor-pointer rounded-full overflow-hidden">
                        <img src="https://avatars.githubusercontent.com/u/122605883?v=4" alt="user" />
                    </div>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <div className={`bg-[#0000004b] lg:hidden ${sidebarOpen ? 'absolute top-0 left-0 w-full h-full' : ''}`}>
                <div className={`fixed lg:hidden top-0 w-full h-full transition-all duration-300 ${sidebarOpen ? 'left-0 opacity-100' : 'opacity-0 left-[-100%]'}`}>
                    <div className={`w-[250px] h-full p-8 bg-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <IoMdClose className='text-2xl cursor-pointer mb-5' onClick={() => setSidebarOpen(false)} />
                        <div>
                            {menus.map((menu, index) => (
                                <div key={index} className='mb-3'>
                                    {menu.link ? (
                                        <Link href={menu.link}>
                                            <button className='block bg-[#6587b7] text-white py-2 w-full rounded-xl hover:bg-[#40679E]'>
                                                {menu.label}
                                            </button>
                                        </Link>
                                    ) : (
                                        <button className='block bg-[#6587b7] text-white py-2 w-full rounded-xl hover:bg-[#40679E]'>
                                            {menu.label}
                                        </button>
                                    )}
                                    {menu.dropdown && (
                                        <ul className='bg-[#6587b7] mt-2 p-2 rounded-xl'>
                                            {Object.entries(menu.dropdown).map(([dropdownLabel, dropdownLink], i) => (
                                                <li key={i} className='text-white p-2'>
                                                    <Link href={dropdownLink}>{dropdownLabel}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
