import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findProducts(): Promise<Product[]>;
    addProduct(product: Product): Promise<Product>;
}
