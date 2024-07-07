// src/app/api/resources-share/route.ts
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import dbConnect from "@/lib/dbConnect";
import ResourcesModel from "@/model/resources.model";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(request: Request) {
  try {
    await dbConnect();

    const formData = await request.formData();
    console.log(formData);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const tags = JSON.parse(formData.get('tags') as string);
    const category = formData.get('category') as string;
    const subCategory = formData.get('subCategory') as string;
    const file = formData.get('file') as File;
    console.log("FILE CONSOLE:- ", file)

    if (!file) {
      return NextResponse.json({ message: 'Missing required parameter - file' }, { status: 400 });
    }

    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: 'learnsharemedia'
    });

    console.log("Secure url:- ", uploadResponse.secure_url)

    const newResource = new ResourcesModel({
      title,
      description,
      file: uploadResponse.secure_url,
      category,
      subcategory: subCategory,
      tags
    });

    await newResource.save();

    return NextResponse.json({ message: 'Resource shared successfully', data: newResource }, { status: 201 });
  } catch (error) {
    console.error('Error sharing resource:', error);
    return NextResponse.json({ message: 'Error sharing resource', error }, { status: 500 });
  }
}
