import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
    link: string;
    label: string
}

const LinkButton: React.FC<LinkButtonProps> = ({label, link}) => {
  return (
    <>
      <Link href={link} className='bg-primary-700 py-3 px-4 text-white text-xl mt-1 inline-block'>
        {label}
      </Link>
    </>
  )
}

export default LinkButton
