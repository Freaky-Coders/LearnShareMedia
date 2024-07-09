'use client';
import Navbar from "./Navbar";
import CategoryNavbar from "./CategoryNavbar";
import { usePathname } from "next/navigation";

export const DynamicNavbar = () => {
    const pathname = usePathname();

    if (pathname.startsWith("/categories") || pathname.startsWith("/resources") || (pathname.startsWith("/share-resources")) || (pathname.startsWith("/category"))) {
        return <CategoryNavbar />;
    }

    return <Navbar />;
};
