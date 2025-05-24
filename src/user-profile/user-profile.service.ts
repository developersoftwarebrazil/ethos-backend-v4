import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserProfileService {
  constructor(private readonly databseService: DatabaseService) {}
  async create(createUserProfileDto: Prisma.UsersCreateInput) {
    return await this.databseService.users.create({
      data: createUserProfileDto,
    });
  }

  async findAll(role?: 'ADMIN' | 'STUDENT' | 'TEACHER') {
    return await this.databseService.users.findMany({
      where: {
        role,
      },
    });
    return this.databseService.users.findMany();
  }

  async findOne(id: number) {
    return await this.databseService.users.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserProfileDto: Prisma.UsersUpdateInput) {
    return await this.databseService.users.update({
      where: {
        id,
      },
      data: updateUserProfileDto,
    });
  }

  async remove(id: number) {
    return await this.databseService.users.delete({
      where: {
        id,
      },
    });
  }
}
