import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToOne } from 'typeorm';
import { Client } from '../client/client';
import { Product } from '../product/product';

@Entity()
export class Bill {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_id'})
    // @ManyToOne(type => Product, product => product.id)
    productId: number;

    @Column()
    quantity: number;

    @Column({name: 'total_price'})
    totalPrice: number;

    @Column({name: 'is_paid'})
    isPaid: boolean;

    @Column({name: 'paid_at', default: Date.now()})
    paidAt: string;

    @Column({name: 'client_id'})
    // @ManyToOne(type => Client, client => client.id)
    clientId: number;

    @Column({name: 'emmitted_at', default: Date.now()})
    emmittedAt: string;
}
