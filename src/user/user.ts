import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Question from '../question/question';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Question, (question) => question.author)
  questions: Question[];

  @Column({ type: Date, default: Date.now() })
  createdAt: Date;
}
