import dbConnect from "@/lib/dbConnect";
import CategoryModel from "@/model/categories.model";
import { CreateErrorResponse, CreateSuccessResponse } from "@/utils/ApiResponse";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try {
        await dbConnect();

        const CategoriesList = await CategoryModel.find();

        return NextResponse.json(CreateSuccessResponse("All Categories", 201, CategoriesList), {status: 201});

    } catch (error) {
        return NextResponse.json(CreateErrorResponse('Error Fetching Categories', 500), { status: 500 });
    }
}