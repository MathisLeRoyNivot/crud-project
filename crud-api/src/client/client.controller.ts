import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Client } from './client';
import { ClientService } from './client.service';

@Crud({
    model: {
        type: Client,
    },
})

@Controller('client')
export class ClientController {
    constructor(public service: ClientService) {}
}
