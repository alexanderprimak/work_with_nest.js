import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';
import { ProductsService } from './products.service';
import { Product } from 'src/shemas/products.schema';
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
  Res,
  Req,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }
  //   @Get()
  //   GetProduct(@Res() res: Response, @Req() req: Request): string {
  //     res.status(201).end('poka');
  //     return `I get product `;
  //   }

  @Get()
  getProductAll(): Promise<Product[]> {
    return this.productsService.getProductAll();
  }

  // @Get(':id')
  // getProductOne(@Param('id') id: string) {
  //   return this.productsService.getProductOne(id);
  // }

  @Delete(':id')
  removeProduct(@Param('id') id: string): Promise<Product> {
    return this.productsService.removeProduct(id);
  }

  @Put(':id')
  put(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }
}
