import { Test, TestingModule } from '@nestjs/testing';
import { BankingInformationService } from './banking-information.service';

describe('BankingInformationService', () => {
  let service: BankingInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankingInformationService],
    }).compile();

    service = module.get<BankingInformationService>(BankingInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
