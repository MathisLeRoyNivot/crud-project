import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {

    // ID
    @PrimaryGeneratedColumn('uuid')
    id: string;

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
}
