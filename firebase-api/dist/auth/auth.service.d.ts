import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    checkUser(username: string, pass: string): Promise<any>;
    login(user: any, checkAdmin?: boolean): Promise<{
        access_token: string;
        error?: undefined;
    } | {
        error: string;
        access_token?: undefined;
    }>;
}
