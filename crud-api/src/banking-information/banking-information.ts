import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Client } from '../client/client';

@Entity()
export class BankingInformation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'client_id'})
    @OneToMany(type => Client, client => client.id)
    clientId: number;

    @Column({name: 'card_number'})
    cardNumber: string;

    @Column()
    cryptogram: number;

    @Column({name: 'expires_at', default: Date.now()})
    expiresAt: string;
}
