import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary-700 shadow">
            <div className="w-full container mx-auto py-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src="/assets/Images/LearnShareMediaLogo.png" alt="LearnShareMedia Logo" width={300} height={32} />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-white sm:text-center ">
                    © {new Date().getFullYear()} <Link href="https://github.com/Dharam-IN" className="hover:underline">Dharam-IN</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
