import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./users.enum";

@Entity('users')
export class User{

    @PrimaryGeneratedColumn("uuid")
    id: string;

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

    @Column({default: UserRole.CUSTOMER})
    role: UserRole;
}