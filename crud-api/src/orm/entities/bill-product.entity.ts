import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Bill } from './bill.entity';
import { Product } from './product.entity';

@Entity()
export class BillProduct {

    // ID
    @PrimaryGeneratedColumn()
    id: number;

    // Bill ID
    @OneToOne(type => Bill, billId => billId.id)

    // Product ID
    @OneToOne(type => Product, productId => productId.id)

    // Quantity ID
    @Column()
    quantity: number;
}
