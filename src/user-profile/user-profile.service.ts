import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserProfileService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createUserProfileDto: Prisma.UserCreateInput) {
    return await this.databaseService.user.create({
      data: createUserProfileDto,
    });
  }

  async findAll(role?: 'ADMIN' | 'STUDENT' | 'TEACHER') {
    return await this.databaseService.user.findMany({
      where: {
        role,
      },
    });
    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserProfileDto: Prisma.UserUpdateInput) {
    return await this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserProfileDto,
    });
  }

  async remove(id: number) {
    return await this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
