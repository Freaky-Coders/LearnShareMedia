import {z} from 'zod';

export const ContactPageSchema = z.object({
    name: z.string(),
    email: z.string().email({message: "Email is Invalid!"}),
    message: z.string().min(10, "Message Must be atleast 10 characters")
})
