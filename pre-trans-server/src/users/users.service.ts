import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
	getAll() {
		return 'getAll called\n';
	}
}
