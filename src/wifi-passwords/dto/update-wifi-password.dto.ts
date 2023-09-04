import { PartialType } from '@nestjs/mapped-types';
import { CreateWifiPasswordDto } from './create-wifi-password.dto';

export class UpdateWifiPasswordDto extends PartialType(CreateWifiPasswordDto) {}
