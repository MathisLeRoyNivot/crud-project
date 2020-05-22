import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class BankingInfo {

    // ID
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // Client ID
    @ManyToOne(type => Client, clientId => clientId.id)

    // Card Number
    @Column()
    cardNumber: string;

    // Cryptogram
    @Column()
    cryptogram: string;

    // Expiration Date
    @Column()
    expirationDate: string;
}
