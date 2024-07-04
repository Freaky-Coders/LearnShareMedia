import Image from "next/image";
import PopularCategorySection from "@/components/CommonSections/PopularCategorySection";
import AboutUs from "@/components/CommonSections/AboutUs";
import HomeHero from "@/components/Home/Sections/HomeHero";
import WhoWeAre from "@/components/CommonSections/WhoWeAre";
import OurMessageForYou from "@/components/CommonSections/OurMessageForYou";

export default function Home() {
  return (
    <>
      <HomeHero/>
      <AboutUs/>
      <PopularCategorySection/>
      <WhoWeAre/>
      <OurMessageForYou/>
    </>
  );
}
