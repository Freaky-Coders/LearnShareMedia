import React from 'react'
import SideImage from '../CommonComponents/SideImage'
import SideContent from '../CommonComponents/SideContent'

const OurMessageForYou = () => {
  return (
    <section className='py-12'>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-y-12 gap-x-5">
          <SideImage image='/assets/Images/HomePage/OurMessageImg.png' css='shadow-lg rounded-2xl w-fit p-4 overflow-hidden '/>
          <SideContent 
            title='Share Your Study & Knowledge Materials to Help Others'
            description='Join our mission to provide free educational resources. By sharing your study materials and knowledge, you contribute to a community that supports learning and growth for everyone. Lets make education accessible for all.'
            buttonlink='/share-material' 
            buttonlabel='Share Now' 
            css='' 
            subHeading='Our Message For You'
          />
        </div>
      </div>
    </section>
  )
}

export default OurMessageForYou
