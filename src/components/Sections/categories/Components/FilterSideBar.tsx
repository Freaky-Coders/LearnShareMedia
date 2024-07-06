'use client'
import React, { useState } from 'react';
import { LuArrowDownFromLine } from "react-icons/lu";
import CategoriesData from './Category.json';
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

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
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setOpen(false); // Close the popover after selection
  };

  const filteredCategories = selectedCategory
    ? CategoriesData.filter((category) => category.id === selectedCategory)
    : CategoriesData;

  return (
    <div className='border-r border-gray-300 py-4 px-3 h-[90vh] sticky top-[130px] w-[25%] overflow-y-auto'>
      <div className='flex justify-between items-center border-b border-gray-300 pb-5 px-2'>
        <h2 className='text-2xl font-bold'>Filters</h2>
        <button type='button' className='rotate-90'>
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
                ? CategoriesData.find((framework) => framework.id === value)?.name
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
                  {CategoriesData.map((category) => (
                    <CommandItem
                      key={category.id}
                      value={category.id}
                      onSelect={() => handleCategoryChange(category.id)} // Call handleCategoryChange with category id
                    >
                      {category.name}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === category.id ? "opacity-100" : "opacity-0"
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
          <div key={category.id} className='mb-4'>
            <h3 className='text-xl font-semibold mb-2'>{category.name}</h3>
            {category.options.map((subcategory) => (
              <div key={subcategory.value} className='flex items-center mb-2'>
                <input
                  type="checkbox"
                  value={subcategory.value}
                  defaultChecked={subcategory.checked}
                  id={subcategory.value}
                  className='mr-2'
                />
                <label htmlFor={subcategory.value}>{subcategory.label}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSideBar;
