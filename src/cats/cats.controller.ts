// import { Controller, Get, Post, Param,Put,Delete,Query, Body, HttpException, HttpStatus } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
// import { UpdateCatDto } from './dto/update-cat.dto';
// import { ListAllEntities } from './dto/list-all-entities.dto';
// import { CatsService } from './cats.service';
// import { Cat } from './interfaces/cat.interface';

// @Controller('cats')
// export class CatsController {
//   constructor(private catsService: CatsService) {}
//   @Post()
//   create(): string {
//     return 'This action adds a new cat TOTORO';
//   }

//   @Get()
//   findAll(): string {
//     return 'This action returns all cats meow';
//   }
// }
  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   console.log(id);  
  //   return `This action returns a CAT of id #${id} cat`;
  // }

  // @Post()
  // create(@Body() createCatDto: CreateCatDto) {
  //   return `Cat created: ${createCatDto.name}, Age: ${createCatDto.age}, Breed: ${createCatDto.breed}`;
  // }

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} cat`;
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat with data: ${JSON.stringify(updateCatDto)}`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   this.catsService.create(createCatDto);
  // }

//   @Get()
//   async findAll(): Promise<Cat[]> {
//     return this.catsService.findAll();
// }

//     @Get()
// async findAll() {
//   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
// }

//    @Get(':id')
// async findOne(@Param('id') id: string) {
//   // const cat = await this.catsService.findOneById(id);
//   const cat = (await this.catsService.findAll()).find(cat => cat.id === id);
//   if (!cat) {
//     throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
//   }
//   return cat;
// }

// @Get()
// async findAll(): Promise<Cat[]> {
//   const cats = await this.catsService.findAll(); // await works fine here
//   return cats;
// }



// DATABASE CONFIG EXAMPLE
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/entities/cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() catData: Partial<Cat>): Promise<Cat> {
    return this.catsService.create(catData);
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
 