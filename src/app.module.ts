// import { Module, NestModule,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { CatsController } from './cats/cats.controller';
// import { CatsService } from './cats/cats.service';
// import { CatsModule } from './cats/cats.module';
// import { LoggerMiddleware } from './common/middleware/logger.middleware';
// import { CommonService } from './common/commo.service';

// @Module({
//   imports: [CatsModule],
//   // controllers: [AppController,CatsController],
//   // providers: [AppService, CatsService],
  
//   providers: [CatsService, CommonService],
// })

// export class AppModule implements NestModule {
//   configure(consumer:MiddlewareConsumer) {
//     // Middleware configuration can go here if needed
//     consumer
//       .apply(LoggerMiddleware) 
//        .exclude(
//     // Exclude specific routes from LoggerMiddleware
//     { path: 'cats', method: RequestMethod.POST },
//     'cats/{*splat}',
//   )
//       .forRoutes(CatsController); // Apply LoggerMiddleware to CatsController routes
//   }
// }


// // LAZY LOAD EXAMPLE


// import { Module } from '@nestjs/common';
// import { LazyModuleLoader } from '@nestjs/core';
// import { ConsumerService } from './common/consumer.service';

// @Module({
//   providers: [LazyModuleLoader, ConsumerService],
// })
// export class AppModule {}

//  CONFIG ENV EXAMPLE

// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true, // makes ConfigService available everywhere
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

// POSTGRSQL EXAMPLE WITH TYPEORM and cache example

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { CatsModule } from './cats/cats.module'; // my module
import { CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule'; //  using ScheduleModule for scheduling tasks

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432'), 
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Automatically load entities from modules
    
    }),
     CacheModule.register({
      isGlobal: true, // Makes cache available globally
      ttl: 10,        // Default TTL in seconds

    }),
    ScheduleModule.forRoot(), // If you are using ScheduleModule for enabling scheduling globally
    CatsModule
  ],
})
export class AppModule {}

