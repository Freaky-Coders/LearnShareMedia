import PagesBanner from '@/components/CommonSections/PagesBanner'
import ContactDetails from '@/components/Sections/Contact/Sections/ContactDetails';
import ContactForm from '@/components/Sections/Contact/Sections/ContactForm';
import React from 'react'

const page = () => {
    const breadcrumbs = [
        { text: 'Home', url: '/' },
        { text: 'Contact', url: '/contact' },
    ];

  return (
    <>
      {/* Banner */}
      <PagesBanner heading='Contact Us' bgimage="/assets/Images/ContactPage/ContactUsBanner.jpg" breadcrumbs={breadcrumbs}/>


      {/* Contact Details */}
      <ContactDetails/>

      
      {/* Contact Us */}
      <ContactForm/>
    </>
  )
}

export default page
