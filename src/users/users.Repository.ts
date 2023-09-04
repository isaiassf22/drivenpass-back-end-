import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserRepository {

  constructor(private readonly prisma: PrismaClient) { }

  async create(createUserDto: CreateUserDto) {
    const { email, password, username } = createUserDto
    return await this.prisma.users.create({
      data: {
        email, password, username
      }
    })
  }

  async findAll() {
    return await this.prisma.users.findMany()
  }

  async verify(email: string){
    return await this.prisma.users.findFirst({
      where:{ email}
    })
  }

  async findOne(id: number) {
    return await this.prisma.users.findFirst({
      where: { id }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { email, password, username } = updateUserDto

    return await this.prisma.users.update({
      where: { id },
      data: {
        email, password, username
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.users.delete({
      where: {id}
    })
  }
}
