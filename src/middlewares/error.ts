import { ApiError } from './../helpers/api-error';
import { NextFunction, Request, Response } from 'express'


export const errorMiddleware = (
    error: Error & Partial<ApiError>,
     req: Request,
     res: Response,
    next: NextFunction
    ) => {
        console.log(error)


    const statusCode = error.statusCode ?? 500
    const message = error.statusCode ? error.message : 'erro interno'
    return res.status(statusCode).json({ message})
}
