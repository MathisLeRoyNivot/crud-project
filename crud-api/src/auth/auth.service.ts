import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService) { }

    // Check if user exists
    async checkUser(username: string, pass: string): Promise<any> {

        const user = await this.usersService.findOne(username);

        if (user && user.password) {
            // Initialize bcrypt Hash
            const bcrypt = require('bcrypt');

            const isLogin = await bcrypt.compare(pass, user.password);

            if (isLogin) {
                const { password, ...result } = user;
                return result;
            } else {
                return null;
            }
        }
    }

    // Return a JWT with user credentials
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
