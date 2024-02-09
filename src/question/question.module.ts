import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Question from './question';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
})
export default class QuestionModule {}
