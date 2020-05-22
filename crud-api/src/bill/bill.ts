import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bill {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'total_price'})
    totalPrice: number;

    @Column({name: 'is_paid'})
    isPaid: boolean;

    @Column({name: 'paid_at', default: Date.now()})
    paidAt: string;

    @Column({name: 'client_id'})
    clientId: number;

    @Column({name: 'emmitted_at', default: Date.now()})
    emmittedAt: string;
}
