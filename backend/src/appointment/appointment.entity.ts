import { BaseEntity } from "app.baseEntity";
import { Barber } from "barber/barber.entity";
import { User } from "users/users.entity";
import { APPOINT_STATUS } from "./appointment.enum";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Service } from "service/service.entity";
import { JoinTableMultipleColumnsOptions } from "typeorm/decorator/options/JoinTableMultipleColumnsOptions.js";

@Entity('appointment')
export class Appointment extends BaseEntity {

    @ManyToOne(()=>Barber, (barber)=>barber.appointments)
    barber: Barber;

    @ManyToOne(()=>User, (user)=>user.appointments)
    customer: User;

    @ManyToMany(() => Service, (service) => service.appointments)
    @JoinTable({
        name: 'appointment_service',
        joinColumns: [
            {
                name: 'appointment_id',
                referencedColumnName: 'id'
            }
        ],
        inverseJoinColumns: [
            {
                name: 'service_id',
                referencedColumnName: 'id'
            }
        ]
    } as JoinTableMultipleColumnsOptions)
    services: Service[];

    @Column({
        nullable: false,
        type: "enum",
        enum: APPOINT_STATUS,
        default: APPOINT_STATUS.PENDING
    })
    status: APPOINT_STATUS;

    @Column({nullable: false, default:0})
    total_duration: number;

    @Column({
        nullable: false,
        default: 0
    })
    total_price: number;

   @Column({ type: 'timestamptz' })
    started_at: Date;

    @Column({ type: 'timestamptz' })
    ended_at: Date;
}