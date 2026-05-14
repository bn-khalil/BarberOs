import { APPOINT_STATUS } from "appointment/appointment.enum";
import { STATUS } from "barber/barber.enum";

export class AppointmentDto {
    id: string;
    costmerId: string;
    barberId: string;
    status: APPOINT_STATUS;
    serviceInfos: {id: string, price: number, duration: number}[];
    startedAt: Date;
}

export class AppointmentResponseDto {
    id: string;
    costmerId: string;
    barberId: string;
    status: STATUS;
    total_duration: number;
    servicesIds: string[];
    startedAt: Date;
    endedAt: Date;
    totalDuration: number;
}
