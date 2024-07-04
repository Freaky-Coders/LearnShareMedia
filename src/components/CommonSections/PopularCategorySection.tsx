import React from 'react';
import { FaCode, FaBook, FaLaptopCode, FaPaintBrush, FaCalculator, FaGlobe } from 'react-icons/fa';
import CategoryCard from '../CommonComponents/CategoryCard';
import SectionTitle from '../CommonComponents/SectionTitle';

const PopularCategorySection: React.FC = () => {

  const categories = [
    {
      title: "Programming",
      subHeading: "50+ PDFs",
      icon: <FaCode />,
      link: "/"
    },
    {
      title: "Mathematics",
      subHeading: "30+ PDFs",
      icon: <FaCalculator />,
      link: "/"
    },
    {
      title: "Web Development",
      subHeading: "40+ PDFs",
      icon: <FaLaptopCode />,
      link: "/"
    },
    {
      title: "Design",
      subHeading: "25+ PDFs",
      icon: <FaPaintBrush />,
      link: "/"
    },
    {
      title: "Science",
      subHeading: "35+ PDFs",
      icon: <FaBook />,
      link: "/"
    },
    {
      title: "Geography",
      subHeading: "20+ PDFs",
      icon: <FaGlobe />,
      link: "/"
    },
    {
      title: "Science",
      subHeading: "35+ PDFs",
      icon: <FaBook />,
      link: "/"
    },
    {
      title: "Geography",
      subHeading: "20+ PDFs",
      icon: <FaGlobe />,
      link: "/"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <SectionTitle title='Popular Topic, Which are Most Favourite To Students' preTitle='Popular Category' />
      <div className="container mx-auto mt-7 px-6">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
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

export default PopularCategorySection;
