'use client'

import React, { useEffect } from 'react';
import FilterSideBar from '../Components/FilterSideBar';
import CategorySearchInput from '../Components/CategorySearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import MobileFilterSideBar from '../Components/MobileFilterSideBar';
// import { setSidebarVisibility } from '@/lib/Features/FilterSidebar/filtersidebarSlice';

const CateGoryFilterSection: React.FC = () => {

    const handleSearch = (searchTerm: string) => {
        console.log(searchTerm);
    }

    const isSidebarvisible = useSelector((state: RootState) => state.filterSidebarShow.filtersidebarshow);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const handleResize = () => {
    //         if(window.innerWidth < 1024){
    //             dispatch(setSidebarVisibility(false));
    //         }else{
    //             dispatch(setSidebarVisibility(true));
    //         }
    //     }

    //     window.addEventListener("resize", handleResize);

    //     handleResize();

    //     return () => {
    //         window.removeEventListener("resize", handleResize)
    //     }
    // })

    return (
        <>
            <section className='pt-[100px] flex relative'>
                <div className={`lg:block hidden transform transition-all duration-300 ease-in-out border-r border-gray-300 py-4 px-3 ${isSidebarvisible ? 'lg:translate-x-0 xl:w-[20%] lg:w-[30%]' : 'lg:-translate-x-full w-0'
                    }`}>
                    <FilterSideBar />
                </div>
                {/* <div className={`lg:hidden block transform transition-all duration-300 ease-in-out border-r border-gray-300 py-4 px-3`}> */}
                <div className={`bg-[#0000004b] z-30 xl:hidden ${isSidebarvisible ? '' : 'absolute top-0 left-0 w-full h-full'}`}>
                    <div className={`fixed xl:hidden top-0 w-full h-full transition-all duration-300 ${isSidebarvisible ? 'opacity-0 left-[-100%]' : 'left-0 opacity-100'}`}>
                        <MobileFilterSideBar/>  
                    </div>
                </div>
                <div className={`p-4 w-full ${isSidebarvisible ? "xl:w-[80%] lg:w-[70%]" : "w-full"}`}>
                    <CategorySearchInput />
                    <div className=" mt-6">
                        <div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Array.from({ length: 50 }).map((_, index) => (
                                <div key={index} className="p-4 border rounded shadow">
                                    <h2 className="text-xl font-bold mb-2">Dummy Title {index + 1}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel urna nec nisi venenatis commodo. Nulla facilisi.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CateGoryFilterSection;
