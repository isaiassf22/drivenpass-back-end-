import { Injectable } from '@nestjs/common';
import { CreateWifiPasswordDto } from './dto/create-wifi-password.dto';
import { UpdateWifiPasswordDto } from './dto/update-wifi-password.dto';

@Injectable()
export class WifiPasswordsService {
  create(createWifiPasswordDto: CreateWifiPasswordDto) {
    return 'This action adds a new wifiPassword';
  }

  findAll() {
    return `This action returns all wifiPasswords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wifiPassword`;
  }

  update(id: number, updateWifiPasswordDto: UpdateWifiPasswordDto) {
    return `This action updates a #${id} wifiPassword`;
  }

  remove(id: number) {
    return `This action removes a #${id} wifiPassword`;
  }
}
