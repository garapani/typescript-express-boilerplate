import { Request, Response, NextFunction } from 'express';

export const notFoundHandlerMiddleware: (req: Request, res: Response, next: NextFunction) => void = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Check if any route handler has already been called (using middleware order)
    if (res.headersSent) {
        return next(); // Let other middleware handle the request
    }

    res.status(404).json({ message: 'Not Found' });
};