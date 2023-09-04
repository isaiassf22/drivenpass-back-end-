import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './users.Repository';

@Injectable()
export class UsersService {

  constructor( private readonly repository:  UserRepository){}

  async create(createUserDto: CreateUserDto) {
    return await this.repository.create(createUserDto)
  }

  async findAll() {
    return await this.repository.findAll()
  }

  async findOne(id: number) {
    return await this.repository.findOne(id)
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await  this.repository.update(id,updateUserDto)
  }

  async remove(id: number) {
    return await this.repository.remove(id)
  }
}