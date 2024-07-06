'use client'
import { toggleFilterSidebar } from '@/lib/Features/FilterSidebar/filtersidebarSlice';
import { RootState } from '@/lib/store';
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

// type CategorySearchInputProps = {
//     onSearch: (searchTerm: string) => void;
// };

const CategorySearchInput= () => {
    const dispatch = useDispatch();

    const isSidebarvisible = useSelector((state: RootState) => state.filterSidebarShow.filtersidebarshow);

    const openFilter = () => {
        dispatch(toggleFilterSidebar());
    }
    

    return (
        <div className="sticky top-[90px] bg-white border-b border-b-gray-300 p-4 flex items-center gap-5">
            <button type='button' onClick={openFilter} className={`${isSidebarvisible ? "lg:hidden block" : "block"}`}>
                    <FaFilter/>
            </button>
            <input
                type="search"
                placeholder="Search categories..."
                className="w-full border border-gray-300 p-2 shadow-lg py-3 px-5 rounded-full bg-gray-50  text-black"
            />
        </div>
    );
};

export default CategorySearchInput;
