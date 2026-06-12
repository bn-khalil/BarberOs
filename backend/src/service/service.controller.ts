import { Body, Controller, Get, HttpCode, HttpStatus, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceDto } from './dto/serviceDto';
import { JwtAuthGuard } from 'auth/auth.guard';
import { Roles } from 'users/user.role';
import { UserRole } from 'users/users.enum';
import { RolesGuard } from 'users/users.Roleguard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('services')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

	@Get()
	@HttpCode(HttpStatus.OK)
	listServices(){
		return this.serviceService.getAllServices();
	}
	
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Roles(UserRole.ADMIN)
	@Post()
	@UseInterceptors(FileInterceptor('image', {
  		storage: diskStorage({
			destination: './uploads',
			filename: (req, file, callback) => {
			const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
			const ext = extname(file.originalname);
			callback(null, `service-${file.fieldname}-${uniqueSuffix}${ext}`);
			},
		}),
	}))
	@HttpCode(HttpStatus.CREATED)
	addService(
		@UploadedFile() file: Express.Multer.File,
		@Body() serviceDto: ServiceDto
	): void {
		serviceDto.base_url = file.filename
		this.serviceService.addNewService(serviceDto);
	}

}
