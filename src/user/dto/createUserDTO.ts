import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

@Exclude()
export default class CreateUserDTO {
  @Expose()
  @IsString()
  username: string;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsString()
  @MinLength(6)
  password: string;
}
