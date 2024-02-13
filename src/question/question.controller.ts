import { Controller, Get, Param } from '@nestjs/common';
import QuestionService from './question.service';
import Question from './question';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('api/question')
export default class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('/questions/:id')
  @Public()
  async findOne(@Param('id') id: string): Promise<Question | null> {
    return await this.questionService.findOne(Number(id));
  }

  @Get('/questions')
  @Public()
  async findAll(): Promise<Question[]> {
    return await this.questionService.findAll();
  }
}
