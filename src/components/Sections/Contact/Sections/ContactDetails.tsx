import ContactCard from '@/components/CommonComponents/ContactCard';
import SectionTitle from '@/components/CommonComponents/SectionTitle';
import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";


const ContactDetails: React.FC = () => {

  const categories = [
    {
      title: "Email",
      subHeading: "dharamdotin@gmail.com",
      icon: <AiOutlineMail />,
      link: "mailto:dharamdotin@gmail.com"
    },
    {
      title: "Github",
      subHeading: "Freaky-Coders",
      icon: <FaGithub />,
      link: "https://github.com/Freaky-Coders"
    },
    {
      title: "Instagram",
      subHeading: "FreakyCoders",
      icon: <LuInstagram />,
      link: "https://www.instagram.com/FreakyCoders/"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <SectionTitle title='Get in Touch with Us' preTitle='Contact Us' />
      <div className="container mx-auto mt-7 px-6">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {categories.map((category, index) => (
            <ContactCard
              key={index}
              title={category.title}
              subHeading={category.subHeading}
              icon={category.icon}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
