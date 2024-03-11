// container.ts
import { container } from 'tsyringe';
import UserRepository from './repositories/user.repository';
import UserService from './services/user.service';
import UserController from './controllers/user.controller';

// Register UserRepository as a singleton
container.register<UserRepository>(UserRepository.name, {
    useClass: UserRepository,
});

// Register UserService with UserRepository dependency
container.register<UserService>(UserService.name, {
    useClass: UserService,
});

// Register UserController with UserService dependency
container.register<UserController>(UserController.name, {
    useClass: UserController,
});

export default container;