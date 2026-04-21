import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto, UserRegisterDto } from 'users/dto/AuthDto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	register(@Body() userDto: UserRegisterDto){
		return this.authService.register(userDto);
	}
}
