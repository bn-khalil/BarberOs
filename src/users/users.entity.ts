import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./users.enum";
import { min } from "rxjs";

@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
        length:10,
        unique:true,
        nullable:false
    })
    phone_number: number;

    @Column()
    password: string;

    @Column({default: UserRole.CUSTOMER})
    role: UserRole;
}