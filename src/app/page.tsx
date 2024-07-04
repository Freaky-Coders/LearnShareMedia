import Image from "next/image";
import PopularCategorySection from "@/components/CommonSections/PopularCategorySection";
import AboutUs from "@/components/CommonSections/AboutUs";
import HomeHero from "@/components/Home/Sections/HomeHero";

export default function Home() {
  return (
    <>
      <HomeHero/>
      <AboutUs/>
      <PopularCategorySection/>
    </>
  );
}
