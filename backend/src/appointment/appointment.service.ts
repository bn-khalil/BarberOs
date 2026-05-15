import { Injectable, NotFoundException } from '@nestjs/common';
import { AppointmentDto, AppointmentResponseDto } from './dto/appointmentDto';
import { AppointmentRepository } from './appointment.repository';
import { Appointment } from './appointment.entity';
import { BarberRepository } from 'barber/barber.repository';
import { userRepository } from 'users/users.repository';
import { serviceRepository } from 'service/service.repository';
import { Any, In } from 'typeorm';

@Injectable()
export class AppointmentService {

    constructor(
        private readonly appointmentRepositor: AppointmentRepository,
        private readonly barberRepository: BarberRepository,
        private readonly userRepository: userRepository,
        private readonly serviceRepository: serviceRepository,
    ){}

    async createAppointment(dto: AppointmentDto): Promise<AppointmentResponseDto> {
        let total_duration: number = 0;
        let total_price: number = 0;
        const entity = new Appointment();

        try {
            const barber = await this.barberRepository.manager.findOne({where: {id: dto.barberId}});
            if (!barber)
                throw new NotFoundException("Barber Not Found!");
            
            const customer = await this.userRepository.manager.findOne({where: {id: dto.costmerId}});
            if (!customer)
                throw new NotFoundException("Client Not Rgisterd!");
            
            const services = await this.serviceRepository.manager.findBy({id: In(dto.serviceIds)});
            if (!services || services.length != dto.serviceIds.length)
                throw new NotFoundException("There was a problem while chosing service!");
            
            services.forEach(service => {
                total_duration += service.duration;
                total_price += service.price;
            });
    
            const endedAt = new Date(dto.startedAt);
            endedAt.setMinutes(endedAt.getMinutes() + total_duration);
            // // init entity
            entity.barber = barber;
            entity.customer = customer;
            entity.total_duration = total_duration;
            entity.total_price = total_price;
            entity.started_at = dto.startedAt;
            entity.ended_at = endedAt;
            entity.status = dto.status;
            entity.services = services;
    
            const newAppointment = await this.appointmentRepositor.manager.save(entity);
            return AppointmentResponseDto.toDtoResponse(newAppointment);
        } catch (error: any) {
            throw error;
        }
    }
}
