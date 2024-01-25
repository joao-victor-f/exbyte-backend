import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Question from '../question/question';

export default class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  src: string;

  @ManyToOne(() => Question, (question) => question.images)
  question: Question;
}
