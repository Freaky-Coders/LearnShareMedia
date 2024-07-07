interface ApiResponse<T>{
    success: boolean,
    message: string,
    statusCode: number,
    data?: T,
    error?: string
}

export const CreateSuccessResponse = <T>(
    message: string,
    statusCode: number,
    data?: T,
): ApiResponse<T> => {
    return{
        success: true,
        message: message,
        statusCode: statusCode,
        data
    }
}


export const CreateErrorResponse = <T> (
    message: string,
    statusCode: number,
): ApiResponse<T> => {
    return{
        success: false,
        message: message,
        statusCode: statusCode
    }
}
