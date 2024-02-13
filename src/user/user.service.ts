import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import User from './user';
import CreateUserDTO from './dto/createUserDTO';
import ReadUserDTO from './dto/readUserDTO';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneBy(filter: {
    id?: number;
    username?: string;
  }): Promise<ReadUserDTO | null> {
    const response = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.questions', 'question')
      .select([
        'question.id',
        'question.title',
        'question.likes',
        'question.createdAt',
        'user.id',
        'user.username',
        'user.createdAt',
      ])
      .where(filter)
      .getOne();

    return response as ReadUserDTO;
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    return this.userRepository.save(createUserDTO);
  }

  async getProfile(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({ username });
  }
}
