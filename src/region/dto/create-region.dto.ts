import { IsString } from 'class-validator';

export class CreateRegionDto {
  @IsString()
  readonly name: string;
}
