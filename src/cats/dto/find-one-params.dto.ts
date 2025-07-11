import { Transform } from 'class-transformer';
import { IsInt } from 'class-validator';

export class FindOneParams {
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  id: number;
}
// This DTO is used to validate and transform the 'id' parameter in the route handler.