import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Telemetry
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:255})
    temp?: string;

    @Column({length:255})
    humid?: string;

    @Column({length:255})
    created_on: string;
}
