import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import AuthService from './auth.service';
import SignInDTO from './signinDTO';
import AuthGuard from './auth.guard';

@Controller('api/auth/')
export default class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  signIn(@Body() signinDTO: SignInDTO) {
    return this.authService.signIn(signinDTO);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
