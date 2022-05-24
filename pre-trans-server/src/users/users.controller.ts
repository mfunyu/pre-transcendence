import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Post()
  addUser(
    @Body('id') id: string,
    @Body('nickname') nickname: string,
    @Body('password') password: string,
  ): User {
    const user: User = {
      id,
      nickname,
      password,
      level: 0,
    };
    return this.usersService.addUser(user);
  }
}
