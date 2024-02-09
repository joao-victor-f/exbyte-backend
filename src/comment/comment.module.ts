import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Comment from './comment';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
})
export class CommentModule {}
