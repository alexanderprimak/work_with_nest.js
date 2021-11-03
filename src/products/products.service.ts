import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/shemas/products.schema';
import { CreateProductDto } from './create-product.dto';
import { Model } from 'mongoose';
import { UpdateProductDto } from './update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getProductAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getProductOne(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async removeProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, {
      new: true,
    });
  }
}
