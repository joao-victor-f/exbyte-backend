import { Exclude, Expose } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

@Exclude()
export default class SignInDTO {
  @Expose()
  @IsString()
  username: string;

  @MinLength(6)
  @IsString()
  @Expose()
  password: string;
}
