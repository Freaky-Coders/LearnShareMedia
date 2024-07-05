import SideContent from '@/components/CommonComponents/SideContent'
import SideImage from '@/components/CommonComponents/SideImage'
import React from 'react'

const OurMission = () => {
  return (
    <section className='py-12 bg-primary-100'>
      <div className="container">
        <div className="flex justify-between lg:grid-cols-2 flex-wrap grid-cols-1 items-center gap-y-12 gap-x-5">
          <div className='lg:w-[35%] w-full'>
            <SideImage image='/assets/Images/AboutPage/OurMision.jpg' css='shadow-lg rounded-2xl w-fit overflow-hidden'/>
          </div>
          <SideContent 
            title='Empowering Students with Free Study Materials'
            description='We are dedicated to supporting students in their educational journey by providing free access to study materials. Our mission is to ensure every student has the resources they need to succeed. By sharing your study materials and knowledge, you contribute to a brighter future for all. If this project grows, we plan to launch free courses to further enhance learning opportunities.'
            buttonlink='/share-material' 
            buttonlabel='Share Now' 
            css='lg:w-[60%] w-full'
            subHeading='Our Mission'
          />
        </div>
      </div>
    </section>
  )
}

export default OurMission
