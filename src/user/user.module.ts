import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './user';
import UserService from './user.service';
import Question from 'src/question/question';

@Module({
  imports: [TypeOrmModule.forFeature([User, Question])],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule { }
