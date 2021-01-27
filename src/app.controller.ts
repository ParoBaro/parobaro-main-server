import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/hello-world')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/hello-test')
  getTest(): string {
    debugger;
    console.log('hello world')
    return this.appService.getTest('asdj');
  }
}
