import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Bill } from './bill';
import { BillService } from './bill.service';

@Crud({
    model: {
        type: Bill,
    },
})

@Controller('bill')
export class BillController {
    constructor(public service: BillService) {}
}
