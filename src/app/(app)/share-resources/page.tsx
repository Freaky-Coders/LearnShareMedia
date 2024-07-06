'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ShareResources } from '@/schema/ShareResources'
import { useState } from 'react'
import TagsInput from '@/components/CommonComponents/TagsInput'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CategoriesData from './Category.json';

const ShareRecipe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [category, setCategory] = useState('')
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof ShareResources>>({
    resolver: zodResolver(ShareResources),
    defaultValues: {
      title: '',
      description: '',
      tags: [],
      category: '',
      subCategory: ''
    }
  })

  const { handleSubmit, control, reset } = form

  const onSubmit = async (data: z.infer<typeof ShareResources>) => {
    console.log(data)
  }

  // Filter subcategories based on the selected category
  const subCategories = category ? CategoriesData.find(cat => cat.id === category)?.options : []

  return (
    <div className="flex justify-center items-center min-h-screen px-5 py-10 pt-20 bg-gray-100 dark:bg-gray-900">
      <div className="w-full md:w-2/3 lg:w-1/2 p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Share a Knowledgeable Material
          </h1>
          <p className="mb-4">Add your pdf to LearnShareMedia collection</p>
        </div>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resources Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage className='text-red-500' />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description (Please provide a brief, one-line description)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage className='text-red-500' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={(value) => {field.onChange(value); setCategory(value);}} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a Category" />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          {
                            CategoriesData.map((category) => (
                              <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                            ))
                          }
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className='text-red-500' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a Sub Category" />
                      </SelectTrigger>
                      <SelectContent className='bg-white'>
                        <SelectGroup>
                          <SelectLabel>Sub Category</SelectLabel>
                          {
                            subCategories?.map((subCategory) => (
                              <SelectItem key={subCategory.value} value={subCategory.value}>{subCategory.label}</SelectItem>
                            ))
                          }
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className='text-red-500' />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <TagsInput value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage className='text-red-500' />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-primary-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  Wait... <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                'Submit Resources'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ShareRecipe
