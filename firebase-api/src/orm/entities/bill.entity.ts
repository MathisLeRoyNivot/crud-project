import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class Bill {

    // ID
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // Client ID
    @ManyToOne(type => Client, clientId => clientId.id)

    // Total Price
    @Column()
    totalPrice: number;

    // Is Paid
    @Column({
        type: 'boolean',
        default: false,
    })
    isPaid: boolean;

    // Paid At
    @Column({
        type: 'datetime',
    })
    paidAt: Date;

    // Address
    @Column()
    address: string;

    // Emitted At
    @Column({
        type: 'datetime',
        default: Date.now(),
    })
    emittedAt: Date;
}
