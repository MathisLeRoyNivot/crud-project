import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { ProductsService } from './products/products.service';
import { Product } from './products/product.entity';
export declare class AppController {
    private readonly appService;
    private readonly authService;
    private readonly productsService;
    constructor(appService: AppService, authService: AuthService, productsService: ProductsService);
    getHello(): string;
    login(req: any): Promise<{
        access_token: string;
    }>;
    addClient(req: any): string;
    addProduct(brand: string, model: string, photo: string, unitPrice: number, isAvailable: boolean, stock: number): Promise<Product>;
    addBill(req: any): string;
    getClients(req: any): string;
    getClient(req: any): string;
    getProducts(req: any): Promise<Product[]>;
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
