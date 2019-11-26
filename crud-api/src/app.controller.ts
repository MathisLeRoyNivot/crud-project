import { Controller, Get, UseGuards, Post, Request, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly authService: AuthService,
    ) { }

    // Default Route
    @Get()
    getHello(): string {
        return this.appService.getHello();
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
    addProduct(@Request() req) {
        return 'PRODUCT ADDED'; // Add Product
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
        return 'PRODUCTS'; // Get Products infos
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
