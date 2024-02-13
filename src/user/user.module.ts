import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './user';
import UserService from './user.service';
import Question from 'src/question/question';
import UserController from './user.controller';
import Comment from 'src/comment/comment';

@Module({
  imports: [TypeOrmModule.forFeature([User, Question, Comment])],
  exports: [UserService],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
