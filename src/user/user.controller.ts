import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-users-dto';
import { UpdateUserDTO } from './dtos/update-users-dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  /*
  GET    /users/:id
  POST   /users
  PATCH  /users/:id
  DELETE /users/:id
  */
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'STUDENT' | 'TEACHER') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
  @Post()
  create(
    @Body(ValidationPipe)
    createUserDTO: CreateUserDTO,
  ) {
    return this.userService.createUser(createUserDTO);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe)
    updateUsersDTO: UpdateUserDTO,
  ) {
    return this.userService.update(id, updateUsersDTO);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
