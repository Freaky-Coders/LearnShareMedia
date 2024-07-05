import Image from "next/image";
import PopularCategorySection from "@/components/CommonSections/PopularCategorySection";
import AboutUs from "@/components/CommonSections/AboutUs";
import HomeHero from "@/components/Home/Sections/HomeHero";
import WhoWeAre from "@/components/CommonSections/WhoWeAre";
import OurMessageForYou from "@/components/CommonSections/OurMessageForYou";

export default function Home() {
  return (
    <>
      {/* Home Page Hero Section */}
      <HomeHero/>


      {/* Home About Us Section */}
      <AboutUs/>


      {/* Popular Category Home Section */}
      <PopularCategorySection/>


      {/* Who We are */}
      <WhoWeAre/>


      {/* Our Message For You */}
      <OurMessageForYou/>
    </>
  );
}
