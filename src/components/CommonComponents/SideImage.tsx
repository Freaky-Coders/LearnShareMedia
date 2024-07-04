import Image from 'next/image';
import React from 'react'

interface SideImageProps{
  image: string;
  css: string;
}

const SideImage: React.FC<SideImageProps> = ({image, css}) => {
  return (
    <div className={`${css}`}>
      <Image src={image} width={500} height={500} alt='LearnShareMedia'/>
    </div>
  )
}

export default SideImage
