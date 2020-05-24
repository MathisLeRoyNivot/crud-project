import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Client } from './client';

@Injectable()
export class ClientService extends TypeOrmCrudService<Client>{
    constructor(@InjectRepository(Client) clientRepo) {
        super(clientRepo);
    }
}
