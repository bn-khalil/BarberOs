import { Injectable } from '@nestjs/common';
import { AppointmentDto, AppointmentResponseDto } from './dto/appointmentDto';
import { AppointmentRepository } from './appointment.repository';
import { Appointment } from './appointment.entity';

@Injectable()
export class AppointmentService {

    constructor(private readonly appointmentRepositor: AppointmentRepository){}

    async createAppointment(dto: AppointmentDto): Promise<AppointmentResponseDto | null> {
        let total_duration: number = 0;
        let total_price: number = 0;
        const entity = new Appointment();
        
        dto.serviceInfos.forEach(service => {
            total_duration += service.duration;
            total_price += service.price;
        });

        const endedAt = new Date(dto.startedAt);
        endedAt.setMinutes(endedAt.getMinutes() + total_duration);
        // // init entity
        entity.total_duration = total_duration;
        entity.total_price = total_price;
        entity.started_at = dto.startedAt;
        entity.ended_at = endedAt;
        entity.status = dto.status;

        return null;
    }
}
