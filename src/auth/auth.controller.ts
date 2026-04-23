import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto, UserLoginDto, UserRegisterDto } from 'users/dto/AuthDto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	register(@Body() userDto: UserRegisterDto){
		return this.authService.register(userDto);
	}

	@Post('login')
	@HttpCode(HttpStatus.OK)
	login(@Body() userDto: UserLoginDto){
		console.log(userDto);
		return this.authService.loing(userDto);
	}
}
