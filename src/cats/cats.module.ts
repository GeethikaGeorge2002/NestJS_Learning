import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/entities/cat.entity';
import { CatsV2Controller } from './cats-v2.controller';

@Module({
     imports: [TypeOrmModule.forFeature([Cat])],
    controllers: [CatsController,CatsV2Controller],
    providers: [CatsService],
    exports: [CatsService], // Exporting CatsService to be used in other modules if needed 
})
export class CatsModule {}
