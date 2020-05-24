import { DbService } from '../db/db.service';
export declare class UserService {
    private readonly dbService;
    constructor(dbService: DbService);
    addUser(username: String, password: String, roles: Array<String>): string;
    findOneById(id: string): Promise<JSON>;
    findOneByName(username: string): Promise<JSON>;
    findAll(): string;
}
