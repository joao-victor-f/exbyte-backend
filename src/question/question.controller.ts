import { Controller, Get, Param } from '@nestjs/common';
import QuestionService from './question.service';
import Question from './question';

@Controller('api/question')
export default class QuestionController {
  constructor(private readonly questionService: QuestionService) { }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<Question | null> {
    return await this.questionService.findOne(Number(id));
  }

  @Get()
  async findAll(): Promise<Question[]> {
    return await this.questionService.findAll();
  }
}
