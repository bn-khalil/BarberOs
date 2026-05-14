import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntity } from "app.baseEntity";
import { Appointment } from "appointment/appointment.entity";

@Entity('services')
export class Service extends BaseEntity {
    @Column({nullable: false})
    title: string;

    @Column({nullable: false})
    description: string;

    @Column({nullable: false})
    price: number;

    @Column({
        nullable: false,
        default: 0
    })
    duration: number;

    @Column({ nullable: true })
    base_url: string;

    @ManyToMany(()=>Appointment, (appointment)=>appointment.services)
    appointments?: Appointment[];
}