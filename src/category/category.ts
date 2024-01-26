import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
