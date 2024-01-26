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

@Entity()
export default class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  likes: number;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @Column({ default: false })
  isAnswered: boolean;

  @Column({ default: Date.now() })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.questions)
  author: User;
}
