import {z} from 'zod';

export const ShareResources = z.object({
    title: z.string().min(5, "Please Add At least 5 characters."),
    description: z.string().min(10, "Please Add At least 10 characters."),
    tags: z.array(z.string()),
    category: z.string(),
    subCategory: z.string(),
})
