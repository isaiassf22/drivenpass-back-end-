import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WifiPasswordsService } from './wifi-passwords.service';
import { CreateWifiPasswordDto } from './dto/create-wifi-password.dto';
import { UpdateWifiPasswordDto } from './dto/update-wifi-password.dto';

@Controller('wifi-passwords')
export class WifiPasswordsController {
  constructor(private readonly wifiPasswordsService: WifiPasswordsService) {}

  @Post()
  create(@Body() createWifiPasswordDto: CreateWifiPasswordDto) {
    return this.wifiPasswordsService.create(createWifiPasswordDto);
  }

  @Get()
  findAll() {
    return this.wifiPasswordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wifiPasswordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWifiPasswordDto: UpdateWifiPasswordDto) {
    return this.wifiPasswordsService.update(+id, updateWifiPasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wifiPasswordsService.remove(+id);
  }
}
