import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { JwtAuthGuard } from 'auth/auth.guard';
import { AppointmentDto } from './dto/appointmentDto';

@Controller('appointment')
@UseGuards(JwtAuthGuard)
export class AppointmentController {
	constructor(private readonly appointmentService: AppointmentService) {}

	@Post()
	async createAppointment(
		@Body() appointmentDto: AppointmentDto
	) {
		return this.appointmentService.createAppointment(appointmentDto);
	}
}
