import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import LinkButton from '@/components/CommonComponents/LinkButton';

interface RelatedResourcesProps {
    Relatedcategory: string | undefined;
}

interface RelatedCategoryType {
    id: string;
    title: string;
    description: string;
    file: string;
}

const RelatedResources: React.FC<RelatedResourcesProps> = ({ Relatedcategory }) => {
    const { ResourcesData, error, loading } = useSelector((state: RootState) => state.resourcesData);
    const [relatedCategoryList, setRelatedCategoryList] = useState<RelatedCategoryType[]>([]);

    useEffect(() => {
        if (ResourcesData && Relatedcategory) {
            let filteredResources = ResourcesData.data.filter((resource: any) => resource.category === Relatedcategory);

            if (filteredResources.length < 7) {
                const additionalResources = ResourcesData.data.filter((resource: any) => resource.category !== Relatedcategory).slice(0, 7 - filteredResources.length);
                filteredResources = [...filteredResources, ...additionalResources];
            }

            const transformedResources: RelatedCategoryType[] = filteredResources.slice(0, 7).map((resource: any) => ({
                id: resource._id,
                title: resource.title,
                description: resource.description,
                file: resource.file,
            }));

            setRelatedCategoryList(transformedResources);
        }
    }, [ResourcesData, Relatedcategory]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const descLength = 40
    return (
        <div className="bg-primary-100 py-12">
            <div className="container rounded-lg">
                <h2 className="text-xl font-bold mb-4">Related Resources</h2>
                {/* <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                        {relatedCategoryList.map((resource, index) => (
                            <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/2 lg:basis-1/4 bg-primary-500">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-2xl font-semibold">{resource.title}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel> */}
                <Carousel
                    opts={{
                        align: 'start'
                    }}
                    className="w-full RelatedCourseSlider"
                >
                    <CarouselContent>
                        {relatedCategoryList.map((resource, index) => (
                            <CarouselItem
                                key={resource.id}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="p-1 relative">
                                    <Card className="relative bg-primary-700 text-white">
                                        <CardHeader>
                                            <div className="w-full h-[200px]">
                                                {/* <Image src={recipe.image} fill={true} alt={recipe.image}/> */}
                                                {/* <img
                                                    src={resource.file}
                                                    alt="image"
                                                    className="w-full h-full object-cover"
                                                /> */}
                                                <iframe src={resource.file} className='h-full w-full'></iframe>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="px-6">
                                            <CardTitle className="mb-3">{resource.title}</CardTitle>
                                            <CardDescription className='mb-3'>
                                                {resource.description.length > descLength
                                                    ? `${resource.description.slice(0, descLength)}...`
                                                    : resource.description}
                                            </CardDescription>
                                            {/* <Link
                                                href={}
                                                className="mt-3 bg-primary text-white font-bold bg-secondary-700 dark:text-black text-center py-2 rounded-md block"
                                            >
                                                View
                                            </Link> */}
                                            <LinkButton label='View' link={`/resources/${resource.id}`}/>
                                        </CardContent>
                                        {/* <Badge
                                            className="absolute top-6 left-0 bg-secondary text-white -rotate-45"
                                            variant="outline"
                                        >
                                            {recipe.type}
                                        </Badge> */}
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
    );
};

export default RelatedResources;
