import { Appointment } from "appointment/appointment.entity";
import { APPOINT_STATUS } from "appointment/appointment.enum";

export class AppointmentDto {
    id: string;
    costmerId: string;
    barberId: string;
    status: APPOINT_STATUS;
    serviceIds: string[];
    startedAt: Date;
}

export class AppointmentResponseDto {
    id: string;
    costmerId: string;
    barberId: string;
    status: APPOINT_STATUS;
    servicesIds: string[];
    startedAt: Date;
    endedAt: Date;
    totalDuration: number;
    totalPrice: number;

    static toDtoResponse(entity: Appointment): AppointmentResponseDto{
        const dto = new AppointmentResponseDto()
        dto.id = entity.id;
        dto.costmerId = entity.customer.id;
        dto.barberId = entity.barber.id;
        dto.status = entity.status;
        dto.startedAt = entity.started_at;
        dto.endedAt = entity.ended_at;
        dto.totalDuration = entity.total_duration;
        dto.totalPrice = entity.total_price;
        dto.servicesIds = entity.services.map(service => service.id);
        return dto;
    }
}
