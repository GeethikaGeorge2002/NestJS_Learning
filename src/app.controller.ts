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
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('config')
  getConfig() {
    return {
      appName: this.appService.getAppName(),
      port: this.appService.getPort(),
    };
  }
}

