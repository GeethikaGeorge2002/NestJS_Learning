
// import { Injectable, Inject, forwardRef } from '@nestjs/common';
// import { CatsService } from '../cats/cats.service';

// @Injectable()
// export class CommonService {
//   constructor(
//     @Inject(forwardRef(() => CatsService))
//     private catsService: CatsService,
//   ) {}

//   logCatInfo() {
//     console.log('Calling CatsService from CommonService...');
//     this.catsService.findAll();
//   }
// }


import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  log() {
    console.log('Hello from CommonService');
  }
}
