import { Body, Controller, Post, Request, Get } from '@nestjs/common';
import AuthService from './auth.service';
import SignInDTO from './signInDTO';
import CreateUserDTO from 'src/user/dto/createUserDTO';
import { Public } from './decorators/public.decorator';

@Controller('api/auth/')
export default class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @Public()
  signIn(@Body() signinDTO: SignInDTO) {
    return this.authService.signIn(signinDTO);
  }

  @Post('register')
  @Public()
  signUp(@Body() createUserDTO: CreateUserDTO) {
    return this.authService.signUp(createUserDTO);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
