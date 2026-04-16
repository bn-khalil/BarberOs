import { Column, Entity } from "typeorm";
import { STATUS } from "./barber.enum";
import { BaseEntity } from "app.baseEntity";

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
        nullable:false,
    })
    status: STATUS;

    @Column({
        nullable: false,
        default: 0
    })
    working_hours: Number;
}