import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { AppointmentDto, AppointmentResponseDto } from './dto/appointmentDto';
import { AppointmentRepository } from './appointment.repository';
import { Appointment } from './appointment.entity';
import { BarberRepository } from 'barber/barber.repository';
import { userRepository } from 'users/users.repository';
import { serviceRepository } from 'service/service.repository';
import { Between, In } from 'typeorm';
import { Slot } from './dto/slot';
import { SLOT_STATUS } from './appointment.enum';
import { format } from 'date-fns';

@Injectable()
export class AppointmentService {

    constructor(
        private readonly appointmentRepositor: AppointmentRepository,
        private readonly barberRepository: BarberRepository,
        private readonly userRepository: userRepository,
        private readonly serviceRepository: serviceRepository,
    ){}

    async getAppointmentByUser(id: string): Promise<AppointmentResponseDto>  {
        try{
            const customer = await this.userRepository.manager.findOneBy({id: id});
            if (!customer)
                throw new NotFoundException("user not found!");
            const appointment = await this.appointmentRepositor.manager.findOne({
                where: {customer: {id: id}},
                relations:{
                    barber: true,
                    customer: true,
                    services: true
                },
            });
            if (!appointment)
                throw new NotFoundException("appointment not found!");
            console.log(appointment)
            return AppointmentResponseDto.toDtoResponse(appointment);
        } catch (error: any) {
            throw error;
        }
    }

    // should add a limit for appointments to avoid rebook a booked time
    // and put a limited time form 9 to 20
    // each client can book one at the day
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
            
            const appointment = await this.appointmentRepositor.manager.findOne({where: {customer: {id: customer.id}}});
            if (appointment)
                throw new ConflictException("the user already has a book!");

            const services = await this.serviceRepository.manager.findBy({id: In(dto.serviceIds)});
            if (!services || services.length != dto.serviceIds.length)
                throw new NotFoundException("There was a problem while chosing service!");
            
            services.forEach(service => {
                total_duration += service.duration;
                total_price += service.price;
            });
    
            const endedAt = new Date(dto.startedAt);
            endedAt.setMinutes(endedAt.getMinutes() + total_duration);
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

    async getAvailableSlots(barberId: string, day: string): Promise<Slot[]>{
        try {
            const barber = await this.barberRepository.manager.findOne({where: {id: barberId}});
            if (!barber)
                throw new NotFoundException("Barber Not Found!");
                
            const startOfDay = new Date(`${day}T09:00:00.000Z`);
            const endOfDay = new Date(`${day}T20:00:00Z`);

            const appointmentInDay = await this.appointmentRepositor.manager.findBy({started_at: Between(startOfDay, endOfDay), barber:{id : barber.id}});

            const unavalableSlots: Slot[] = appointmentInDay.map(appointment => {
                const slot = new Slot();
                slot.barberId = barber.id;
                slot.day = day;
                slot.slotStart = format(appointment.started_at, 'HH:mm');
                slot.slotEnds = format(appointment.ended_at, 'HH:mm');
                slot.status = SLOT_STATUS.UNAVAILABLE;
                return slot;
            })
            return unavalableSlots;
        } catch (error) {
            throw error;
        }
    }
}
