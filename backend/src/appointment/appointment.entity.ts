import { BaseEntity } from "app.baseEntity";
import { Barber } from "barber/barber.entity";
import { User } from "users/users.entity";
import { STATUS } from "./appointment.enum";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('appointment')
export class Appointment extends BaseEntity {

    @ManyToOne(()=>Barber, (barber)=>barber.appointments)
    barber: Barber;

    @ManyToOne(()=>User, (user)=>user.appointments)
    customer: User;

    @Column({
        nullable: false,
        type: "enum",
        enum: STATUS,
        default: STATUS.PENDING
    })
    status: STATUS;

    @Column({nullable: false, default:0})
    total_duration: number;
}