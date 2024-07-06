'use client'
import React, { useState } from 'react';

// type CategorySearchInputProps = {
//     onSearch: (searchTerm: string) => void;
// };

const CategorySearchInput= () => {
    

    return (
        <div className="sticky top-[90px] bg-white border-b border-b-gray-300 p-4">
            <input
                type="search"
                placeholder="Search categories..."
                className="w-full border border-gray-300 rounded-md p-2"
            />
            {/* <span className="absolute right-3 top-2">
                <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M21 21l-6-6m0 0l-6-6m6 6l-6-6M4 12l6 6m2-12l6 6m-6-6l6 6"></path>
                </svg>
            </span> */}
        </div>
    );
};

export default CategorySearchInput;
