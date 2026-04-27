import { Body, Controller, Get, HttpCode, HttpStatus, Param, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'auth/auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
	) {}

	@Get()
	@HttpCode(HttpStatus.OK)
	getAllUsers(){
		return this.usersService.getAllUsers();
	}
}
