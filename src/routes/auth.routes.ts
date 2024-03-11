import express, { Application, Router, Request, Response } from "express";
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('auth routing');
});
export default router;
// export function registerAuthRoutes(app: Application) {
//     app.use('/test', function (req, res, next) {
//         console.log("auth Router Working");
//         res.end();
//     });
// }