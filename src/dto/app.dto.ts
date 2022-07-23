import { IsNotEmpty, IsString } from 'class-validator';

export class AppDto {
  @IsNotEmpty()
  @IsString()
  first: number;

  @IsNotEmpty()
  @IsString()
  second: number;
}
