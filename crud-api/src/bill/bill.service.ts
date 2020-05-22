import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Bill } from './bill';

@Injectable()
export class BillService extends TypeOrmCrudService<Bill> {
    constructor(@InjectRepository(Bill) billRepo) {
        super(billRepo);
    }
}
