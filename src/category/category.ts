import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Question from '../question/question';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Question, (question) => question.categories)
  questions: Question[];
}
