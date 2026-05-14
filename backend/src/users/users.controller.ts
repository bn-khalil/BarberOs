import { Body, Controller, Get, HttpCode, HttpStatus, Param, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'auth/auth.guard';
import { Roles } from './user.role';
import { RolesGuard } from './users.Roleguard';
import { UserRole } from './users.enum';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
	) {}

	@Get()
	@HttpCode(HttpStatus.OK)
	@Roles(UserRole.ADMIN)
	getAllUsers(){
		return this.usersService.getAllUsers();
	}

	@Get('/clients')
	@HttpCode(HttpStatus.OK)
	@Roles(UserRole.ADMIN)
	getAllClients(){
		return this.usersService.getAllClients();
	}
}
