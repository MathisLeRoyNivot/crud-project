import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { User } from './user.entity';

@Injectable()
export class UserService {
    // Static User insertion
    constructor(
        private readonly dbService: DbService
    ) {}

    addUser(username: String, password: String, roles: Array<String>) {
        // let newUser = new User(username, password, roles)
        // return this.dbService.addUser(newUser);
        return "User added";
    }

    findOneById(id: string) {
        return this.dbService.getUserById(id);
    }
    
    findOneByName(username: string) {
        return this.dbService.getUserByName(username);
    }

    findAll() {
        // return this.dbService.getUsers();
        return "All Users";
    }
}
