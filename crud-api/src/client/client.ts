import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Timestamp } from 'rxjs';

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lastname: string;

    @Column()
    firstname: string;

    @Column({name: 'email_address'})
    emailAddress: string;

    @Column()
    address: string;

    @Column()
    postcode: string;

    @Column({name: 'country_iso_code'})
    countryIsoCode: string;

    @Column({default: Date.now()})
    createdAt: string;
}
