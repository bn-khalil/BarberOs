import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceDto } from './dto/serviceDto';
import { JwtAuthGuard } from 'auth/auth.guard';
import { Roles } from 'users/user.role';
import { UserRole } from 'users/users.enum';
import { RolesGuard } from 'users/users.Roleguard';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

	@Get()
	@HttpCode(HttpStatus.OK)
	listServices(){
		console.log("enterd")
		return this.serviceService.getAllServices();
	}
	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRole.ADMIN)
	@Post()
	@HttpCode(HttpStatus.CREATED)
	addService(@Body() serviceDto: ServiceDto): void {
		this.serviceService.addNewService(serviceDto);
	}

}
