import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
      ) {}

    findProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    addProduct(product: Product) {
        return this.productRepository.save(product);
    }
}
