"use client"

import React from 'react'
import SectionTitle from '../CommonComponents/SectionTitle'

const WhoWeAre = () => {
  return (
    <section className='bg-primary-100 lg:py-16 py-10'>
      <div className="container mx-auto text-center px-4">
        <SectionTitle
          title='Discover Who We Are'
          preTitle='Who We Are'
          align='center'
        >
          At LearnShareMedia, we are passionate about providing free educational resources to learners. Watch this video to learn more about our mission and vision.
        </SectionTitle>
        <div className="relative pb-9/16 w-full md:h-[450px] h-[350px] mx-auto">
          <iframe
            className='absolute inset-0 w-full h-full rounded-lg shadow-lg'
            src="https://www.youtube.com/embed/-TxS3XTz3hQ?si=f91vlHbJINjrKHdu"
            allowFullScreen
            title="LearnShareMedia Introduction"
          />
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
