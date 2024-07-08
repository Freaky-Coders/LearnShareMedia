import dbConnect from "@/lib/dbConnect";
import ResourcesModel from "@/model/resources.model";
import { CreateErrorResponse, CreateSuccessResponse } from "@/utils/ApiResponse";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try {
        await dbConnect();

        const ResourcesList = await ResourcesModel.find();

        return NextResponse.json(CreateSuccessResponse("All Resources", 201, ResourcesList), {status: 201});

    } catch (error) {
        return NextResponse.json(CreateErrorResponse('Error Fetching Categories', 500), { status: 500 });
    }
}