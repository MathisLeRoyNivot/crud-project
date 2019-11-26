import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { uuidv4 } from 'uuid';

@Entity()
export class Client {

    // ID
    @PrimaryGeneratedColumn()
    id: number;

    // Client First Name
    @Column()
    firstname: string;

    // Client Last Name
    @Column()
    lastname: string;

    // Client Email
    @Column()
    email: string;

    // Client Address
    @Column()
    address: string;

    // Client Postal Code
    @Column()
    postalCode: string;

    // Client Country Code
    @Column()
    countryIsoCode: string;

    // Client Creation Date
    @Column({
        type: 'datetime',
        default: Date.now(),
    })
    createdAt: Date;

    // UUID
    @Column({
        type: 'varchar',
        length: 255,
        default: uuidv4(),
    })
    uuid: string;
}
