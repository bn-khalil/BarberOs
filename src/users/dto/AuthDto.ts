import { Barber } from "barber/barber.entity";
import { STATUS } from "barber/barber.enum";
import { dot } from "node:test/reporters";
import { User } from "users/users.entity";
import { UserRole } from "users/users.enum";

export class UserLoginDto {
    phoneNumber: string;
    passowrd: string;
}

export class UserRegisterDto {
    first_name: string;
    last_name: string;
    phone_number: string;
    password: string;
    role: UserRole;
}

export class UserDto{

    id: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    role: UserRole;

    static fromEntity(user: User): UserDto {
        const dto = new UserDto();
        dto.id = user.id;
        dto.first_name = user.first_name;
        dto.last_name = user.last_name;
        dto.phone_number = user.phone_number;
        dto.role = user.role;
        return dto;
    }

    static fromDto(dto: UserDto): UserDto {
        const user = new User();
        user.first_name = dto.first_name;
        user.last_name = dto.last_name;
        user.phone_number = dto.phone_number;
        user.role = dto.role;
        return user;
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