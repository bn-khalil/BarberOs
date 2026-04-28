import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createAt: Date;

    @UpdateDateColumn({
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    updatedAt: Date;
}