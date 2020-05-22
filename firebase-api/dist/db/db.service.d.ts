import { User } from '../user/user.entity';
export declare class DbService {
    private db;
    constructor();
    addUser(user: User): Promise<void>;
    getUsers(): Promise<JSON[]>;
    getUserByName(username: String): Promise<JSON>;
    getUserById(id: String): Promise<JSON>;
}
