// import { Controller, Get, Redirect } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}
//   @Get()
//   getHome(): string {
//   return 'Welcome to NestJS Home!';
// }


//   @Get('docs')
//   @Redirect('https://docs.nestjs.com', 302)
//   getDocs() {
    
//     return;
//   }
// }


// DISPLAY CONFIG IN CONTROLLER
// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private appService: AppService) {}

//   @Get('config')
//   getConfig() {
//     return {
//       appName: this.appService.getAppName(),
//       port: this.appService.getPort(),
//     };
//   }
// }

// VALIDATION EXAMPLE
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './cats/dto/create-cat.dto';
import { FindOneParams } from './cats/dto/find-one-params.dto';
import { CatsService } from './cats/cats.service';
import { Cat } from 'src/entities/cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // @Post()
  // create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
  //   return this.catsService.create(createCatDto);
  // }
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `Cat created with name: ${createCatDto.name}, age: ${createCatDto.age}`;
  }

  @Get(':id')
  findOne(@Param() params: FindOneParams): string {
    return `You asked for cat #${params.id}`;
  }
}

