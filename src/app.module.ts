import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CredentialsModule } from './credentials/credentials.module';
import { SafetyModule } from './notes/safety/safety.module';
import { CreditCardsModule } from './credit-cards/credit-cards.module';
import { WifiPasswordsModule } from './wifi-passwords/wifi-passwords.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, CredentialsModule, SafetyModule, CreditCardsModule, WifiPasswordsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
