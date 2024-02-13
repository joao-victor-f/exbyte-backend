import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Question from './question';
import { Repository } from 'typeorm';

@Injectable()
export default class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) { }

  findAll(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  findOne(id: number): Promise<Question | null> {
    return this.questionRepository.findOneBy({ id });
  }
}
