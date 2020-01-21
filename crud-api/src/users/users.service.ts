import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {

    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'jeanneige',
                password: '$2b$10$X2mthg4XJsrY.HkZbYE/Y.H1i4yP0oTK2xyVZn7vW42LlzsvP1CHK',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
