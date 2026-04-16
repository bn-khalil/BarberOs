import { Column, Entity, Generated, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./users.enum";
import { BaseEntity } from "app.baseEntity";
import { Barber } from "barber/barber.entity";

@Entity('users')
export class User extends BaseEntity{

    @Column({
        nullable:false
    })
    first_name: string;

    @Column({
        nullable:false
    })
    last_name: string;

    @Column({
        length:10,
        unique:true,
        nullable:false
    })
    phone_number: string;

    @Column({
        nullable:false
    })
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.CUSTOMER
    })
    role: UserRole;

    @OneToOne(()=> Barber, )
    barber?: Barber;
}