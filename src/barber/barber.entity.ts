import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { STATUS } from "./barber.enum";
import { BaseEntity } from "app.baseEntity";
import { User } from "users/users.entity";
import { Appointment } from "appointment/appointment.entity";

@Entity('barbers')
export class Barber extends BaseEntity {

    @Column({
        nullable:false,
        default: 0
    })
    experience_years: number;

    @Column({
        type:"enum",
        enum:STATUS,
        default:STATUS.UNAVAILABLE,
    })
    status: STATUS;

    @Column({
        nullable: false,
        default: 0
    })
    working_hours: number;

    @OneToOne(()=> User, (user)=>user.barber, {cascade: true})
    @JoinColumn({name: 'user_id'})
    owner: User;

    @OneToMany(() => Appointment, (appointment)=> appointment.barber, {cascade: true})
    appointments?: Appointment[];
}