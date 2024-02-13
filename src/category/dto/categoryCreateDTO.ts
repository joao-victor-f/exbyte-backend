import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export default class CategoryCreateDTO {
  @Expose()
  @IsString()
  title: string;
}
