import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
export declare class AppController {
    private readonly appService;
    private readonly authService;
    private readonly userService;
    constructor(appService: AppService, authService: AuthService, userService: UserService);
    getHello(): string;
    getUsers(): string;
    login(req: any): Promise<{
        access_token: string;
        error?: undefined;
    } | {
        error: string;
        access_token?: undefined;
    }>;
    addClient(req: any): string;
    addBill(req: any): string;
    getClients(req: any): string;
    getClient(req: any): string;
    getProduct(req: any): string;
    getBills(req: any): string;
    getBill(req: any): string;
    getClientBills(req: any): string;
    getClientBankingInfos(req: any): string;
    editClient(req: any): string;
    editProduct(req: any): string;
    editClientBankingInfos(req: any): string;
    editBill(req: any): string;
    deleteClient(req: any): string;
    deleteProduct(req: any): string;
}
