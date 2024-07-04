"use client"

import React from "react";
import SideContent from "../CommonComponents/SideContent";
import SideImage from "../CommonComponents/SideImage";

const AboutUs = () => {
  return (
    <>
      <section className='bg-gray-100 lg:py-16 py-10'>
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                <SideContent 
                  title="Discover <span class='text-primary-700 font-bold'>LearnShareMedia</span>: Your Ultimate Free Learning Hub" 
                  description="Welcome to LearnShareMedia! We offer a vast collection of free educational resources including PDFs, videos, and more. Download resources, <b>share your study material, contribute to our open-source project</b> on GitHub, and support our mission through donations. Join us and be a part of the learning revolution!" 
                  buttonlabel='Learn More' 
                  buttonlink="/about"
                  css="w-[100%]"
                />
                <SideImage 
                  image={'/assets/Images/HomePage/AboutUsImage.png'}
                  css="w-[100%] justify-end flex" 
                />
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
