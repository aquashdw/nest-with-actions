import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLeagueDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly regionId: number;

  @IsOptional()
  @IsNumber({}, { each: true })
  readonly teams: number[];
}
