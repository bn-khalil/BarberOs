import { Barber } from "barber/barber.entity";
import { STATUS } from "barber/barber.enum";
import { dot } from "node:test/reporters";
import { User } from "users/users.entity";
import { UserRole } from "users/users.enum";

export class UserLoginDto {
    phone_number: string;
    password: string;
}

export class UserRegisterDto {
    first_name: string;
    last_name: string;
    phone_number: string;
    password: string;
    role: UserRole;

    static fromDto(dto: UserRegisterDto): User {
        const user = new User();
        user.first_name = dto.first_name;
        user.last_name = dto.last_name;
        user.phone_number = dto.phone_number;
        user.role = dto.role;
        user.password = dto.password;
        return user;
    }
}

export class UserDto{

    id: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    role: UserRole;
    createdAt: Date;
    UpdatedAt: Date;

    static fromEntity(user: User): UserDto {
        const dto = new UserDto();
        dto.id = user.id;
        dto.first_name = user.first_name;
        dto.last_name = user.last_name;
        dto.phone_number = user.phone_number;
        dto.role = user.role;
        dto.UpdatedAt = user.updatedAt;
        dto.createdAt = user.createAt;
        return dto;
    }
}
