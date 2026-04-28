import { Barber } from "barber/barber.entity";
import { STATUS } from "barber/barber.enum";
import { User } from "users/users.entity";

export class barberDto {
    id: string;
    experience_years: number;
    status: STATUS;
    working_hours: number;
    user_id: string;

    static fromEntity(user: Barber): barberDto {
        const dto = new barberDto();
        dto.experience_years = user.experience_years;
        dto.id = user.id;
        dto.status = user.status;
        dto.user_id = user.owner.id;
        dto.working_hours = user.working_hours;
        return dto;
    }
}

export class UserRegisterBarberDto {
    id: string;
    experience_years: number;
    status: STATUS;
    working_hours: number;
    user_id: string;

    static fromEntity(user: Barber): UserRegisterBarberDto {
        const dto = new UserRegisterBarberDto();
        dto.experience_years = user.experience_years;
        dto.id = user.id;
        dto.status = user.status;
        dto.user_id = user.owner.id;
        dto.working_hours = user.working_hours;
        return dto;
    }
}