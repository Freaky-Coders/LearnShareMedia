import { Input } from '@nextui-org/react'
import React from 'react'
import { LuSearch } from 'react-icons/lu'

const SearchInput = () => {
  return (
    <>
      <Input
          classNames={{
            base: "max-w-full sm:max-w-[15rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-white",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<LuSearch size={18} />}
          type="search"
        />

    </>
  )
}

export default SearchInput
