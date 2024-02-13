import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import User from './user';
import CreateUserDTO from './dto/createUserDTO';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneBy(filter: {
    id?: number;
    username?: string;
  }): Promise<any | null> {
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.questions', 'question')
      .select([
        'question.id',
        'question.title',
        'question.likes',
        'question.createdAt',
        'user.username',
        'user.createdAt',
      ])
      .where(filter)
      .getMany();
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    return this.userRepository.save(createUserDTO);
  }
}
