import { Module } from '@nestjs/common';
import { BankingInformation } from './banking-information';
import { BankingInformationController } from './banking-information.controller';
import { BankingInformationService } from './banking-information.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BankingInformation])],
  controllers: [BankingInformationController],
  providers: [BankingInformationService],
})
export class BankingInformationModule {}
