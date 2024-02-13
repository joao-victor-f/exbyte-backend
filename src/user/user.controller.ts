import { Controller, Get, Param } from '@nestjs/common';
import UserService from './user.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('/api/user')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users/:id')
  @Public()
  async findOne(@Param('id') id: string) {
    return await this.userService.findOneBy({ id: Number(id) });
  }
}
