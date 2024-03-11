// UserController.ts
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import UserService from '../services/user.service';

@injectable()
class UserController {
    constructor(@inject(UserService.name) private userService: UserService) { }

    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default UserController;
