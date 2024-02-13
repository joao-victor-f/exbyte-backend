import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export default class CategoryUpdateDTO {
  @Expose()
  @IsString()
  title: string;
}
