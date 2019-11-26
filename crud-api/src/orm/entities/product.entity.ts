import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { uuidv4 } from 'uuid';

@Entity()
export class Product {

    // ID
    @PrimaryGeneratedColumn()
    id: number;

    // Brand
    @Column()
    brand: string;

    // Model
    @Column()
    model: string;

    // Photo
    @Column()
    photo: string;

    // Unit Price
    @Column()
    unitPrice: number;

    // Is Available
    @Column()
    isAvailable: boolean;

    // Stock
    @Column()
    stock: number;

    // UUID
    @Column({
        type: 'varchar',
        length: 255,
        default: uuidv4(),
    })
    uuid: string;
}
