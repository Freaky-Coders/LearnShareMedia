import Link from "next/link";
import React from "react"
import LinkButton from "./LinkButton";

interface SideContentProps{
  title: string;
  description: string;
  buttonlabel: string;
  buttonlink: string;
  css: string;
  subHeading: string;
}


const SideContent: React.FC<SideContentProps> = ({title, description, buttonlabel, buttonlink, css, subHeading}) => {
  return (
    <>
      <div className={`${css}`}>
        <h6 className="text-sm font-bold tracking-wider text-primary-500 uppercase">{subHeading}</h6>
        <h4 className="lg:text-4xl text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="lg:text-xl text-lg text-gray-500 leading-normal mb-4" dangerouslySetInnerHTML={{__html: description}}/>
        <LinkButton label={buttonlabel} link={buttonlink}/>
      </div>
    </>
  )
}

export default SideContent
