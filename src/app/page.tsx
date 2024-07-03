import Image from "next/image";
import Navbar from "./components/Navbar";
import { Button } from "@nextui-org/react";
import Footer from "./components/Footer";
import HomeHero from "./components/Home/HomeHero";
import PopularCategorySection from "./components/CommonSections/PopularCategorySection";

export default function Home() {
  return (
    <>
      <HomeHero/>
      <PopularCategorySection/>
    </>
  );
}
