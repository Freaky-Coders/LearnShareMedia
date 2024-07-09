'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ReloadIcon } from '@radix-ui/react-icons';

import RelatedResources from '@/components/Sections/Resources/Sections/RelatedResources';
import ReviewResources from '@/components/Sections/Resources/Sections/ReviewResources';
import { RootState } from '@/lib/store';
import Link from 'next/link';

interface PageData {
  data: PageArray[]
}

interface PageArray {
  id: string;
  file: string;
  title: string;
  description: string;
}

const Page: React.FC = () => {
  const { ResourcesData, error, loading } = useSelector((state: RootState) => state.resourcesData);
  const params = useParams<{ name: string }>();
  console.log(params)
  let paramName = ""
  if (params) {
    if (params.name === "it-software-development") {
      paramName = "IT / Software Development"
    } else if (params.name === "professional-development") {
      paramName = "Professional Development"
    } else if (params.name === "health-fitness") {
      paramName = "Health & Fitness"
    } else if (params.name === "government-jobs") {
      paramName = "Government Jobs"
    }
  }

  const reviewFormRef = useRef<HTMLDivElement>(null);

  const [pageDetails, setPageDetails] = useState<PageData>();

  useEffect(() => {
    if (ResourcesData) {
      const filteredResources = ResourcesData.data.filter(page => page.category === paramName);

      const resource = filteredResources.map(resource => ({
        id: resource._id,
        file: resource.file,
        title: resource.title,
        description: resource.description
      }));

      setPageDetails({ data: resource });
    }
  }, [ResourcesData, paramName]);

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

  return (
    <>
      <div className='mt-[130px]'>
        <h3 className='lg:text-4xl sm:text-3xl text-2xl font-bold text-center'>{paramName}</h3>
        {
          pageDetails?.data && pageDetails?.data.length > 0 ? (
            <div className="container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {
                pageDetails.data.map((data) => (
                  <div key={data.id} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {/* <img className="rounded-t-lg" src={data.file} alt={data.title} /> */}
                    <iframe src={data.file} className='w-full h-[200px]'></iframe>
                    <div className="p-5">
                      <a href={`/resources/${data.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
                      <Link href={`/resources/${data.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          ) : (
            <>
              <h4>Sorry Currently we don't have have data</h4>
              <Link href={"/"}>All Pdfs</Link>
            </>
          )
        }
      </div>
    </>
  );
};

export default Page;
