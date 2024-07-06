'use client'
import React, { useRef } from 'react';
import RelatedResources from '@/components/Sections/Resources/Sections/RelatedResources';
import ReviewResources from '@/components/Sections/Resources/Sections/ReviewResources';

const Page: React.FC = () => {
    const reviewFormRef = useRef<HTMLDivElement>(null);

    const handleAddReviewClick = () => {
        if (reviewFormRef.current) {
            reviewFormRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const resourceData = {
        imageUrl: 'https://via.placeholder.com/600x400',    
        title: 'Sample Resource Title',
        description: 'This is a sample description of the resource. It provides a brief overview of what the resource is about.',
        category: 'Education',
        subCategory: 'Science'
    };

    return (
        <div className="mt-[80px]">
            <div className='container mx-auto p-6 pb-0'>
                <div className="bg-white overflow-hidden relative">
                    <div className="relative">
                        <img src={resourceData.imageUrl} alt={resourceData.title} className="w-full h-64 object-cover" />
                    </div>
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-gray-700">{resourceData.title}</h1>
                        <p className="text-gray-700 mb-4">{resourceData.description}</p>
                        <div className="flex items-center mb-4">
                            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">
                                {resourceData.category}
                            </span>
                            <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {resourceData.subCategory}
                            </span>
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200">
                                Download Resource
                            </button>
                            <button 
                                onClick={handleAddReviewClick}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                            >
                                Add Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <RelatedResources />

            <ReviewResources reviewFormRef={reviewFormRef} />
        </div>
    );
}

export default Page;
