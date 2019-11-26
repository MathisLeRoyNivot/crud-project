import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Client } from './client.entity';
import { uuidv4 } from 'uuid';

@Entity()
export class BankingInfo {

    // ID
    @PrimaryGeneratedColumn()
    id: number;

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

    // UUID
    @Column({
        type: 'varchar',
        length: 255,
        default: uuidv4(),
    })
    uuid: string;
}
