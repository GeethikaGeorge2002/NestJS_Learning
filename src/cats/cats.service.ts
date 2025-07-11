
// import { Injectable } from '@nestjs/common';
// import { Cat } from './interfaces/cat.interface';

// @Injectable()
// export class CatsService {
//   private readonly cats: Cat[] = [];

//   create(cat: Cat) {
//     this.cats.push(cat);
//   }

//   // findAll(): Cat[] {
//   //   return this.cats;
//   // }
  
// async findAll(): Promise<Cat[]> {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([
//         { id: '1', name: 'Totoro', age: '5', breed: 'Persian' },
//         { id: '2', name: 'Mochi', age: '3', breed: 'Siamese' },
//       ]);
//     }, 1000);
//   });
// }

// }

//Injection scpe example

// import { Injectable, Scope } from '@nestjs/common';
// import { Cat } from './interfaces/cat.interface';

// @Injectable({ scope: Scope.REQUEST }) 
// export class CatsService {
//   private readonly cats: Cat[] = [];

//   create(cat: Cat) {
//     this.cats.push(cat);
//   }

//   async findAll(): Promise<Cat[]> {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve([
//           { id: '1', name: 'Totoro', age: '5', breed: 'Persian' },
//           { id: '2', name: 'Mochi', age: '3', breed: 'Siamese' },
//         ]);
//       }, 1000);
//     });
//   }
// }

//Circular dependency  resolving example

// import { Injectable, Inject, forwardRef } from '@nestjs/common';
// import { CommonService } from 'src/common/commo.service';
// import { Cat } from './interfaces/cat.interface';

// @Injectable()
// export class CatsService {
//   constructor(
//     @Inject(forwardRef(() => CommonService))
//     private commonService: CommonService,
//   ) {}

//   private readonly cats: Cat[] = [];

//   create(cat: Cat) {
//     this.cats.push(cat);
//   }

//   async findAll(): Promise<Cat[]> {
//     console.log('Calling CommonService from CatsService...');
//     this.commonService.logCatInfo(); // Circular use
//     return this.cats;
//   }
// }

// /MODULAR REFERENCE EXAMPLE

// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { ModuleRef } from '@nestjs/core';
// import { CommonService } from 'src/common/commo.service';

// @Injectable()
// export class CatsService implements OnModuleInit {
//   private commonService: CommonService;

//   constructor(private moduleRef: ModuleRef) {}

//   onModuleInit() {
//     // Dynamically resolve the service
//     this.commonService = this.moduleRef.get(CommonService, { strict: false });
//   }

//   sayHello() {
//     this.commonService?.log();
//   }
// }

// DATABASE CONFIG USING POSTGRES EXAMPLE

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from 'src/entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  create(catData: Partial<Cat>): Promise<Cat> {
    const cat = this.catsRepository.create(catData);
    return this.catsRepository.save(cat);
  }

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }
}
