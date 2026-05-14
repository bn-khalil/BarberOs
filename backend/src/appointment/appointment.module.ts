import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { AppointmentRepository } from './appointment.repository';
import { Appointment } from './appointment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      TypeOrmModule.forFeature([Appointment]),
    ],
    controllers: [AppointmentController],
    providers: [AppointmentService, AppointmentRepository],
})
export class AppointmentModule {}
