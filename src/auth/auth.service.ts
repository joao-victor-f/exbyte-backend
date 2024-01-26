import { Injectable, UnauthorizedException } from '@nestjs/common';
import UserService from 'src/user/user.service';
import SignInDTO from './signinDTO';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export default class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async signIn(signinDTO: SignInDTO): Promise<{ accessToken: string }> {
    const user = await this.userService.findOneBy({
      username: signinDTO.username,
    });

    if (user?.password !== signinDTO.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
