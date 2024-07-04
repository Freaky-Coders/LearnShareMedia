import Image from "next/image"
import React from "react"
import LinkButton from '../../CommonComponents/LinkButton';

const HomeHero = () => {
  return (
    <>
      <div className="relative overflow-hidden py-[100px]">
        <div className="before:absolute before:bg-secondary-700 before:rotate-[323deg] before:w-[200%] before:h-full before:top-[-50%] sm:before:top-[-40%] before:left-[-95%] sm:before:left-[-75%] lg:before:rotate-0 lg:before:top-0 lg:before:left-1/2 lg:before:w-[50%] lg:before:h-full before:pointer-events-none before:z-[-1]">
          <div className="container mx-auto z-10 px-6 relative">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-8">
              <div className='z-10 lg:text-black text-white'>
                <h3 className='xl:text-6xl md:text-5xl text-4xl font-bold xl:leading-tight md:leading-snug'>Boost your <span className='lg:text-primary-700 underline'>knowledge</span> with free study material</h3>
                <p className='md:text-xl text-lg pt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quas, at dolorem voluptatem minus repellat quo eligendi adipisci voluptates mollitia.</p>
                <div className='mt-3'>
                  <LinkButton label={"All Category"} link={"/about"}/>
                </div>
              </div>
              <div className='z-10 flex justify-center'>
                <Image
                  src='/assets/Images/HomePage/HomeHeroNone.png'
                  width={500}
                  height={500}
                  alt='LSM Banner'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHero
