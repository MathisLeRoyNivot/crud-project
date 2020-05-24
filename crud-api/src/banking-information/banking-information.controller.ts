import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { BankingInformation } from './banking-information';
import { BankingInformationService } from './banking-information.service';

@Crud({
    model: {
        type: BankingInformation,
    },
})

@Controller('banking-information')
export class BankingInformationController {
    constructor(public service: BankingInformationService) {}
}
