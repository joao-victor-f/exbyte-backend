import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Category from './category';
import { Repository } from 'typeorm';
import CategoryCreateDTO from './dto/categoryCreateDTO';
import CategoryUpdateDTO from './dto/categoryUpdateDTO';

@Injectable()
export default class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) { }

  async add(category: CategoryCreateDTO): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: number): Promise<Category | null> {
    return this.categoryRepository.findOneBy({ id });
  }

  async update(id: number, category: CategoryUpdateDTO): Promise<Category> {
    await this.categoryRepository.update(id, category);
    return this.categoryRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.categoryRepository.delete({ id });
  }
}
