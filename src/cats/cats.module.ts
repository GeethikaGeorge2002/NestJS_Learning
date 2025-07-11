import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/entities/cat.entity';

@Module({
     imports: [TypeOrmModule.forFeature([Cat])],
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService], // Exporting CatsService to be used in other modules if needed
})
export class CatsModule {}
