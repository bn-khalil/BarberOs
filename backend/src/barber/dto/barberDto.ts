import { Barber } from "barber/barber.entity";
import { STATUS } from "barber/barber.enum";
import { UserDto } from "users/dto/AuthDto";

export class barberDto {
    id: string;
    status: STATUS;
    user: UserDto;
    working_hours: number;
    experience_years: number;

    static fromEntity(user: Barber): barberDto {
        const dto = new barberDto();
        dto.id = user.id;
        dto.status = user.status;
        dto.user = UserDto.fromEntity(user.owner);
        dto.working_hours = user.working_hours;
        dto.experience_years = user.experience_years;
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