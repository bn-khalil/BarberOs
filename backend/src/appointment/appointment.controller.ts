import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { JwtAuthGuard } from 'auth/auth.guard';
import { AppointmentDto } from './dto/appointmentDto';
import { GetSlotDto } from './dto/slotDto';

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

	@Get('slots')
	async getAvailableSlots(
		@Query() slot: GetSlotDto,
	) {
		return this.appointmentService.getAvailableSlots(slot.barber_id, slot.day);
	}

	@Get(':id')
	async getAppoitment(
		@Param('id') id: string
	) {
		console.log(id)
		return this.appointmentService.getAppointmentByUser(id);
	}
}
