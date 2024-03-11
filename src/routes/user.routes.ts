import express, { Application, Router, Request, Response } from "express";
const router = express.Router();
import UserController from "../controllers/user.controller";
import container from '../container';

router.get('/', async (req: Request, res: Response) => {
    try {
        console.log(container);
        const userController = container.resolve<UserController>(UserController.name);
        await userController.getAllUsers(req, res);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
export default router;