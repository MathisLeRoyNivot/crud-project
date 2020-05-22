import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BankingInformation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'client_id'})
    clientId: number;

    @Column({name: 'card_number'})
    cardNumber: string;

    @Column()
    cryptogram: number;

    @Column({name: 'expires_at', default: Date.now()})
    expiresAt: string;
}
