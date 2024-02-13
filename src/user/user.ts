import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Question from '../question/question';
import Comment from 'src/comment/comment';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Question, (question) => question.author)
  questions: Question[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => Comment, (comment) => comment.author)
  comments: Comment[];
}
