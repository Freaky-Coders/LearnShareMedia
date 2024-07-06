'use client'
import Navbar from "./Navbar";
import CategoryNavbar from "./CategoryNavbar";
import { usePathname } from "next/navigation";


export const DynamicNavbar = () => {
    const pathname = usePathname();

    if(pathname.startsWith("/categories")){
        return <CategoryNavbar/>
    }

    return <Navbar/>

}