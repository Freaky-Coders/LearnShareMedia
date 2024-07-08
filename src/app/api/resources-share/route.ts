import { NextResponse } from 'next/server';
import dbConnect from "@/lib/dbConnect";
import ResourcesModel from "@/model/resources.model";
import { UploadImage } from '@/lib/uploadpdfs';
import { CreateSuccessResponse, CreateErrorResponse } from '@/utils/ApiResponse';

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const tags = JSON.parse(formData.get('tags') as string);
    const category = formData.get('category') as string;
    const subCategory = formData.get('subCategory') as string;
    const myfile = formData.get('file') as File;
    console.log("check my file", myfile);

    const file = myfile;
    if (!file) {
      return NextResponse.json(CreateErrorResponse("Missing required parameter - file", 400), { status: 400 });
    }

    // Check file size limit (example: 10 MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(CreateErrorResponse("File size exceeds limit", 400), { status: 400 });
    }

    const data: any = await UploadImage(file, "LearnShareMediaPdfs");

    const newResource = new ResourcesModel({
      title,
      description,
      file: data?.secure_url,
      category,
      subcategory: subCategory,
      tags
    });

    await newResource.save();

    return NextResponse.json(CreateSuccessResponse('Your resource has been shared. 🙏 Thank you for your selfless act of sharing useful material!', 201, newResource), { status: 201 });
  } catch (error) {
    console.error('Error sharing resource:', error);
    return NextResponse.json(CreateErrorResponse('Error sharing resource', 500), { status: 500 });
  }
}