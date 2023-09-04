import { Injectable } from '@nestjs/common';
import { CreateSafetyDto } from './dto/create-safety.dto';
import { UpdateSafetyDto } from './dto/update-safety.dto';

@Injectable()
export class SafetyService {
  create(createSafetyDto: CreateSafetyDto) {
    return 'This action adds a new safety';
  }

  findAll() {
    return `This action returns all safety`;
  }

  findOne(id: number) {
    return `This action returns a #${id} safety`;
  }

  update(id: number, updateSafetyDto: UpdateSafetyDto) {
    return `This action updates a #${id} safety`;
  }

  remove(id: number) {
    return `This action removes a #${id} safety`;
  }
}
