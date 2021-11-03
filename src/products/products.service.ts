import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getProductAll() {
    return this.products;
  }

  getProductOne(id: string) {
    return this.products.find((product) => product.id === id);
  }

  removeProduct(id: string) {
    return this.products.filter((product) => product.id !== id);
  }

  createProduct(createProductDto: CreateProductDto) {
    return this.products.push({
      ...createProductDto,
      id: Date.now().toString(),
    });
  }
}
