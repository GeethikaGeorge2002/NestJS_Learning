import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHome(): string {
  return 'Welcome to NestJS Home!';
}


  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs() {
    
    return;
  }
}

