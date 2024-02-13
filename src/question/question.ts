import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Category from '../category/category';
import User from '../user/user';
import Comment from 'src/comment/comment';

@Entity()
export default class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ default: 0 })
  likes: number;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @Column({ default: false })
  isAnswered: boolean;

  @ManyToOne(() => User, (user) => user.questions)
  author: User;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @OneToMany(() => Comment, (comment) => comment.question)
  comments: Comment[];
}
