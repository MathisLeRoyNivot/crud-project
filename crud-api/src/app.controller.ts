import { Controller, Get, UseGuards, Post, Request, Put, Delete, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { ProductsService } from './products/products.service';
import { Product } from './products/product.entity';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly authService: AuthService,
        private readonly productsService: ProductsService,
    ) { }

    // Default Route
    @Get()
    getHello(): string {
        return 'CRUD API';
    }

    // ************//
    // ****AUTH****//
    // ************//

    // Route to check login and get JWT
    @UseGuards(AuthGuard('local')) // Check if credentials match
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user); // Return JWT
    }

    // *************//
    // *****POST****//
    // *************//

    @UseGuards(AuthGuard('jwt'))
    @Post('clients')
    addClient(@Request() req) {
        return 'CLIENT ADDED'; // Add Client
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('products')
    addProduct(
        @Body('brand') brand: string,
        @Body('model') model: string,
        @Body('photo') photo: string,
        @Body('unitPrice') unitPrice: number,
        @Body('isAvailable') isAvailable: boolean,
        @Body('stock') stock: number,
    ) {
        const product = new Product(brand, model, photo, unitPrice, isAvailable, stock);
        return this.productsService.addProduct(product); // Add Product
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('bills')
    addBill(@Request() req) {
        return 'BILL ADDED'; // Add Bill
    }

    // ************//
    // *****GET****//
    // ************//

    @UseGuards(AuthGuard('jwt'))
    @Get('clients')
    getClients(@Request() req) {
        return 'CLIENTS'; // Get Clients infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('clients/:id')
    getClient(@Request() req) {
        return 'CLIENT'; // Get Client infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('products')
    getProducts(@Request() req) {
        return this.productsService.findProducts(); // Get Products infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('products/:id')
    getProduct(@Request() req) {
        return 'PRODUCT'; // Get Product infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('bills')
    getBills(@Request() req) {
        return 'BILLS'; // Get Bills infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('bills/:id')
    getBill(@Request() req) {
        return 'BILL'; // Get Bill infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('clients/:id/bills')
    getClientBills(@Request() req) {
        return 'CLIENT BILLS'; // Get Client Bills infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('clients/:id/banking-info')
    getClientBankingInfos(@Request() req) {
        return 'CLIENT BANKING INFOS'; // Get Client Banking Infos
    }

    // ************//
    // *****PUT****//
    // ************//

    @UseGuards(AuthGuard('jwt'))
    @Put('clients/:id')
    editClient(@Request() req) {
        return 'CLIENT EDITED'; // Edit Client infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('products/:id')
    editProduct(@Request() req) {
        return 'PRODUCT EDITED'; // Edit Product infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('clients/:id/banking-info')
    editClientBankingInfos(@Request() req) {
        return 'BANKING INFOS EDITED'; // Edit Client banking infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('bills/:id')
    editBill(@Request() req) {
        return 'PRODUCT EDITED'; // Edit Product infos
    }

    // ***************//
    // *****DELETE****//
    // ***************//

    @UseGuards(AuthGuard('jwt'))
    @Delete('clients/:id')
    deleteClient(@Request() req) {
        return 'CLIENT DELETED'; // Edit Product infos
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('products/:id')
    deleteProduct(@Request() req) {
        return 'PRODUCT DELETED'; // Edit Product infos
    }
}
