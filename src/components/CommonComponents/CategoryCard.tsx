"use client"
import React from "react";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  icon: JSX.Element;
  subHeading: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, subHeading, link }) => {
  return (
    <Link href={link} className="p-4 bg-white border rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105 group" title='Click here'>
      <div className="flex flex-col items-center text-center">
        <div className="text-7xl text-primary-500 mb-2">{icon}</div>
        <h3 className="text-xl mt-7 font-bold text-gray-800">{title}</h3>
        <p className="text-lg text-gray-600">{subHeading}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
