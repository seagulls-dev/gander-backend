import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add')
  add(@Body() body: AppDto): number {
    return this.appService.add(body);
  }
}
