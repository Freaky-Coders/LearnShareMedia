import SideContent from '@/components/CommonComponents/SideContent'
import SideImage from '@/components/CommonComponents/SideImage'
import React from 'react'

const OurVision = () => {
  return (
    <section className='py-12'>
      <div className="container">
        <div className="flex justify-between lg:grid-cols-2 flex-wrap grid-cols-1 items-center gap-y-12 gap-x-5">
          <SideContent 
            title='Our Vision for the Future of Education'
            description='Our vision is to create a world where every student has access to the best educational resources, regardless of their background or financial situation. We aim to build a community of learners and educators who share knowledge freely. As we grow, we aspire to introduce free courses and advanced learning tools to further support students in achieving their academic goals. Join us in making education accessible for all and empowering the next generation of learners.'
            buttonlink='/join-us' 
            buttonlabel='Join Us' 
            css='lg:w-[60%] w-full' 
            subHeading='Our Vision'
          />
          <div className='lg:w-[35%] w-full'>
            <SideImage image='/assets/Images/AboutPage/OurVision.jpg' css='shadow-lg rounded-2xl w-fit overflow-hidden flex flex-end'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurVision
