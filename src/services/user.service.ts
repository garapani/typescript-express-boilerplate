// UserService.ts
import { injectable, inject } from 'tsyringe';
import UserRepository from '../repositories/user.repository';
import User from '../models/user';

@injectable()
class UserService {
    constructor(@inject(UserRepository.name) private userRepository: UserRepository) { }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.getAllUsers();
    }
}

export default UserService;
