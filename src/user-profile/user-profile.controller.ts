import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { Prisma } from '@prisma/client';

@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post()
  create(@Body() createUserProfileDto: Prisma.UserCreateInput) {
    return this.userProfileService.create(createUserProfileDto);
  }

  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'STUDENT' | 'TEACHER') {
    return this.userProfileService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProfileService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserProfileDto: Prisma.UserUpdateInput,
  ) {
    return this.userProfileService.update(+id, updateUserProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProfileService.remove(+id);
  }
}
