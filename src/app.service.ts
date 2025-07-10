// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }

//USE CONFIG SERVICE TO GET ENVIRONMENT VARIABLES
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getAppName(): string {
    return this.configService.get<string>('APP_NAME') ?? 'DefaultAppName';
  }

  getPort(): number {
    return this.configService.get<number>('PORT') ?? 3000;
  }
}

