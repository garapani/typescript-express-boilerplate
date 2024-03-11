import { injectable } from "tsyringe";
import User from "../models/user";

@injectable()
// UserRepository.ts
class UserRepository {
    getAllUsers(): Promise<User[]> {
        // This would typically interact with a database
        return Promise.resolve([
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
        ]);
    }
}

export default UserRepository;
