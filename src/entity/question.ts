import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Image from './image';
import Category from './category';

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

  @OneToMany(() => Image, (image) => image.question)
  images: Image[];

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @Column({ default: false })
  isAnswered: boolean;

  @Column({ default: Date.now() })
  createdAt: Date;
}
