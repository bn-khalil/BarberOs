import { Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'auth/auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	getAllUsers(){
		return this.usersService.getAllUsers();
	}

	@Put(':id/toggle/tobarber')
	toggleToBarber(@Param() params: any){
		console.log(params.id);
	}
}
