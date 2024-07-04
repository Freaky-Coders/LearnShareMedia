import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
    link: string;
    label: string
}

const LinkButton: React.FC<LinkButtonProps> = ({label, link}) => {
  return (
    <>
      {/* <Link href={link} className='bg-primary-700 py-3 px-4 text-white text-xl mt-1 inline-block hover:bg-secondary-700'>
        {label}
      </Link> */}
      <Link href={link} className="relative inline-block font-medium group py-3 px-4">
        <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-secondary-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-primary-50 text-white border-primary-700 border group-hover:bg-primary-50"></span>
        <span className="relative text-secondary-700 ">{label}</span>
      </Link>
    </>
  )
}

export default LinkButton
