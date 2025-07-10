import { Module, NestModule,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CommonService } from './common/commo.service';

@Module({
  imports: [CatsModule],
  // controllers: [AppController,CatsController],
  // providers: [AppService, CatsService],
  
  providers: [CatsService, CommonService],
})

export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer) {
    // Middleware configuration can go here if needed
    consumer
      .apply(LoggerMiddleware) 
       .exclude(
    // Exclude specific routes from LoggerMiddleware
    { path: 'cats', method: RequestMethod.POST },
    'cats/{*splat}',
  )
      .forRoutes(CatsController); // Apply LoggerMiddleware to CatsController routes
  }
}
