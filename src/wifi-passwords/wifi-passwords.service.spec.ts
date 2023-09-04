import { Test, TestingModule } from '@nestjs/testing';
import { WifiPasswordsService } from './wifi-passwords.service';

describe('WifiPasswordsService', () => {
  let service: WifiPasswordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WifiPasswordsService],
    }).compile();

    service = module.get<WifiPasswordsService>(WifiPasswordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
