import { Test, TestingModule } from '@nestjs/testing';
import { BankingInformationController } from './banking-information.controller';

describe('BankingInformation Controller', () => {
  let controller: BankingInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankingInformationController],
    }).compile();

    controller = module.get<BankingInformationController>(BankingInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
