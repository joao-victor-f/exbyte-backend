import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

@Exclude()
export default class O {
  @IsString()
  @Expose()
  username: string;

  @IsEmail()
  @Expose()
  email: string;

  @MinLength(6)
  @Expose()
  password: string;
}
