'use client'
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const Page = () => {
    const { toast } = useToast();
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!image) {
                return;
            }
            const formData = new FormData();
            formData.append("image", image);

            const response = await axios.post("/api/checkrouter", formData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const checkagain = () => {
        console.log('india')
        toast({
            title: "India",
            description: "India"
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='py-[150px] bg-primary-500'>
                <input onChange={handleChange} type="file" />
                <button type="submit">Submit</button>
            </form>
            <button onClick={checkagain}>Show Toast</button>
        </>
    );
}

export default Page;
