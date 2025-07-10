
import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { CatsModule } from 'src/cats/cats.module';
import { CatsService } from 'src/cats/cats.service';

@Injectable()
export class ConsumerService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async loadCats() {
    const moduleRef = await this.lazyModuleLoader.load(() => CatsModule);
    const catsService = moduleRef.get(CatsService, { strict: false });
    return catsService.sayHello();
  }
}
