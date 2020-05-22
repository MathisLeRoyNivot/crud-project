import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    photo: string;

    @Column({name: 'unit_price'})
    unitPrice: number;

    @Column({name: 'is_available'})
    isAvailable: number;

    @Column()
    stock: number;
}
