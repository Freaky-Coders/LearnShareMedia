import { NextApiResponse, NextApiRequest} from "next";
import { ApiError } from "./ApiError";
import { CreateErrorResponse } from "./ApiResponse";

type HandlerFunction = (
    req: NextApiRequest,
    res: NextApiResponse
) => Promise<void>;


export const asyncHandler = (fn: HandlerFunction) => {
    return (req: NextApiRequest, res: NextApiResponse) => {
        fn(req, res).catch(error => {
            if(error instanceof ApiError){
                res
                .status(error.statusCode)
                .json(CreateErrorResponse(error.message, error.statusCode))
            }else {
                res.status(500).json(CreateErrorResponse('Internal Server Error', 500))
              }        
        })
    }
}