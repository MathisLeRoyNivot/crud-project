import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as fs from 'fs';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    //Check if user exists
    async checkUser(username: string, pass: string): Promise<any> {
        
        // Retrieve JSON from UserService method 
        const userData = await this.userService.findOneByName(username);

        // Instancing new User
        const user = new User(userData["username"], userData["password"], userData["roles"]);
        

        // Test user and password association
        if (user && user.getPassword()) {

            //Initialize bcrypt
            const bcrypt = require('bcrypt');

            // Compare Plaint text password with hash
            const isMatching: boolean = await bcrypt.compare(pass, user.getPassword());

            if (isMatching) {
                const { password, ...result } = user; // Obscure syntax to retrieve all the user object without password
                return result;
            } else {
                return null;
            }
        }
    }

    //Return a JWT with user credentials
    async login(user: any, checkAdmin: boolean = false) {
        const payload = { username: user.username, sub: user.userId, roles: user.roles, publicKey: fs.readFileSync('src/auth/public.key', 'utf8')};

        if (checkAdmin) {
            // Condition to test
            const isAdmin = (role) => role === 'admin';

            // true if one item in array match the isAdmin method
            if (user.roles.some(isAdmin)) { 
                return {
                    access_token: this.jwtService.sign(payload),
                };
            }
            else {
                return {
                    error: 'Insufficient privileges'
                }
            }
        } else {
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
    }
}
