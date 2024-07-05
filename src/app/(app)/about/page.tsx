import AboutUsSection from '@/components/Sections/About/Sections/AboutPageSection';
import OurMission from '@/components/Sections/About/Sections/OurMission';
import OurVision from '@/components/Sections/About/Sections/OurVison';
import PagesBanner from '@/components/CommonSections/PagesBanner'
import WhoWeAre from '@/components/CommonSections/WhoWeAre';
import React from 'react'

const page = () => {
    const breadcrumbs = [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
    ];
    
  return (
    <>
    {/* Banner */}
      <PagesBanner heading='About us' bgimage="/assets/Images/AboutPage/AboutBGImg.jpg" breadcrumbs={breadcrumbs}/>

    {/* About Us */}
    <AboutUsSection/>

    {/* Our Mission Us */}
    <OurMission/>

    {/* Our Vision */}
    <OurVision/>

    {/* Who We are */}
    <WhoWeAre/>
    </>
  )
}

export default page
