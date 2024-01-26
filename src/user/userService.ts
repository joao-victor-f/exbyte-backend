import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserDTO from './dto/userDTO';
import { Injectable } from '@nestjs/common';
import User from './user';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<UserDTO[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<UserDTO | null> {
    return this.userRepository.findOneBy({ id });
  }
}
