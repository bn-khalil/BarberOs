import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { AppointmentRepository } from './appointment.repository';
import { Appointment } from './appointment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'users/users.module';
import { BarberModule } from 'barber/barber.module';
import { ServiceModule } from 'service/service.module';

@Module({
    imports: [
      TypeOrmModule.forFeature([Appointment]),
      UsersModule,
      BarberModule,
      ServiceModule
    ],
    controllers: [AppointmentController],
    providers: [AppointmentService, AppointmentRepository],
})
export class AppointmentModule {}
