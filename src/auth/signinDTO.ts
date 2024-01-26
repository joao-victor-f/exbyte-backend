import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

@Exclude()
export default class SignInDTO {
  @Expose()
  @IsString()
  username: string;

  @Expose()
  @IsEmail()
  email: string;

  @MinLength(6)
  @IsString()
  @Expose()
  password: string;
}
