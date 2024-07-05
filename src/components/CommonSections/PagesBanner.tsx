import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
  text: string;
  url: string;
}

interface PagesBannerProps {
  heading: string;
  bgimage: string;
  breadcrumbs: Breadcrumb[];
}

const PagesBanner: React.FC<PagesBannerProps> = ({ heading, bgimage, breadcrumbs }) => {
  return (
    <>
      <section
        className='h-[350px] text-white flex flex-col justify-center items-center w-full relative'
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container z-10">
          <div className="grid justify-center text-5xl">
          <nav className="flex text-lg font-bold underline mb-2 absolute bottom-5 lg:right-[15%] right-[2%]">
            {breadcrumbs.map((breadcrumb, index) => (
              <span key={index} className="mr-2">
                <Link href={breadcrumb.url} className="text-white hover:underline">
                  {breadcrumb.text}
                </Link>
                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </nav>
            {heading}
          </div>
        </div>
      </section>
    </>
  );
}

export default PagesBanner;
