'use client'
import React, { useState } from 'react';
import { LuArrowDownFromLine } from "react-icons/lu";
import CategoriesData from './Category.json';
import { CaretSortIcon, CheckIcon, CircleBackslashIcon, ReloadIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import {toggleFilterSidebar} from '@/lib/Features/FilterSidebar/filtersidebarSlice'
import Image from 'next/image';

type Option = {
  value: string;
  label: string;
  checked: boolean;
}

type Filter = {
  id: string;
  name: string;
  options: Option[];
}

const FilterSideBar = () => {

  const { categoriesList, error, loading } = useSelector((state: RootState) => state.categoriesList);
  const { ResourcesData } = useSelector((state: RootState) => state.resourcesData);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const isSidebarvisible = useSelector((state: RootState) => state.filterSidebarShow.filtersidebarshow);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setOpen(false);
  };


    const handleSidebarToggle = () => {
      dispatch(toggleFilterSidebar());
    }

  // Extracting categoriesList.data as CategoriesListExtract
  const CategoriesListExtract = categoriesList?.data || [];


  const filteredCategories = selectedCategory
    ? CategoriesListExtract.filter((category) => category.category === selectedCategory)
    : CategoriesListExtract;

  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center w-screen h-[90vh]'>
        <Image src={"/assets/Images/LoadingGIF.gif"} width={200} height={50} alt='LearnShareMedia' />
        <h4>Loading...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col justify-center items-center h-[90vh]'>
        <button
          className='bg-primary-500 px-3 py-3 text-white font-bold flex items-center gap-3'
          onClick={() => window.location.reload()}
          type='button'
        >
          Reload Page <ReloadIcon />
        </button>
        <h4>Error: {error}</h4>
      </div>
    );
  }

  return (
    <div className='h-[90vh] overflow-scroll sticky top-[90px]'>
      <div className='flex justify-between items-center border-b border-gray-300 pb-5 px-2 '>
        <h2 className='text-2xl font-bold'>Filters</h2>
        <button type='button' className='rotate-90' onClick={handleSidebarToggle}>
          <LuArrowDownFromLine className='text-2xl' />
        </button>
      </div>

      <div className='py-4'>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between bg-white"
            >
              {value
                ? CategoriesListExtract.find((category) => category.category === value)?.category
                : "Select Category..."}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full bg-white p-0">
            <Command>
              <CommandInput placeholder="Search category..." className="h-9" />
              <CommandList>
                <CommandEmpty>No Category found.</CommandEmpty>
                <CommandGroup>
                  {CategoriesListExtract.map((category) => (
                    <CommandItem
                      key={category.category}
                      value={category.category}
                      onSelect={() => handleCategoryChange(category.category)}
                    >
                      {category.category}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === category.category ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className='py-4'>
        {filteredCategories.map((category) => (
          <div key={category.category} className='mb-4'>
            <h3 className='text-xl font-semibold mb-2'>{category.category}</h3>
            {category.subCategory.map((subcategory) => (
              <div key={subcategory} className='flex items-center mb-2'>
                <input
                  type="checkbox"
                  value={subcategory}
                  // defaultChecked={subcategory.checked}
                  id={subcategory}
                  className='mr-2'
                />
                <label htmlFor={subcategory}>{subcategory}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSideBar;
