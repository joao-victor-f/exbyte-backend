import Question from 'src/question/question';
import User from 'src/user/user';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Comment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.comments)
  author: User;

  respondsTo?: Comment;

  @ManyToOne(() => Question, (question) => question.comments)
  question: Question;

  @Column({ default: 0 })
  likes: number;
}
