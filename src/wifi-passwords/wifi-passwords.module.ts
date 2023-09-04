import { Module } from '@nestjs/common';
import { WifiPasswordsService } from './wifi-passwords.service';
import { WifiPasswordsController } from './wifi-passwords.controller';

@Module({
  controllers: [WifiPasswordsController],
  providers: [WifiPasswordsService],
})
export class WifiPasswordsModule {}
