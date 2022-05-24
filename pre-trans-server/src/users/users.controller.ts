import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService){}

	@Get()
	getAll(): User[] {
		return this.usersService.getAll();
	}
}
