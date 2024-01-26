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
  ) { }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneBy(filter: {
    id?: number;
    username?: string;
  }): Promise<User | null> {
    return this.userRepository.findOneBy(filter);
  }

  async create(createUserDTO: CreateUserDTO): Promise<User> {
    return this.userRepository.save(createUserDTO);
  }
}
