import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { BillModule } from './bill/bill.module';
import { BankingInformationModule } from './banking-information/banking-information.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), ProductModule, ClientModule, BillModule, BankingInformationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
