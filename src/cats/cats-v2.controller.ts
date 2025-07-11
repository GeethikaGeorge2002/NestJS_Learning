import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'cats',
  version: '2',
})
export class CatsV2Controller {
  @Get()
  getCatsV2() {
    return 'This is version 2 of Cats API';
  }
}
// This controller is specifically for version 2 of the Cats API.
// It uses the `@Controller` decorator with a version specified.