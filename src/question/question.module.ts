import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Question from './question';
import QuestionController from './question.controller';
import QuestionService from './question.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
