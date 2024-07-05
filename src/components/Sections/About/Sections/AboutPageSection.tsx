import LinkButton from '@/components/CommonComponents/LinkButton'
import Link from 'next/link'
import React from 'react'

const AboutUsSection = () => {
  return (
    <section className='py-12'>
      <div className="container mx-auto text-center">
        <h2 className='text-4xl font-bold mb-6'>Welcome To LearnShareMedia</h2>
        <p className='text-lg mb-6'>
          We are committed to supporting students in their educational journey by providing free study materials. Our mission is to ensure that every student has access to quality resources, helping them achieve academic success. By joining our community, you can make a difference by sharing your study materials and knowledge, contributing to a brighter future for all learners.
        </p>
        <LinkButton label='Upload Study Material' link='share-material'/>
      </div>
    </section>
  )
}

export default AboutUsSection
