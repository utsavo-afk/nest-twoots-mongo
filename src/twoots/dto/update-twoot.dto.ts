import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TwootStatus } from '../twoot.model';

export class UpdateTwootDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(TwootStatus)
  status: TwootStatus;
}
