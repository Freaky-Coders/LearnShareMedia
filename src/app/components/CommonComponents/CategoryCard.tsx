import React from 'react';
import customcursor from '../../../../public/assets/Images/cursor.webp';

interface CategoryCardProps {
  title: string;
  icon: JSX.Element;
  subHeading: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, subHeading }) => {
  return (
    <div className="category-card p-4 bg-white border rounded-md transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="text-7xl text-primary-500 mb-2">{icon}</div>
        <h3 className="text-xl mt-7 font-bold text-gray-800">{title}</h3>
        <p className="text-lg text-gray-600">{subHeading}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
