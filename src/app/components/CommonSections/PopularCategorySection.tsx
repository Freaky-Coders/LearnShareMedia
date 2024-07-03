import React from 'react';
import { FaCode, FaBook, FaLaptopCode, FaPaintBrush, FaCalculator, FaGlobe } from 'react-icons/fa';
import CategoryCard from '../CommonComponents/CategoryCard';
import SectionHeading from '../CommonComponents/SectionTitle';

const PopularCategorySection: React.FC = () => {

  const categories = [
    {
      title: "Programming",
      subHeading: "50+ PDFs",
      icon: <FaCode />
    },
    {
      title: "Mathematics",
      subHeading: "30+ PDFs",
      icon: <FaCalculator />
    },
    {
      title: "Web Development",
      subHeading: "40+ PDFs",
      icon: <FaLaptopCode />
    },
    {
      title: "Design",
      subHeading: "25+ PDFs",
      icon: <FaPaintBrush />
    },
    {
      title: "Science",
      subHeading: "35+ PDFs",
      icon: <FaBook />
    },
    {
      title: "Geography",
      subHeading: "20+ PDFs",
      icon: <FaGlobe />
    },
    {
      title: "Science",
      subHeading: "35+ PDFs",
      icon: <FaBook />
    },
    {
      title: "Geography",
      subHeading: "20+ PDFs",
      icon: <FaGlobe />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <SectionHeading title='Popular Topic, Which are Most Favourite To Students' preTitle='Popular Category' />
      <div className="container mx-auto mt-7 px-6">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              subHeading={category.subHeading}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategorySection;
