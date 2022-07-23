import { IsNotEmpty, IsString } from 'class-validator';

export class AppDto {
  @IsNotEmpty()
  @IsString()
  a: number;

  @IsNotEmpty()
  @IsString()
  b: number;
}
