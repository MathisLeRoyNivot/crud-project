import { Connection, Repository } from 'typeorm';
import { Product } from './product.entity';
export declare const photoProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<Product>;
    inject: string[];
}[];
