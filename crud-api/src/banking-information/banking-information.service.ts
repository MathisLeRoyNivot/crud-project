import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BankingInformation } from './banking-information';

@Injectable()
export class BankingInformationService extends TypeOrmCrudService<BankingInformation> {
    constructor(@InjectRepository(BankingInformation) bankingInformationRepo) {
        super(bankingInformationRepo);
    }
}
