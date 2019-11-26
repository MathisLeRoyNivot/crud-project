import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly appService;
    private readonly authService;
    constructor(appService: AppService, authService: AuthService);
    getHello(): string;
    login(req: any): Promise<{
        access_token: string;
    }>;
    addClient(req: any): string;
    addProduct(req: any): string;
    addBill(req: any): string;
    getClients(req: any): string;
    getClient(req: any): string;
    getProducts(req: any): string;
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
