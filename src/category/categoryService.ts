import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Category from './category';
import { Repository } from 'typeorm';
import CategoryDTO from './dto/categoryDTO';

@Injectable()
export default class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<CategoryDTO[]> {
    return this.categoryRepository.find();
  }

  findOne(id: number): Promise<CategoryDTO | null> {
    return this.categoryRepository.findOneBy({ id });
  }

  async update(id: number, title: string): Promise<void> {
    await this.categoryRepository.update(id, { title: title });
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete({ id });
  }
}
