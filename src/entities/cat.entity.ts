// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// export class Cat {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column()
//   age: number;

//   @Column()
//   breed: string;
// }

// Cat with serialization
import { Exclude, Expose, Transform } from 'class-transformer';

export class Cat {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  age: number;

  @Expose()
  breed: string;

  @Exclude()
  secretCode: string;

  @Expose()
  @Transform(({ value }) => value.toUpperCase()) // transform breed to uppercase 
  breedTransformed: string;
  

  constructor(partial: Partial<Cat>) {
    Object.assign(this, partial);
  }
}
