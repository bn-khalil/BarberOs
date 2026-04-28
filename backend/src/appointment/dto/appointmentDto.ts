import { STATUS } from "barber/barber.enum";

export class appointmentDto {
    costmerId: string;
    barberId: string;
    status: STATUS;
    total_duration: number;
    createAt: Date;
    updateAt: Date;
}