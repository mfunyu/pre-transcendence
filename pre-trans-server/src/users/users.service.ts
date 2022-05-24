import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
	private users: User[] = [];

	getAll(): User[] {
		return this.users;
	}
}
