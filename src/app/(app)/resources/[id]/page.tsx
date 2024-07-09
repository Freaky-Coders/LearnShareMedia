'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ReloadIcon } from '@radix-ui/react-icons';

import RelatedResources from '@/components/Sections/Resources/Sections/RelatedResources';
import ReviewResources from '@/components/Sections/Resources/Sections/ReviewResources';
import { RootState } from '@/lib/store';

interface PageData {
    title: string;
    description: string;
    file: string;
    tags: string[];
    category: string;
}

const Page: React.FC = () => {
    const { ResourcesData, error, loading } = useSelector((state: RootState) => state.resourcesData);
    const params = useParams<{ id: string }>();
    const reviewFormRef = useRef<HTMLDivElement>(null);

    const [pageDetails, setPageDetails] = useState<PageData | undefined>(undefined);

    useEffect(() => {
        if (ResourcesData) {
            const resource = ResourcesData.data.find(page => page._id === params.id);
            setPageDetails(resource);
        }
    }, [ResourcesData, params.id]);

    const handleAddReviewClick = () => {
        reviewFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center w-screen h-[90vh]">
                <Image src="/assets/Images/LoadingGIF.gif" width={200} height={50} alt="LearnShareMedia" />
                <h4>Loading...</h4>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-[90vh]">
                <button
                    className="bg-primary-500 px-3 py-3 text-white font-bold flex items-center gap-3"
                    onClick={() => window.location.reload()}
                    type="button"
                >
                    Reload Page <ReloadIcon />
                </button>
                <h4>Error: {error}</h4>
            </div>
        );
    }

    const handleDownloadClick = () => {
        if (pageDetails?.file) {
            const link = document.createElement('a');
            link.href = pageDetails.file;
            link.download = `${pageDetails.title}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };


    return (
        <div className="mt-[80px]">
            <div className="container mx-auto p-6 pb-0">
                <div className="bg-white overflow-hidden relative rounded-lg shadow-lg">
                    <div className="relative">
                        <object data={pageDetails?.file} type="application/pdf" className="w-full lg:h-[500px] h-[300px]">   
                            <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a href={pageDetails?.file}>click here to download the PDF file.</a></p>
                        </object>
                    </div>
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-gray-700">{pageDetails?.title}</h1>
                        <p className="text-gray-700 mb-4">{pageDetails?.description}</p>
                        <div className="flex flex-wrap items-center mb-4">
                            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-3">
                                {pageDetails?.category}
                            </span>
                            <div className='flex flex-wrap gap-3'>
                                {pageDetails?.tags.map((tag, index) => (
                                    <span key={index} className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button onClick={handleDownloadClick} className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200">
                                Download Resource
                            </button>
                            {/* <button
                                onClick={handleAddReviewClick}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                            >
                                Add Review
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

            <RelatedResources Relatedcategory={pageDetails?.category}/>
            {/* <ReviewResources reviewFormRef={reviewFormRef} /> */}
        </div>
    );
};

export default Page;
