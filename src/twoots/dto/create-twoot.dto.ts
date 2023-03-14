import { IsString } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
