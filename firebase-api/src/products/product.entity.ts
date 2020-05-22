import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products'})
export class Product {

    // ID
    @PrimaryGeneratedColumn('uuid')
    id: string;

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
    @Column({ name: 'unit_price'})
    unitPrice: number;

    // Is Available
    @Column({ name: 'is_available'})
    isAvailable: boolean;

    // Stock
    @Column()
    stock: number;

    constructor(
        brand: string,
        model: string,
        photo: string,
        unitPrice: number,
        isAvailable: boolean,
        stock: number ) {
            this.brand = brand;
            this.model = model;
            this.photo = photo;
            this.unitPrice = unitPrice;
            this.isAvailable = isAvailable;
            this.stock = stock;
        }
}
