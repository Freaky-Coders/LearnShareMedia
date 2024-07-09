'use client'
import React, { useState, useEffect, useRef } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import SearchInput from './CommonComponents/SearchInput';
import { RiMenu2Fill } from 'react-icons/ri';

type MenuItem = {
    label: string;
    link?: string;
    dropdown?: { [key: string]: string };
}

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<boolean>(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);
    const [windowscrolled, setWindowscrolled] = useState<boolean>(false)

    const desktopDropdownRef = useRef<HTMLUListElement>(null);
    const desktopButtonRef = useRef<HTMLButtonElement>(null);
    const mobileDropdownRef = useRef<HTMLUListElement>(null);
    const mobileButtonRef = useRef<HTMLButtonElement>(null);

    const handleDocumentClick = (event: MouseEvent) => {
        if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node) && desktopButtonRef.current && !desktopButtonRef.current.contains(event.target as Node)) {
            setDesktopDropdownOpen(false);
        }
        if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node) && mobileButtonRef.current && !mobileButtonRef.current.contains(event.target as Node)) {
            setMobileDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    const toggleDesktopDropdown = (event: React.MouseEvent) => {
        event.stopPropagation();
        setDesktopDropdownOpen(prev => !prev);
    };

    const toggleMobileDropdown = (event: React.MouseEvent) => {
        event.stopPropagation();
        setMobileDropdownOpen(prev => !prev);
    };

    const menus: MenuItem[] = [
        {
            label: "About",
            link: "/about"
        },
        {
            label: "Category",
            dropdown: {
                "IT / Software Development": "/category/it-software-development",
                "Professional Development": "/category/professional-development",
                "Health & Fitness": "/category/health-fitness",
                "Government Jobs": "/category/government-jobs"
            }
        },
        {
            label: "Contact",
            link: "/contact"
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setWindowscrolled(true);
                console.log("Scrolled more than 100 pixels");
                console.log(windowscrolled)
            } else {
                setWindowscrolled(false);
                console.log("Scrolled less than 100 pixels");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <nav className={`fixed w-full py-3 top-0 bg-secondary-700 z-20 ${windowscrolled ? "bg-secondary-700" : "lg:bg-transparent"}`}>
                <div className='container mx-auto flex justify-between items-center relative gap-5'>
                    <div className="flex items-center gap-4">
                        <RiMenu2Fill className='sm:text-4xl text-[43px] lg:text-primary-700 text-white cursor-pointer xl:hidden' onClick={() => setSidebarOpen(true)} />
                        <div className="text-white">
                            <Link href={"/"}>
                                <Image src={"/assets/Images/LearnShareMediaLogo.png"} className='sm:block hidden' alt='img' width={300} height={50} />
                                <Image src={"/assets/Images/LSMMobile.png"} className='sm:hidden block' alt='img' width={120} height={30} />
                            </Link>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                    <div className="hidden xl:block">
                        <ul className='flex gap-4 text-white justify-end'>
                            {menus.map((menu, index) => (
                                <li key={index} className='text-lg cursor-pointer relative font-semibold'>
                                    {menu.link ? (
                                        <Link href={menu.link}>{menu.label}</Link>
                                    ) : (
                                        <button ref={desktopButtonRef} className='focus:outline-none flex items-center gap-2' onClick={toggleDesktopDropdown}><span>{menu.label}</span> <IoIosArrowDown className={`text-2xl ${desktopDropdownOpen ? "rotate-180" : ""}`} /> </button>
                                    )}
                                    {desktopDropdownOpen && menu.dropdown && (
                                        <ul ref={desktopDropdownRef} className={`absolute bg-white shadow-xl p-2 text-black w-[200px] transition ease-in-out delay-150  ${desktopDropdownOpen ? 'mt-4' : 'mt-10'}`}>
                                            {Object.entries(menu.dropdown).map(([dropdownLabel, dropdownLink], i) => (
                                                <li key={i} className='p-2 w-full'>
                                                    <Link href={dropdownLink} className='hover:bg-secondary-700 w-full block hover:text-white p-2 text-[15px]'>{dropdownLabel}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                        {/* <form action="">
                            <SearchInput />
                        </form> */}
                    </div>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <div className={`bg-[#0000004b] z-30 xl:hidden ${sidebarOpen ? 'absolute top-0 left-0 w-full h-full' : ''}`}>
                <div className={`fixed xl:hidden top-0 w-full h-full transition-all duration-300 ${sidebarOpen ? 'left-0 opacity-100' : 'opacity-0 left-[-100%]'}`}>
                    <div className={`w-[250px] h-full p-8 bg-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <IoMdClose className='sm:text-4xl text-[43px] cursor-pointer mb-5' onClick={() => setSidebarOpen(false)} />
                        <div>
                            {menus.map((menu, index) => (
                                <div key={index} className='mb-3'>
                                    {menu.link ? (
                                        <Link href={menu.link}>
                                            <button className='block bg-primary-700 text-white text-start px-5 py-2 w-full rounded-xl hover:bg-secondary-700'>
                                                {menu.label}
                                            </button>
                                        </Link>
                                    ) : (
                                        <button ref={mobileButtonRef} onClick={toggleMobileDropdown} className='flex px-5 items-center  justify-between w-fullgap-4 bg-primary-700 text-white py-2 w-full rounded-xl hover:bg-secondary-700'>
                                            <span>{menu.label}</span> <IoIosArrowDown className={`border border-white text-2xl ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                                        </button>
                                    )}
                                    {mobileDropdownOpen && menu.dropdown && (
                                        <ul ref={mobileDropdownRef} className='bg-primary-700 mt-2 p-2 rounded-xl'>
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

export default Navbar;
