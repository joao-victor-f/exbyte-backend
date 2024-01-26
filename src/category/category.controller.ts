import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import CategoryService from './category.service';
import Category from './category';
import CategoryCreateDTO from './dto/categoryCreateDTO';
import CategoryUpdateDTO from './dto/categoryUpdateDTO';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get('categories')
  async findAll(): Promise<Category[]> {
    return await this.categoryService.findAll();
  }

  @Get('categories/:id')
  async findOne(@Param('id') id: string) {
    return await this.categoryService.findOne(Number(id));
  }

  @Post()
  async create(@Body() category: CategoryCreateDTO): Promise<Category> {
    return await this.categoryService.add(category);
  }

  @Put('categories/:id')
  async update(@Param('id') id: string, @Body() category: CategoryUpdateDTO) {
    return await this.categoryService.update(Number(id), category);
  }

  @Delete('categories/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.categoryService.remove(Number(id));
  }
}
