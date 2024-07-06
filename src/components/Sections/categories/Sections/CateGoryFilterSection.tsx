import React from 'react';
import FilterSideBar from '../Components/FilterSideBar';
import CategorySearchInput from '../Components/CategorySearchInput';

const CateGoryFilterSection: React.FC = () => {

    const handleSearch = (searchTerm: string) => {
        console.log(searchTerm);
    }

    return (
        <>
            <section className='pt-[150px] flex relative bg-secondary-700'>
                <FilterSideBar />
                <div className="p-4">
                            <CategorySearchInput/>
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
