
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
// src/cats/cats.service.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CommonService } from 'src/common/commo.service';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  constructor(
    @Inject(forwardRef(() => CommonService))
    private commonService: CommonService,
  ) {}

  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  async findAll(): Promise<Cat[]> {
    console.log('Calling CommonService from CatsService...');
    this.commonService.logCatInfo(); // Circular use
    return this.cats;
  }
}
