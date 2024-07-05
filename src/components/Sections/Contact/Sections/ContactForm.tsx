'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { ContactPageSchema } from '@/schema/ContactUsSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import z from 'zod'
import { useForm } from 'react-hook-form'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const ContactForm = () => {

    const form = useForm<z.infer<typeof ContactPageSchema>>({
        resolver: zodResolver(ContactPageSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = async (data: z.infer<typeof ContactPageSchema>) => {
        console.log(data)
    }

    return (
        <>
            <section className='bg-primary-100 py-12'>
                <div className="md:w-4/12 mx-auto w-full px-8">
                    <div className="grid">
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="Your Name" 
                                                        {...field} 
                                                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                                                    />
                                                </FormControl>
                                                <FormMessage className='text-red-500' />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        placeholder="Your Email" 
                                                        {...field} 
                                                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                                                    />
                                                </FormControl>
                                                <FormMessage className='text-red-500' />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Message</FormLabel>
                                                <FormControl>
                                                    <Textarea 
                                                        placeholder="Type your message here." 
                                                        {...field} 
                                                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                                                    />
                                                </FormControl>
                                                <FormMessage className='text-red-500' />
                                            </FormItem>
                                        )}
                                    />
                                    <Button 
                                        type="submit" 
                                        className='w-full py-3 bg-primary-700 text-white rounded-md hover:bg-primary-800 active:bg-primary-900 transition duration-150'
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactForm
