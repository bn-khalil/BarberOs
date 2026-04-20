import { STATUS } from "barber/barber.enum";
import { User } from "users/users.entity";

export class barberDto {
    experience_years: number;
    status: STATUS;
    working_hours: number;
    owner: User;
}