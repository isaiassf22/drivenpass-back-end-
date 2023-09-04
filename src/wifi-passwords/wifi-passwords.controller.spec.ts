import { Test, TestingModule } from '@nestjs/testing';
import { WifiPasswordsController } from './wifi-passwords.controller';
import { WifiPasswordsService } from './wifi-passwords.service';

describe('WifiPasswordsController', () => {
  let controller: WifiPasswordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WifiPasswordsController],
      providers: [WifiPasswordsService],
    }).compile();

    controller = module.get<WifiPasswordsController>(WifiPasswordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
