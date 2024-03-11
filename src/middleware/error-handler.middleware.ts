import { Request, Response, NextFunction } from 'express';

export const errorHandlerMiddleware: (err: Error, req: Request, res: Response, next: NextFunction) => void = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err.stack); // Log the error for debugging

    // Set appropriate status code based on error type (customizable)
    let statusCode = 500; // Default to internal server error
    if (err.name === 'ValidationError') {
        statusCode = 400; // Bad request for validation errors
    } else if (err.name === 'UnauthorizedError') {
        statusCode = 401; // Unauthorized for authentication errors
    } else if (err.name === 'NotFoundError') {
        statusCode = 404; // Not found for resource-related errors
    }

    // Provide user-friendly error message (avoid leaking sensitive information)
    let errorMessage = 'Internal server error';
    if (process.env.NODE_ENV === 'production') {
        // In production, don't expose internal details
    } else {
        // In development, provide more details for debugging
        errorMessage = err.message;
    }

    res.status(statusCode).json({ message: errorMessage });
};