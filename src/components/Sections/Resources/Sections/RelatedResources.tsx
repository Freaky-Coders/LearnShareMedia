import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const RelatedResources = () => {

    const relatedResources = [
        {
            id: 1,
            title: 'Related Resource 1',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            title: 'Related Resource 2',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            title: 'Related Resource 3',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            title: 'Related Resource 4',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            title: 'Related Resource 5',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            title: 'Related Resource 6',
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 7,
            title: 'Related Resource 7',
            imageUrl: 'https://via.placeholder.com/150',
        }
    ];

    return (
        <>
            <div className="bg-primary-100 py-12">
                <div className="container rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Related Resources</h2>
                    <Carousel className="w-full">
                        <CarouselContent className="-ml-1">
                            {relatedResources.map((resources, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/2 lg:basis-1/4 bg-primary-500">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-2xl font-semibold">{resources.title}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default RelatedResources
