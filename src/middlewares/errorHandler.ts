import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors';

export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).send({
            message: error.message
        })
    }

    return response.status(500).send({
        status: 'error',
        details: `Internal Server Error - ${error.message}`
    })
}