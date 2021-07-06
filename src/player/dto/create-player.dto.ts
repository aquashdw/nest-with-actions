import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsOptional()
  @IsNumber()
  readonly mainPosition: number;

  @IsOptional()
  @IsNumber()
  readonly pitchStyle: number;

  @IsOptional()
  @IsNumber()
  readonly battingSide: number;

  @IsOptional()
  @IsNumber()
  readonly region: number;
}
