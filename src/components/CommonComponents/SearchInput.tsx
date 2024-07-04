import React from 'react'
import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className='border-none rounded-full'><FaSearch/></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md w-[380px]">
          <DialogHeader>
            <DialogTitle>Search Material</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                placeholder='Search anything'
              />
            </div>
            <Button type="submit" size="sm" className="bg-primary-700 px-3 text-white h-full">
              <span>Search</span>
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SearchInput
